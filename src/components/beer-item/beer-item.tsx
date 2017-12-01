import { Component, Prop, Element } from '@stencil/core';
import { ToastController } from '@ionic/core';

import { Beer } from '../../global/interfaces';


@Component({
  tag: 'beer-item',
  styleUrl: 'beer-item.scss'
})
export class BeerItem {

  @Prop() beer: Beer;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  @Element() el: HTMLElement;

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
      })

      this.io.observe(this.el.querySelector('ion-card'));
    }
    else {

    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  handleAnimation(element: Element) {
    element.classList.add('animateIn');
  }

  share(bar) {
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
    }
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
            <stencil-route-link url={`/beers/detail/${this.beer.id}`}>
              <ion-button color='primary' clear>
                Detail
            </ion-button>
            </stencil-route-link>

            <ion-button onClick={() => this.share(this.beer)} clear icon-only>
              <ion-icon color='primary' name='share'></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-card-content>
      </ion-card>
    );
  }
}