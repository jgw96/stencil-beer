import { Component } from '@stencil/core';


@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss'
})
export class MainPage {

  render() {
    return (
      <ion-page>
        <ion-content>
          <main>
            <ion-card>
              <st-img src="../../images/beers.jpeg" alt='beer' />
              <ion-card-content>
                <ion-card-title>
                  Beers
                </ion-card-title>

                <p>
                  Search through our huge database of beers!
                </p>
              </ion-card-content>

              <stencil-route-link url="/beers" router="#router">
                <ion-buttons slot='end'>
                  <ion-button color='primary' clear>
                    Beers
                  </ion-button>
                </ion-buttons>
              </stencil-route-link>
            </ion-card>

            <ion-card>
              <st-img src="../../images/bars.jpeg" alt='beer' />
              <ion-card-content>
                <ion-card-title>
                  Bars
                </ion-card-title>

                <p>
                  Find bars near you!
                </p>
              </ion-card-content>

              <stencil-route-link url="/bars" router="#router">
                <ion-buttons slot='end'>
                  <ion-button color='primary' clear>
                    Bars
                  </ion-button>
                </ion-buttons>
              </stencil-route-link>
            </ion-card>
          </main>
        </ion-content>
      </ion-page>
    );
  }
}