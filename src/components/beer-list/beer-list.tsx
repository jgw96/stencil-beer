import { Component, Prop } from '@stencil/core';
import { ToastController } from '@ionic/core';


@Component({
  tag: 'beer-list',
  styleUrl: 'beer-list.scss'
})
export class BeerList {

  @Prop() beers: any[];
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  share(beer) {
    (navigator as any).share({
      title: document.title,
      text: "Check out this cool beer",
      url: `${window.location.href}/detail/${beer.id}`
    }).then(() => {
      this.toastCtrl.create({ message: 'Beer shared', duration: 1000 }).then((toast) => {
        toast.present();
      })
    })
      .catch((error) => {
        console.error(error);
        window.open(`http://twitter.com/share?text=Check out this cool beer&url=${window.location.href}/detail/${beer.id}`);

        this.toastCtrl.create({ message: 'Beer shared', duration: 1000 }).then((toast) => {
          toast.present();
        })
      });
  }

  render() {
    if (this.beers) {
      const beers = this.beers.map((beer) => {
        return (
          <ion-card>
            <st-img src={beer.image_url} alt='beer' />
            <ion-card-content>
              <ion-card-title>
                {beer.name}
              </ion-card-title>

              <p>
                {beer.description}
              </p>
            </ion-card-content>

            <ion-buttons slot='end'>
              <stencil-route-link url={`/beers/detail/${beer.id}`}>
                <ion-button color='primary' clear>
                  Detail
                </ion-button>
              </stencil-route-link>

              <ion-button onClick={() => this.share(beer)} clear icon-only>
                <ion-icon color='primary' name='share'></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-card>
        )
      });

      return (
        <ion-list>
          {beers}
        </ion-list>
      )
    }
  }
}