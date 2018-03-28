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
      // have to catch here as web share
      // is available on desktop chrome
      // but fails
      try {
        this.handleNativeShare(beer);
      } catch (e) {
        this.handleTradShare(beer);
      }
    } else {
      this.handleTradShare(beer);
    }
  }

  handleTradShare(beer) {
    window.open(`http://twitter.com/share?text=Check this out!&url=${window.location.href}/detail/${beer.id}`);
  }

  async handleNativeShare(beer) {
    console.log(beer);
    /*const alert = await this.alertCtrl.create({
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
          handler: () => {
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

    alert.present();*/
    (navigator as any).share({
      title: document.title,
      text: 'Check out this cool beer',
      url: `${window.location.href}/detail/${beer.id}`
    })
  }

  render() {
    return (
      <ion-button color='secondary' onClick={() => this.share(this.beer)} fill='clear' icon-only>
        <ion-icon name='share'></ion-icon>
      </ion-button>
    );
  }
}