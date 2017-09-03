import { Component, Prop } from '@stencil/core';
import { ToastController } from '@ionic/core';


@Component({
  tag: 'bar-list',
  styleUrl: 'bar-list.scss'
})
export class barList {

  @Prop() bars: any[];
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  share(bar) {
    (navigator as any).share({
      title: document.title,
      text: "Check out this cool bar",
      url: `${window.location.href}/detail/${bar.id}`
    }).then(() => {
      this.toastCtrl.create({ message: 'bar shared', duration: 1000 }).then((toast) => {
        toast.present();
      })
    })
      .catch((error) => {
        console.error(error);
        window.open(`http://twitter.com/share?text=Check out this cool bar&url=window.location.href}/detail/${bar.id}`);

        this.toastCtrl.create({ message: 'bar shared', duration: 1000 }).then((toast) => {
          toast.present();
        })
      });
  }

  render() {
    if (this.bars) {
      const bars = this.bars.map((bar) => {
        if (bar.brewery.images)
          return (
            <ion-card>
              <st-img src={bar.brewery.images.squareMedium} alt='bar' />
              <ion-card-content>
                <ion-card-title>
                  {bar.brewery.name}
                </ion-card-title>

                <div>{bar.streetAddress}</div>
              </ion-card-content>

              <ion-buttons slot='end'>
                <a href={bar.website}>
                  <ion-button clear>
                    website
                  </ion-button>
                </a>

                <a href={`tel:${bar.phone}`}>
                  <ion-button clear>
                    call
                  </ion-button>
                </a>

                <ion-button onClick={() => this.share(bar)} clear icon-only>
                  <ion-icon color='primary' name='share'></ion-icon>
                </ion-button>
              </ion-buttons>
            </ion-card>
          )
      });

      return (
        <ion-list>
          {bars}
        </ion-list>
      )
    }
  }
}