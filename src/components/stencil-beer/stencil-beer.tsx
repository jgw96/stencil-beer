import { Component } from '@stencil/core';

// import firebase from 'firebase';

@Component({
  tag: 'stencil-beer',
  styleUrl: 'stencil-beer.scss'
})
export class StencilBeer {

 /* componentWillLoad() {
    console.log(firebase);
    var config = {
      apiKey: "AIzaSyBRGthQnkQbObNUU1tXudYy8tC1c1JKF7c",
      authDomain: "stencilbeer.firebaseapp.com",
      databaseURL: "https://stencilbeer.firebaseio.com",
      projectId: "stencilbeer",
      storageBucket: "stencilbeer.appspot.com",
      messagingSenderId: "1049557001786"
    };
    firebase.initializeApp(config);
  }*/

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