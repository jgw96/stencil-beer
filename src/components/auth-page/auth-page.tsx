import { Component, Element, Prop } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'auth-page',
  styleUrl: 'auth-page.scss'
})
export class AuthPage {

  @Prop({ context: 'isServer' }) private isServer: boolean;

  @Element() el: Element;

  componentDidLoad() {
    if (!this.isServer) {
      console.log(firebase);
      const db = firebase.firestore();

      firebase.auth().onAuthStateChanged((user) => {
        if (user && !user.isAnonymous) {

          this.getCertainUser(user.email).then((querySnapshot) => {
            if (querySnapshot.empty) {
              db.collection('users').add({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
              })
            }
          })

          this.el.closest('ion-nav').setRoot('tabs-page', null, { animate: true, direction: 'forward' });
        } else if (user && user.isAnonymous) {
          this.el.closest('ion-nav').setRoot('tabs-page', null, { animate: true, direction: 'forward' });
          sessionStorage.setItem('anon', 'true');
        }
      })
    }
  }

  login() {
    console.log(location.protocol);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  async loginAnon() {
    try {
      await firebase.auth().signInAnonymously();
    } catch (err) {
      console.error(err);
    }
  }

  getCertainUser(email) {
    return firebase.firestore().collection('users').where('email', '==', email).get();
  }

  render() {
    return (
      <ion-page class='show-page'>
        <ion-content>

          <div id='imageBlock'>
            <img id='iconImage' src='/assets/img/icon.png' alt='logo'></img>

            <h1>IonicBeer</h1>
          </div>

          <div id='buttonBlock'>
            <ion-button onClick={() => this.login()} color='primary'>Login with Google</ion-button>
            <ion-button id='secondButton' onClick={() => this.loginAnon()}>Anonymous Login</ion-button>
          </div>
        </ion-content>
      </ion-page>
    );
  }
}