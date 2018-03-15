import { Component } from '@stencil/core';

@Component({
  tag: 'stencil-beer',
  styleUrl: 'stencil-beer.scss'
})
export class StencilBeer {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route path='/' component='auth-page'></ion-route>
          <ion-route path='/home' component='tabs-page'>

            <ion-route component='beer-tab'>
              <ion-route component='beer-page' />
              <ion-route path='/beer/:beerId' component='beer-detail' />
            </ion-route>

            <ion-route component='bar-tab'>
              <ion-route path='/bars' component='bar-page'></ion-route>
              <ion-route path='/bars/directions/:address/:dest' component='bar-directions'></ion-route>
            </ion-route>

            <ion-route path='/favorites' component='favorites-page'></ion-route>
          </ion-route>

          <ion-route path='/profile' component='profile-page'></ion-route>
          <ion-route path='/users' component='users-page'></ion-route>
          <ion-route path='/users/:userName' component='user-profile'></ion-route>
          <ion-route path='/settings' component='settings-page'></ion-route>

        </ion-router>

        <ion-nav swipeBackEnabled={false} main></ion-nav>
      </ion-app>
    );
  }
}