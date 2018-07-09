import { Component, Element, Prop } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'auth-page',
  styleUrl: 'auth-page.css'
})
export class AuthPage {

  @Prop({ context: 'isServer' }) private isServer: boolean;

  @Element() el: Element;

  componentDidLoad() {
    if (!this.isServer) {
      console.log(firebase);
      const db = firebase.firestore();

      console.log(db);

      firebase.auth().onAuthStateChanged(async (user) => {
        if (user && !user.isAnonymous) {

          const querySnapshot = await this.getCertainUser(user.email);
          if (querySnapshot.empty) {
            db.collection('users').add({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL
            })
          };

          (this.el.closest('ion-nav') as HTMLIonNavElement).setRoot('tabs-page', null, { animated: false, direction: 'forward' });
        } else if (user && user.isAnonymous) {
          (this.el.closest('ion-nav') as HTMLIonNavElement).setRoot('tabs-page', null, { animated: false, direction: 'forward' });
          if (sessionStorage !== undefined) {
            sessionStorage.setItem('anon', 'true');
          }
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
      <ion-content>
        <main>
          <div id='imageBlock'>
            <picture id='iconImage'>
              <source srcSet="/assets/img/icon.webp" type="image/webp"></source>
              <source srcSet="/assets/img/icon.png" type="image/png"></source>
              <img src="/assets/img/icon.png" alt="logo"></img>
            </picture>

            <h1>IonicBeer</h1>
          </div>

          <div id='buttonBlock'>
            <ion-button onClick={() => this.login()} color='primary'>Login with Google</ion-button>
            <ion-button id='secondButton' onClick={() => this.loginAnon()}>Anonymous Login</ion-button>
          </div>
        </main>
      </ion-content>
    );
  }
}