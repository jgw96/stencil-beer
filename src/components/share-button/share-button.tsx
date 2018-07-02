import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'share-button'
})
export class ShareButton {

  @Prop() beer: any;
  @Prop({ connect: 'ion-alert-controller' }) alertCtrl: HTMLIonAlertControllerElement;

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