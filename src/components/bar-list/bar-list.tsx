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

                    <share-button beer={bar}></share-button>

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