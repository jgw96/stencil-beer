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
    const key = 'c0b90d19385d7dabee991e89c24ea711';

    fetch(`https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/${this.match.params.id}?key=${key}`).then((response) => {
      return response.json();
    }).then((data) => {
      this.beer = data.data;
    })
  }

  share() {
    (navigator as any).share({
      title: document.title,
      text: "Check out this cool beer",
      url: `${window.location.href}/detail/${this.beer.id}`
    }).then(() => {
      this.toastCtrl.create({ message: 'Beer shared', duration: 1000 }).then((toast) => {
        toast.present();
      });
    })
  }

  render() {
    if (this.beer) {

      return (
        <ion-page class='show-page'>
          <ion-content>
            <main id='animateIn'>
              <div id='img-block'>
                <st-img src={this.beer.labels ? this.beer.labels.medium : '../../images/beers.jpeg'} alt={this.beer.name}></st-img>
              </div>
              <h1>{this.beer.name}</h1>

              <div>ABV: {this.beer.abv ? this.beer.abv : 'Not available'}</div>
              <div>IBU: {this.beer.ibu ? this.beer.ibu : 'Not available'}</div>

              <p>{this.beer.description ? this.beer.description : 'No description available'}</p>

              <ion-button onClick={() => this.share()} block color='primary'>Share</ion-button>

            </main>
          </ion-content>
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