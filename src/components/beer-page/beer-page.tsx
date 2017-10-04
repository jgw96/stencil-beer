import { Component, State, Prop, Listen } from '@stencil/core';
import { LoadingController, Loading } from '@ionic/core';


@Component({
  tag: 'beer-page',
  styleUrl: 'beer-page.scss'
})
export class BeerPage {

  loading: Loading;

  @State() beers: any[];

  @Prop({ connect: 'ion-loading-controller' }) loadingCtrl: LoadingController;
  @Prop({ context: 'isServer' }) private isServer: boolean;

  page: number;

  componentWillLoad() {
    this.page = 1;
    
    if (!this.isServer) {
      this.fetchBeers(this.page);
    }
  }

  componentDidUnload() {
    this.loading.dismiss();
  }

  fetchBeers(page) {
    this.loadingCtrl.create({ content: 'fetching beers...' }).then((loading) => {
      // so we can dismiss the loading
      // if the user goes back
      this.loading = loading;

      loading.present().then(() => {
        fetch(`https://api.punkapi.com/v2/beers?page=${page}`).then((response) => {
          return response.json();
        }).then((data) => {
          this.beers = data;
          loading.dismiss();
        })
      })
    })
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
  
  @Listen('ionInput')
  search(ev) {
    setTimeout(() => {
      fetch(`https://api.punkapi.com/v2/beers?beer_name=${ev.detail.target.value}`).then((response) => {
        return response.json();
      }).then((data) => {
        this.beers = data;
      }).catch(() => {
        this.fetchBeers(this.page);
      })
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

        <ion-footer>
          <ion-toolbar color='dark'>
            <ion-buttons slot='start'>
              <ion-button clear onClick={() => this.previousPage()}>
                prev
              </ion-button>
            </ion-buttons>


            <ion-buttons slot='end'>
              <ion-button clear onClick={() => this.nextPage()}>
                next
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-footer>
      </ion-page>
    );
  }
}