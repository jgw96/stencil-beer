import { Component, Prop } from '@stencil/core';
import { ToastController } from '@ionic/core';

import { Beer } from '../../global/interfaces';


@Component({
  tag: 'share-button',
  styleUrl: 'share-button.scss'
})
export class ShareButton {

  @Prop() beer: Beer;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

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
    return (
      <ion-button onClick={() => this.share(this.beer)} fill='clear' icon-only>
        <ion-icon color='primary' name='share'></ion-icon>
      </ion-button>
    );
  }
}