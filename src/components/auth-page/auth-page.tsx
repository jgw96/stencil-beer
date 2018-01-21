import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

// import { getCertainUser } from '../../global/save-service';
// import { firebase } from '../../global/interfaces';
declare var firebase: any;

@Component({
  tag: 'auth-page',
  styleUrl: 'auth-page.scss'
})
export class AuthPage {

  @Prop() history: RouterHistory;
  @Prop({ context: 'isServer' }) private isServer: boolean;


  componentWillLoad() {
    if (!this.isServer) {
      console.log(firebase);

      firebase.auth().getRedirectResult().then((result) => {
        console.log(result.user);
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  componentDidLoad() {
    if (!this.isServer) {
      console.log('called');
      const db = firebase.firestore();

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {

          this.getCertainUser(user.email).then((querySnapshot) => {
            if (querySnapshot.empty) {
              db.collection('users').add({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
              })
            }
          })

          this.history.push('/home', {});
        };
      })
    }
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  getCertainUser(email) {
    return firebase.firestore().collection('users').where('email', '==', email).get();
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