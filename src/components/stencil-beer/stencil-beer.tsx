import { Component } from '@stencil/core';
import {  } from '@stencil/router';

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
            url={['/home', '/home/']}
            component='main-page'
          />

          <stencil-route
            url={['/profile', '/profile/']}
            component='profile-page'
          />

          <stencil-route
            url={['/beers', '/beers/']}
            component='beer-page'
          />

          <stencil-route
            url={['/beers/favorites', '/beers/favorites/']}
            component='favorites-page'
          />

          <stencil-route
            url={'/beers/detail/:id'}
            component='beer-detail'
          />

          <stencil-route
            url={['/bars', '/bars/']}
            component='bar-page'
          />

          <stencil-route
            url={'/users'}
            component='users-page'
          />

          <stencil-route
            url={'/users/:user'}
            component='user-profile'
          />

          <stencil-route
            url={'/bars/directions/:address'}
            component='bar-directions'
          />
        </stencil-router>
      </ion-app>
    );
  }
}