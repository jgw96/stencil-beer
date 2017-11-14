import { Component, Prop, State } from '@stencil/core';
import { ToastController } from '@ionic/core';

@Component({
  tag: 'beer-detail',
  styleUrl: 'beer-detail.scss'
})
export class BeerDetail {

  @State() beer: any;

  @Prop() match: any;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  componentDidLoad() {
    const key = 'c0b90d19385d7dabee991e89c24ea711';

    fetch(`https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/${this.match.params.id}?key=${key}`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
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
            <div id='img-block'>
              <st-img src={this.beer.labels ? this.beer.labels.medium : '../../images/beers.jpeg'} alt={this.beer.name}></st-img>
            </div>
            <h1>{this.beer.name}</h1>

            <div>ABV: {this.beer.abv ? this.beer.abv : 'Not available'}</div>
            <div>IBU: {this.beer.ibu ? this.beer.ibu : 'Not available'}</div>

            <p>{this.beer.description ? this.beer.description : 'No description available'}</p>

            <ion-button onClick={() => this.share()} block color='primary'>Share</ion-button>
          </ion-content>
        </ion-page>
      )
    } else {
      <ion-page>
        <ion-content>
        </ion-content>
      </ion-page>
    }
  }
}