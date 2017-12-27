import { Component, State, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

import { ToastController } from '@ionic/core';

declare let firebase: any;

@Component({
  tag: 'profile-page',
  styleUrl: 'profile-page.scss'
})
export class ProfilePage {

  @State() user: any;

  @Prop() history: RouterHistory;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  componentWillLoad() {
    this.user = firebase.auth().currentUser;
  }

  async logout() {
    console.log('here');
    try {
      await firebase.auth().signOut();
      this.history.replace('/', {});
    } catch (e) {
      this.showErrorToast();
    }
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error logging out', duration: 1000 });
    toast.present();
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
            <img src={this.user.photoURL}></img>
          </div>

          <h2>{this.user.displayName}</h2>
          <p>{this.user.email}</p>

          <ion-button onClick={() => this.logout()} id='logoutButton' expand='block' color='danger'>Logout</ion-button>
        </ion-content>
      </ion-page>
    );
  }
}