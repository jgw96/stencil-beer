import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';
import { ToastController } from '@ionic/core';

import { saveBeer, deleteBeer } from '../../global/save-service';

import { Beer } from '../../global/interfaces';


@Component({
  tag: 'beer-item',
  styleUrl: 'beer-item.scss'
})
export class BeerItem {

  @Prop() beer: Beer;
  @Prop() fave: Boolean = false;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

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
          this.handleAnimation(data[0].target);
          this.removeIntersectionObserver();
        }
      }, {
          threshold: [0.2]
        })

      this.io.observe(this.el.querySelector('ion-card'));
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  handleAnimation(element: any) {
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
  }

  async save(beer: Beer) {
    saveBeer(beer);

    const toast = await this.toastCtrl.create({ message: 'beer favorited', duration: 1000 });
    toast.present();
  }

  async deleteBeer(beer: Beer) {
    await deleteBeer(beer);

    this.beerDeleted.emit();

    const toast = await this.toastCtrl.create({ message: 'beer un-favorited', duration: 1000 });
    toast.present();
  }

  render() {
    return (
      <ion-card>
        <st-img src={this.beer.labels ? this.beer.labels.medium : '../../images/beers.jpeg'} alt='beer' />
        <ion-card-content>
          <ion-card-title>
            {this.beer.name}
          </ion-card-title>

          <p>
            {this.beer.description ? this.beer.description : 'No description available'}
          </p>

          <ion-buttons>
            <stencil-route-link url={`/main/beers/detail/${this.beer.id}`}>
              <ion-button id='detailButton' color='primary' fill='clear'>
                Detail
            </ion-button>
            </stencil-route-link>

            {this.fave ?
              <ion-button onClick={() => this.deleteBeer(this.beer)} fill='clear' icon-only>
                <ion-icon color='danger' name='trash'></ion-icon>
              </ion-button>
              :
              <ion-button onClick={() => this.save(this.beer)} fill='clear' icon-only>
                <ion-icon color='primary' name='star'></ion-icon>
              </ion-button>
            }

            <share-button beer={this.beer}></share-button>
          </ion-buttons>
        </ion-card-content>
      </ion-card>
    );
  }
}