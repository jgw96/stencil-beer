import { Component, State, Prop } from '@stencil/core';

import { notify } from '../../global/notify-service';

declare var firebase: any;

@Component({
  tag: 'profile-page',
  styleUrl: 'profile-page.css'
})
export class ProfilePage {

  @State() user: any;
  @State() subscribed: boolean;
  @State() swSupport: boolean;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @Prop({ context: 'isServer' }) private isServer: boolean;

  componentWillLoad() {
    if (!this.isServer) {
      this.user = firebase.auth().currentUser;

      if ('serviceWorker' in navigator && 'PushManager' in window) {
        this.swSupport = true;
      } else {
        this.swSupport = false;
      }
    }
  }

  componentDidLoad() {
    if (!this.isServer) {
      navigator.serviceWorker.getRegistration().then((reg: ServiceWorkerRegistration) => {
        if (reg) {
          reg.pushManager.getSubscription().then((sub: PushSubscription) => {
            if (sub) {
              this.subscribed = true;
            } else {
              this.subscribed = false;
            }
          })
        }
      })
    }
  }

  unsubscribe() {
    navigator.serviceWorker.getRegistration().then((reg: ServiceWorkerRegistration) => {
      reg.pushManager.getSubscription().then((sub: PushSubscription) => {
        sub.unsubscribe();
      })
    })
  }

  async logout() {
    console.log('here');
    try {
      await firebase.auth().signOut();
      // this.history.replace('/', {});
      (document.querySelector('ion-nav') as HTMLIonNavElement).setRoot('auth-page');
    } catch (e) {
      this.showErrorToast();
    }
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error logging out', duration: 1000 });
    toast.present();
  }

  async notications() {
    const perm = await notify();
    console.log(perm);

    if (perm) {
      this.subscribed = true;
    } else {
      this.subscribed = false;
    }
  }

  render() {
    if (this.user && this.swSupport) {
      return [
        <ion-header md-height="96px">
          <ion-toolbar color='dark'>
            <ion-buttons slot="start">
              <ion-back-button defaultHref='/home' />
            </ion-buttons>
            <ion-title>IonicBeer</ion-title>
          </ion-toolbar>
        </ion-header>,

        <ion-content padding>
          <div id='imageBlock'>
            <img src={this.user.photoURL}></img>
          </div>

          <h2>{this.user.displayName}</h2>
          <p>{this.user.email}</p>

          <div id='profileButtonBlock'>
            {this.subscribed ? <ion-button onClick={() => this.unsubscribe()} expand='block' color='danger'>Unsubscribe</ion-button>
              : <ion-button onClick={() => this.notications()} expand='block' color='primary'>Get Notifications</ion-button>
            }

            <ion-button onClick={() => this.logout()} id='logoutButton' expand='block' color='danger'>Logout</ion-button>
          </div>
        </ion-content>
      ];
    } else if (this.user && !this.swSupport) {
      return [
        <ion-header md-height="96px">
          <ion-toolbar color='dark'>
            <ion-buttons slot="start">
              <ion-back-button defaultHref='/home' />
            </ion-buttons>
            <ion-title>IonicBeer</ion-title>
          </ion-toolbar>
        </ion-header>,

        <ion-content padding>
          <div id='imageBlock'>
            <img src={this.user.photoURL}></img>
          </div>

          <h2>{this.user.displayName}</h2>
          <p>{this.user.email}</p>

          <div id='noSwProfileButtonBlock'>
            <ion-button onClick={() => this.logout()} id='logoutButton' expand='block' color='danger'>Logout</ion-button>
          </div>
        </ion-content>
      ]
    }
  }
}