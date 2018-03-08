import { Component, Element, Prop } from '@stencil/core';
// import { RouterHistory } from '@stencil/router';
import { ToastController } from '@ionic/core';

// import firebase from 'firebase';

declare var firebase: any;

@Component({
  tag: 'auth-page',
  styleUrl: 'auth-page.scss'
})
export class AuthPage {

  // @Prop() history: RouterHistory;
  @Prop({ context: 'isServer' }) private isServer: boolean;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  @Element() el: Element;


  componentWillLoad() {
    if (!this.isServer) {
      firebase.auth().getRedirectResult().then((result) => {
        console.log(result.user);
      }).catch((error) => {
        console.log(error);
        this.showErrorToast();
      });
    }
  }

  componentDidLoad() {
    if (!this.isServer) {
      console.log(firebase);
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

          //  this.history.push('/home', {});
          this.el.closest('ion-nav').push('main-page');
        };
      })
    }
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error logging in', duration: 1000 });
    toast.present();
  }

  login() {
    console.log(location.protocol);
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
            <img id='iconImage' src='/assets/img/icon.png' alt='logo'></img>
          </div>

          <div id='buttonBlock'>
            <ion-button onClick={() => this.login()} expand='block' color='primary'>Login with Google</ion-button>
          </div>
        </ion-content>
      </ion-page>
    );
  }
}