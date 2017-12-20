import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

declare const firebase: any;

@Component({
  tag: 'auth-page',
  styleUrl: 'auth-page.scss'
})
export class AuthPage {

  @Prop() history: RouterHistory;

  constructor() {
    const db = firebase.firestore();

    firebase.auth().getRedirectResult().then((result) => {
      if (result.credential) {
        console.log(result.credential.accessToken);
      }

      db.collection('users').add({
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL
      })

      console.log(result.user);
    }).catch((error) => {
      console.log(error);
    });
  }

  componentDidLoad() {
    console.log('called');

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log(user);

        this.history.push('/main', {});
      };
    })
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  render() {
    return (
      <ion-page class='show-page'>
        <ion-header md-height="96px">
          <ion-toolbar color='dark'>
            <ion-title>IonicBeer Beta</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>

          <div id='imageBlock'>
            <img id='iconImage' src='/assets/img/icon.png'></img>
          </div>

          <div id='buttonBlock'>
            <ion-button onClick={() => this.login()} expand='block' color='primary'>Login with Google</ion-button>
          </div>
        </ion-content>
      </ion-page>
    );
  }
}