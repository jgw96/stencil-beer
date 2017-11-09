import { Component, State, Prop, Listen } from '@stencil/core';
// import { LoadingController, Loading } from '@ionic/core';


@Component({
  tag: 'beer-page',
  styleUrl: 'beer-page.scss'
})
export class BeerPage {

  loading: any;

  @State() beers: any[];

  @Prop({ connect: 'ion-loading-controller' }) loadingCtrl: any;
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

  fetchBeers(page: number) {
    const key = 'c0b90d19385d7dabee991e89c24ea711';

    this.loadingCtrl.create({ content: 'fetching beers...' }).then((loading) => {
      // so we can dismiss the loading
      // if the user goes back
      this.loading = loading;

      loading.present().then(() => {
        fetch(`https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers?key=${key}&p=${page}&styleId=2`).then((response) => {
          return response.json();
        }).then((data) => {
          this.beers = data.data;
          console.log(data);
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
    const key = 'c0b90d19385d7dabee991e89c24ea711';

    setTimeout(() => {
      if (ev.target.value.length > 0) {
        console.log(ev.target.value);
        fetch(`https://cors.now.sh/http://api.brewerydb.com/v2/search?key=${key}&q=${ev.target.value}&type=beer`).then((response) => {
          return response.json();
        }).then((data) => {
          this.beers = data.data;
        }).catch(() => {
          this.fetchBeers(this.page);
        })
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

        <ion-footer>
          <ion-toolbar color='dark'>
            <ion-buttons slot='start'>
              <ion-button clear onClick={() => this.previousPage()} color='primary'>
                prev
              </ion-button>
            </ion-buttons>


            <ion-buttons slot='end'>
              <ion-button clear onClick={() => this.nextPage()} color='primary'>
                next
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-footer>
      </ion-page>
    );
  }
}