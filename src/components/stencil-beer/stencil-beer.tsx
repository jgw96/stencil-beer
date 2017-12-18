import { Component } from '@stencil/core';


@Component({
  tag: 'stencil-beer',
  styleUrl: 'stencil-beer.scss'
})
export class StencilBeer {

  render() {
    return (
      <ion-app>
        <stencil-router id='router'>
          <stencil-route
            url='/'
            component='auth-page'
            exact={true}
          />

          <stencil-route
            url='/main'
            component='main-page'
          />

          <stencil-route
            url='/main/profile'
            component='profile-page'
          />

          <stencil-route
            url='/main/beers'
            component='beer-page'
          />

          <stencil-route
            url='/main/beers/favorites'
            component='favorites-page'
          />

          <stencil-route
            url='/main/beers/detail/:id'
            component='beer-detail'
          />

          <stencil-route
            url='/main/bars'
            component='bar-page'
          />

          <stencil-route
            url='/main/bars/directions/:address'
            component='bar-directions'
          />
        </stencil-router>
      </ion-app>
    );
  }
}