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
      return (
        <ion-list>
          {this.bars.map((bar) => {
            return (
              <ion-item>
                <ion-label>
                  <h2>{bar.name}</h2>

                  <p>{bar.vicinity}</p>


                  <ion-buttons slot='end'>
                    <stencil-route-link url={`/bars/directions/${bar.vicinity}}`} exact={true}>
                      <ion-button clear> Directions </ion-button>
                    </stencil-route-link>

                    <ion-button onClick={() => this.share(bar)} clear icon-only>
                      <ion-icon color='primary' name='share'></ion-icon>
                    </ion-button>

                  </ion-buttons>
                </ion-label>
              </ion-item>
            )
          })}
        </ion-list>
      );
    }
  }
}