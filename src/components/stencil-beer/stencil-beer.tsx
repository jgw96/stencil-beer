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
            <ion-title>StencilBeer</ion-title>
          </ion-toolbar>
        </ion-header>

        <stencil-router id='router'>
          <stencil-route
            url='/'
            component='main-page'
            router="#router"
            exact={true}
          />

          <stencil-route
            url='/beers'
            component='beer-page'
            router='#router'
          />

          <stencil-route
            id='detailRoute'
            url='/beers/detail/:id'
            component='beer-detail'
            router='#router'
          />
        </stencil-router>
      </ion-app>
    );
  }
}