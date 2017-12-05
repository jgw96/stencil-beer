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

  componentDidLoad() {
    this.page = 1;

    if (!this.isServer) {
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
    this.beers = null;

    const key = 'c0b90d19385d7dabee991e89c24ea711';
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers?key=${key}&p=${page}&styleId=2`;

    const response = await fetch(url);
    const data = await response.json();

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
    const key = 'c0b90d19385d7dabee991e89c24ea711';
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?key=${key}&q=${ev.target.value}&type=beer`;

    const response = await fetch(url);
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
    }, 1000);
  }

  render() {
    return (
      <ion-page class='show-page'>
        <ion-toolbar color='dark'>
          <ion-searchbar></ion-searchbar>
        </ion-toolbar>

        <ion-content>
          <beer-list beers={this.beers}></beer-list>
        </ion-content>

        <ion-fab bottom right>
          <ion-fab-button onClick={() => this.goToFavorites()}>
            <ion-icon name='star'></ion-icon>
          </ion-fab-button>
        </ion-fab>

        <ion-footer>
          <ion-toolbar color='dark'>
            <ion-buttons slot='start'>
              <ion-button fill='clear' onClick={() => this.previousPage()} color='primary'>
                prev
              </ion-button>
            </ion-buttons>


            <ion-buttons slot='end'>
              <ion-button fill-='clear' onClick={() => this.nextPage()} color='primary'>
                next
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-footer>
      </ion-page>
    );
  }
}