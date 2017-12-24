import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { ToastController } from '@ionic/core';

import { Beer } from '../../global/interfaces';

@Component({
  tag: 'beer-detail',
  styleUrl: 'beer-detail.scss'
})
export class BeerDetail {

  @State() beer: Beer;

  @Prop() match: MatchResults;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  componentWillLoad() {
    try {
      this.getBeerDetail();
    }
    catch (err) {
      this.showErrorToast();
      console.error(err);
    }
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error loading data', duration: 1000 });
    toast.present();
  }

  async getBeerDetail() {
    const key = 'c0b90d19385d7dabee991e89c24ea711';
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/${this.match.params.id}?key=${key}`;

    const response = await fetch(url);
    const data = await response.json();

    this.beer = data.data;
  }

  async share(beer) {
    await (navigator as any).share({
      title: document.title,
      text: "Check out this cool beer",
      url: `${window.location.href}/detail/${beer.id}`
    })

    const toast = await this.toastCtrl.create({ message: 'beer shared', duration: 1000 });
    toast.present();
  }

  render() {
    if (this.beer) {

      return (
        <ion-page class='show-page'>

          <profile-header></profile-header>

          <ion-content>
            <main id='animateIn'>
              <div id='img-block'>
                <st-img src={this.beer.labels ? this.beer.labels.medium : '../../../images/beers.jpeg'} alt={this.beer.name}></st-img>
              </div>
              <h1>{this.beer.name}</h1>

              <div>ABV: {this.beer.abv ? this.beer.abv : 'Not available'}</div>
              <div>IBU: {this.beer.ibu ? this.beer.ibu : 'Not available'}</div>

              <p>{this.beer.description ? this.beer.description : 'No description available'}</p>

            </main>
          </ion-content>

          <ion-fab>
            <ion-fab-button onClick={() => this.share(this.beer)}>
              <ion-icon name='share'></ion-icon>
            </ion-fab-button>
          </ion-fab>
        </ion-page>
      )
    } else {
      return (
        <ion-page class='show-page'>
          <ion-content>
            <main>
              <div id='fake-card'></div>
            </main>
          </ion-content>
        </ion-page>
      );
    }
  }
}