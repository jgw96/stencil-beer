import { Component, Prop } from '@stencil/core';
import { AlertController } from '@ionic/core';


@Component({
  tag: 'share-button',
  styleUrl: 'share-button.scss'
})
export class ShareButton {

  @Prop() beer: any;
  @Prop({ connect: 'ion-alert-controller' }) alertCtrl: AlertController;

  async share(beer) {
    if ((navigator as any).share) {
      this.handleNativeShare(beer);
    } else {
      window.open(`http://twitter.com/share?text=Check this out!&url=${window.location.href}/detail/${beer.id}`)
    }
  }

  async handleNativeShare(beer) {
    const alert = await this.alertCtrl.create({
      title: 'Share',
      message: 'Message to Share',
      inputs: [
        {
          name: 'shareText',
          id: 'shareText',
          placeholder: 'Check out this cool beer!'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel')
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
            const shareText = (document.querySelector('#shareText') as HTMLInputElement).value;

            (navigator as any).share({
              title: document.title,
              text: `${shareText}`,
              url: `${window.location.href}/detail/${beer.id}`
            });
          }
        }
      ]
    });

    alert.present();
  }

  render() {
    return (
      <ion-button onClick={() => this.share(this.beer)} fill='clear' icon-only>
        <ion-icon color='primary' name='share'></ion-icon>
      </ion-button>
    );
  }
}