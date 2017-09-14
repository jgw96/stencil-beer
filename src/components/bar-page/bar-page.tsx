import { Component, State, Prop, Listen } from '@stencil/core';
import { LoadingController } from '@ionic/core';


@Component({
  tag: 'bar-page',
  styleUrl: 'bar-page.scss'
})
export class BarPage {

  apiRoot: string = 'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search/geo/point?key=c0b90d19385d7dabee991e89c24ea711';

  @State() bars: any[];

  @Prop({ connect: 'ion-loading-controller' }) loadingCtrl: LoadingController;

  componentDidLoad() {
    this.loadingCtrl.create({ content: 'fetching bars...' }).then((loading) => {
      loading.present().then(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          fetch(`${this.apiRoot}&lat=${position.coords.latitude}&lng=${position.coords.longitude}`, { mode: 'cors' }).then((response) => {
            return response.json()
          }).then((data) => {
            console.log(data);
            this.bars = data.data;

            loading.dismiss();
          })
        });
      })
    })
  }

  @Listen('ionInput')
  search(ev) {
    setTimeout(() => {
      const term = ev.detail.target.value;

      this.bars = this.bars.filter((bar) =>
        bar.brewery.name.toLowerCase().indexOf(term.toLowerCase()) > -1
      );
    }, 1000);
  }

  render() {
    return (
      <ion-page class='show-page'>
        <ion-toolbar color='dark'>
          <ion-searchbar></ion-searchbar>
        </ion-toolbar>

        <ion-content>
          <bar-list bars={this.bars}></bar-list>
        </ion-content>
      </ion-page>
    );
  }
}