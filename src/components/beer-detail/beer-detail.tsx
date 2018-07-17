import { Component, Prop, State } from '@stencil/core';

import { Beer } from '../../global/interfaces';
import { getBeerDetail } from '../../global/http-service';

@Component({
  tag: 'beer-detail',
  styleUrl: 'beer-detail.css'
})
export class BeerDetail {

  @State() beer: Beer;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @Prop() beerId: string;

  componentDidLoad() {
    try {
      this.getBeerDetail();
    }
    catch (err) {
      this.showErrorToast();
      console.log(err);
    }
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error loading data', duration: 1000 });
    toast.present();
  }

  async getBeerDetail() {
    this.beer = await getBeerDetail(this.beerId);
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
      return [
        <profile-header>
          <ion-back-button defaultHref='/home/beers' />
        </profile-header>,

        <ion-content>
          <main id='animateIn'>
            <div id='img-block'>
              <img src={this.beer.labels ? this.beer.labels.large : '/assets/beers.jpeg'} alt={this.beer.name}></img>
            </div>
            <h1>{this.beer.name}</h1>

            <div>ABV: {this.beer.abv ? this.beer.abv : 'Not available'}</div>
            <div>IBU: {this.beer.ibu ? this.beer.ibu : 'Not available'}</div>

            <p>{this.beer.description ? this.beer.description : 'No description available'}</p>

          </main>

          <ion-fab vertical='bottom' horizontal='end' slot='fixed'>
            <ion-fab-button onClick={() => this.share(this.beer)}>
              <ion-icon name='share'></ion-icon>
            </ion-fab-button>
          </ion-fab>
        </ion-content>
      ]
    } else {
      return [
        <profile-header>
          <ion-back-button defaultHref='/home/beers' />
        </profile-header>,

        <ion-content padding>
          <main>
            <div id='fake-card'></div>
          </main>
        </ion-content>
      ];
    }
  }
}