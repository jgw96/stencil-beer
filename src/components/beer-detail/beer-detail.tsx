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
    console.log(this.match); 
    fetch(`https://api.punkapi.com/v2/beers?ids=${this.match.params.id}`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.beer = data[0];
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
      })
    })
      .catch((error) => {
        console.error(error);
        window.open(`http://twitter.com/share?text=Check out this cool beer&url=${window.location.href}`);

        this.toastCtrl.create({ message: 'Beer shared', duration: 1000 }).then((toast) => {
          toast.present();
        })
      });
  }

  render() {
    if (this.beer) {

      const foods = this.beer.food_pairing.map((food: any) => {
        return (
          <div>{food}</div>
        )
      })

      return (
        <ion-page class='show-page'>
          <ion-content>
            <div id='img-block'>
              <st-img src={this.beer.image_url} alt={this.beer.name}></st-img>
            </div>
            <h1>{this.beer.name}</h1>

            <div>ABV: {this.beer.abv}</div>
            <div>IBU: {this.beer.ibu}</div>

            <p>{this.beer.description}</p>

            <h4>Food Pairings</h4>
            {foods}

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