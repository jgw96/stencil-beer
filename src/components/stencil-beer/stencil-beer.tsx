import { Component } from '@stencil/core';

// import firebase from 'firebase';

@Component({
  tag: 'stencil-beer',
  styleUrl: 'stencil-beer.scss'
})
export class StencilBeer {

  render() {
    return (
      <ion-app>
        {/*<stencil-router id='router'>
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
            component='tabs-page'
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
    </stencil-router>*/}
        <ion-router useHash={false}>
          <ion-route path='/' component='auth-page'></ion-route>
          <ion-route path='/home' component='main-page'></ion-route>
          <ion-route path='/beers' component='tabs-page'>

            <ion-route component='beer-tab'>
              <ion-route component='beer-page' />
              <ion-route path='/beer/:beerId' component='beer-detail' />
            </ion-route>

            <ion-route path='favorites' component='favorites-page'></ion-route>
          </ion-route>

          <ion-route path='/profile' component='profile-page'></ion-route>
          <ion-route path='/users' component='users-page'></ion-route>
          <ion-route path='/users/:userName' component='user-profile'></ion-route>

        </ion-router>

        <ion-nav swipeBackEnabled={false} main></ion-nav>
      </ion-app>
    );
  }
}