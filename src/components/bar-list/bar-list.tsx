import { Component, Prop } from '@stencil/core';
import { ToastController } from '@ionic/core';

import { Bar } from '../../global/interfaces';

@Component({
  tag: 'bar-list',
  styleUrl: 'bar-list.scss'
})
export class barList {

  @Prop() bars: Array<Bar>;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  share(bar: Bar) {
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
    } else {
      window.open(`http://twitter.com/share?text=Check out this cool bar&url=window.location.href}/detail/${bar.id}`);
    }
  }

  render() {
    if (this.bars) {
      return (
        <ion-list>
          {this.bars.map((bar: Bar) => {
            return (
              <ion-item>
                <ion-label>
                  <h2>{bar.name}</h2>

                  <p>{bar.vicinity}</p>

                  <ion-buttons>
                    <stencil-route-link url={`/bars/directions/${bar.vicinity}}`} exact={true}>
                      <ion-button color='primary' fill='clear'> Directions </ion-button>
                    </stencil-route-link>

                    <ion-button onClick={() => this.share(bar)} fill='clear' icon-only>
                      <ion-icon color='primary' name='share'></ion-icon>
                    </ion-button>

                  </ion-buttons>
                </ion-label>
              </ion-item>
            )
          })}
        </ion-list>
      );
    } else {
      return (
        <ion-list>
          <div id='fake-card'></div>
        </ion-list>
      )
    }
  }
}