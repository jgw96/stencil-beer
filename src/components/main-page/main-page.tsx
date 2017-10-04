import { Component } from '@stencil/core';


@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss'
})
export class MainPage {

  componentDidLoad() {
    const cards = document.querySelectorAll('.card');

    if (cards[0].animate) {
      (cards as any).forEach((card: Element) => {
        card.animate(
          [
            { opacity: 0 },
            { opacity: 1 }
          ], {
            duration: 500
          }
        )
      });
    }
  }

  render() {
    return (
      <ion-page class='show-page'>
        <ion-content>
        <main>
          <stencil-route-link url="/beers">
            <div id='first-card' class='card'>
              <img src="../../images/beers.jpeg" alt='beer' />
              <div class="card-title">Beers</div>
              <div class="card-subtitle">Find beers!</div>
            </div>
          </stencil-route-link>

          <stencil-route-link url="/bars">
            <div class='card'>
              <img src="../../images/bars.jpeg" alt='bar' />
              <div class="card-title">Bars</div>
              <div class="card-subtitle">Find bars near you!</div>
            </div>
          </stencil-route-link>
        </main>
        </ion-content>
      </ion-page>
    );
  }
}