import { Component } from '@stencil/core';


@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss'
})
export class MainPage {

  render() {
    return (
      <ion-page class='show-page'>
        <ion-content>
          <main>
            <stencil-route-link url="/beers" router="#router">
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
              </ion-card>
            </stencil-route-link>

            <stencil-route-link url="/bars" router="#router">
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
              </ion-card>
            </stencil-route-link>

          </main>
        </ion-content>
      </ion-page>
    );
  }
}