import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';

import { Beer } from '../../global/interfaces';
import { checkAnon } from '../../global/utils';

declare var firebase: any;

@Component({
  tag: 'beer-item',
  styleUrl: 'beer-item.css'
})
export class BeerItem {

  @Prop() beer: Beer;
  @Prop() fave: Boolean = false;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @Prop({ connect: 'ion-alert-controller' }) alertCtrl: HTMLIonAlertControllerElement;

  @Element() el: HTMLElement;

  @Event() beerDeleted: EventEmitter;

  io: IntersectionObserver;

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  addIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: IntersectionObserverEntry[]) => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.handleAnimation((data[0].target as HTMLElement));
          this.removeIntersectionObserver();
        }
      }, {
          threshold: [0.2]
        })

      this.io.observe(this.el.querySelector('ion-card'));
    } else {
      (this.el.querySelector('ion-card') as any).style.opacity = '1';
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  handleAnimation(element: HTMLElement) {
    if ('animate' in element) {
      element.animate(
        [
          { transform: 'translateY(20px)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ], {
          duration: 300,
          easing: 'cubic-bezier(.36,.66,.04,1)',
          fill: 'forwards'
        }
      )
    } else {
      (this.el.querySelector('ion-card') as any).style.opacity = '1';
    }
  }

  async save(beer: Beer) {
    console.log('here');
    if (!checkAnon()) {
      this.saveBeer(beer);

      const toast = await this.toastCtrl.create({ message: 'beer favorited', duration: 1000 });
      await toast.present();
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Must login',
        message: 'This feature is not available to anonymous users. Would you like to sign in with Google?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Yes',
            handler: () => {
              const provider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().currentUser.linkWithRedirect(provider);
            }
          }
        ]
      });
      return await alert.present();
    }
  }

  async deleteBeer(beer: Beer) {
    await this.deleteBeerHelper(beer);

    this.beerDeleted.emit();

    const toast = await this.toastCtrl.create({ message: 'beer un-favorited', duration: 1000 });
    toast.present();
  }

  saveBeer(value: Beer) {
    firebase.firestore().collection('savedBeers').add({
      author: firebase.auth().currentUser.email,
      beer: value
    });
  }

  async deleteBeerHelper(passedBeer: Beer) {
    const doc = await firebase.firestore().collection('savedBeers')
      .where('beer.name', '==', passedBeer.name)
      .where('author', '==', (window as any).firebase.auth().currentUser.email)
      .get();

    doc.forEach((beer) => {
      beer.ref.delete();
    })
  }

  navigateToDetail(beerId: string) {
    (this.el.closest('ion-nav') as HTMLIonNavElement).push('beer-detail', { beerId });
  }

  render() {
    return (
      <ion-card>
        <ion-img src={this.beer.labels ? this.beer.labels.large : '/assets/beers.jpeg'} alt='beer'></ion-img>
        <ion-card-content>
          <ion-card-title>
            {this.beer.name}
          </ion-card-title>

          <p>
            {this.beer.description ? this.beer.description : 'No description available'}
          </p>

          <ion-buttons slot='start'>
            {this.fave ?
              <ion-button color='danger' onClick={() => this.deleteBeer(this.beer)} fill='clear' icon-only>
                <ion-icon name='trash'></ion-icon>
              </ion-button>
              :
              <ion-button color='primary' onClick={() => this.save(this.beer)} fill='clear' icon-only>
                <ion-icon name='star'></ion-icon>
              </ion-button>
            }

            <share-button beer={this.beer}></share-button>

            <ion-button href={`/home/beers/beer/${this.beer.id}`} slot='end' id='detailButton' color='primary' fill='clear'>
              Detail
            </ion-button>
          </ion-buttons>

        </ion-card-content>
      </ion-card>
    );
  }
}