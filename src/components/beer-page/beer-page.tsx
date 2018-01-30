import { Component, State, Prop, Listen } from '@stencil/core';
import { ToastController } from '@ionic/core';
import { RouterHistory } from '@stencil/router';

import { Beer } from '../../global/interfaces';

@Component({
  tag: 'beer-page',
  styleUrl: 'beer-page.scss'
})
export class BeerPage {

  page: number;

  @State() beers: Array<Beer>;

  @Prop({ context: 'isServer' }) private isServer: boolean;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;
  @Prop() history: RouterHistory;

  async componentDidLoad() {
    if (!this.isServer && this.beers === undefined) {
      console.log(this.isServer);

      this.page = 1;
      try {
        this.fetchBeers(this.page);
      }
      catch (err) {
        this.showErrorToast();
      }
    }
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error loading data', duration: 1000 });
    toast.present();
  }

  async fetchBeers(page: number) {
    const key = 'c0b90d19385d7dabee991e89c24ea711';
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers?key=${key}&p=${page}&styleId=2`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    this.beers = null;
    this.beers = data.data;
  }

  nextPage() {
    this.page = this.page + 1;
    this.fetchBeers(this.page);
  }

  previousPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.fetchBeers(this.page);
    }
  }

  async doSearch(ev) {
    this.beers = null;

    const key = 'c0b90d19385d7dabee991e89c24ea711';
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?key=${key}&q=${ev.target.value}&type=beer`;

    const response = await fetch(url, {
      headers: {
        'origin': 'https://stencilbeer-firebaseapp.com'
      }
    });
    const data = await response.json();
    this.beers = data.data;
  }

  goToFavorites() {
    this.history.push('/beers/favorites', {});
  }

  @Listen('ionInput')
  search(ev) {
    setTimeout(() => {
      if (ev.target.value.length > 0) {
        try {
          this.doSearch(ev);
        }
        catch (err) {
          this.fetchBeers(this.page);
        }
      } else {
        this.fetchBeers(1);
      }
    }, 500);
  }

  takePicture() {
    const input = document.createElement('input');
    input.type = 'file';
    input.name = 'image';
    input.accept = 'image/*';
    input.setAttribute('capture', 'camera');

    input.click();

    input.addEventListener('change', (ev: any) => {
      console.log('changed');
      console.log(ev.target.files);
      this.google(ev.target.files[0]);
    })
  }

  google(picture: Blob) {
    this.beers = null;

    const reader = new FileReader();
    reader.readAsDataURL(picture);

    reader.onloadend = () => {

      fetch('/vision', {
        method: 'POST',
        body: JSON.stringify({ image: reader.result })
      }).then((res) => {
        return res.json()
      }).then((data) => {
        console.log(data);

        const key = 'c0b90d19385d7dabee991e89c24ea711';
        const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?key=${key}&q=${data[0]}&type=beer`;

        fetch(url, {
          headers: {
            'origin': 'https://stencilbeer-firebaseapp.com'
          }
        }).then((response) => {
          return response.json()
        }).then((data) => {
          this.beers = data.data;
        })
      })

    }
  }

  render() {
    return (
      <ion-page class='show-page'>

        <profile-header></profile-header>

        <ion-toolbar color='dark'>
          <ion-searchbar></ion-searchbar>

          <ion-buttons slot='end'>
            <ion-button fill='clear' icon-only onClick={() => this.takePicture()}>
              <ion-icon id='cameraButton' name='camera'></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>

        <ion-content>
          <beer-list fave={false} beers={this.beers}></beer-list>
        </ion-content>

        <ion-fab>
          <ion-fab-button onClick={() => this.goToFavorites()}>
            <ion-icon name='star'></ion-icon>
          </ion-fab-button>
        </ion-fab>

        <ion-footer>
          <ion-toolbar>
            <ion-buttons slot='start'>
              <ion-button fill='clear' onClick={() => this.previousPage()} color='primary'>
                prev
              </ion-button>
            </ion-buttons>


            <ion-buttons slot='end'>
              <ion-button fill='clear' onClick={() => this.nextPage()} color='primary'>
                next
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-footer>
      </ion-page>
    );
  }
}