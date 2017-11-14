import { Component, Prop } from '@stencil/core';
// import { ToastController } from '@ionic/core';


@Component({
  tag: 'beer-list',
  styleUrl: 'beer-list.scss'
})
export class BeerList {

  @Prop() beers: any[];
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl;

  share(bar) {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: document.title,
        text: "Check out this cool bar",
        url: `${window.location.href}/detail/${bar.id}`
      }).then(() => {
        this.toastCtrl.create({ message: 'bar shared', duration: 1000 }).then((toast) => {
          toast.present();
        })
      })
    }
  }

  render() {
    if (this.beers) {
      const beers = this.beers.map((beer) => {
        return (
          <ion-card>
            <st-img src={beer.labels ? beer.labels.medium : '../../images/beers.jpeg'} alt='beer' />
            <ion-card-content>
              <ion-card-title>
                {beer.name}
              </ion-card-title>

              <p>
                {beer.description ? beer.description : 'No description available'}
              </p>

              <ion-buttons>
                <stencil-route-link url={`/beers/detail/${beer.id}`}>
                  <ion-button color='primary' clear>
                    Detail
                  </ion-button>
                </stencil-route-link>

                <ion-button onClick={() => this.share(beer)} clear icon-only>
                  <ion-icon color='primary' name='share'></ion-icon>
                </ion-button>
              </ion-buttons>
            </ion-card-content>
          </ion-card>
        )
      });

      return (
        <ion-list>
          {beers}
        </ion-list>
      )
    } else {
      return (
        <ion-list>
          <div id='fake-card'></div>
        </ion-list>
      )
    }
  }
}