import { Component } from '@stencil/core';


@Component({
  tag: 'stencil-beer',
  styleUrl: 'stencil-beer.scss'
})
export class StencilBeer {

  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar color='dark'>
            <ion-title>IonicBeer</ion-title>
          </ion-toolbar>
        </ion-header>

        <stencil-router id='router'>
          <stencil-route
            url='/'
            component='main-page'
            exact={true}
          />

          <stencil-route
            url={['/beers', '/beers/']}
            component='beer-page'
          />

          <stencil-route
            url='/beers/detail/:id'
            component='beer-detail'
          />

          <stencil-route
            url={['/bars', '/bars/']}
            component='bar-page'
            exact={true}
          />

          <stencil-route
            url='/bars/directions/:address'
            component='bar-directions'
          />

        </stencil-router>
      </ion-app>
    );
  }
}