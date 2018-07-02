import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'stencil-beer',
  styleUrl: 'stencil-beer.css'
})
export class StencilBeer {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>

          <ion-route url='/' component='auth-page'></ion-route>
          <ion-route url='/home' component='tabs-page'>

            {/*<ion-route url='/feed' component='feed-tab'>
              <ion-route component='feed-page'></ion-route>
              <ion-route url='/post/:post' component='post-detail'></ion-route>
    </ion-route>*/}

            <ion-route url='/beers' component='beer-tab'>
              <ion-route component='beer-page' />
              <ion-route url='/beer/:beerId' component='beer-detail' />
            </ion-route>

            <ion-route component='bar-tab'>
              <ion-route url='/bars' component='bar-page'></ion-route>
              <ion-route url='/bars/directions/:address/:dest' component='bar-directions'></ion-route>
            </ion-route>

            <ion-route url='/favorites' component='favorites-page'></ion-route>
          </ion-route>

          <ion-route url='/profile' component='profile-page'></ion-route>
          <ion-route url='/users' component='users-page'></ion-route>
          <ion-route url='/users/:userName' component='user-profile'></ion-route>
          <ion-route url='/settings' component='settings-page'></ion-route>

        </ion-router>

        <ion-nav swipeBackEnabled={false} main></ion-nav>
      </ion-app>
    );
  }
}