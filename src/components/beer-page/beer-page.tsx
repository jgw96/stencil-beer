import { Component, Element, State, Prop, Listen } from '@stencil/core';
import { ToastController } from '@ionic/core';
import { RouterHistory } from '@stencil/router';

import { Beer } from '../../global/interfaces';
import { fetchBeers, doSearch } from '../../global/http-service';

@Component({
  tag: 'beer-page',
  styleUrl: 'beer-page.scss'
})
export class BeerPage {

  page: number = 1;
  iScroll: any;

  @State() beers: Array<Beer>;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;
  @Prop() history: RouterHistory;

  @Element() el: Element;

  async componentDidLoad() {
    // set up with first bit of content
    this.beers = await fetchBeers(this.page);

    // now lets init infiniteScrolling
    this.iScroll = this.el.querySelector('#infinite-scroll');

    this.iScroll.addEventListener('ionInfinite', async () => {
      this.page = this.page + 1;
      console.log('here');

      try {
        const newBeers = await fetchBeers(this.page);
        this.beers = this.beers.concat(newBeers);
        this.iScroll.complete();
      }
      catch (err) {
        console.log(err);
        this.showErrorToast();
      }
    })
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error loading data', duration: 1000 });
    toast.present();
  }

  @Listen('ionInput')
  search(ev) {
    setTimeout(async () => {
      if (ev.target.value.length > 0) {
        try {
          const searchTerm = ev.target.value;
          this.beers = await doSearch(searchTerm);
        }
        catch (err) {
          this.beers = await fetchBeers(this.page);
        }
      } else {
        this.beers = await fetchBeers(1);
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

  async google(picture: Blob) {
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

          <ion-infinite-scroll id="infinite-scroll">
            <ion-infinite-scroll-content
              loadingSpinner="bubbles"
              loadingText="Loading more data...">
            </ion-infinite-scroll-content>
          </ion-infinite-scroll>
        </ion-content>
      </ion-page>
    );
  }
}