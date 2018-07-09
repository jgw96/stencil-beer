import { Component, Prop, State } from '@stencil/core';

import { formatBytes } from '../../global/utils';

declare var firebase: any;

@Component({
  tag: 'settings-page'
})
export class SettingsPage {

  @State() storageUsed: string = '0';
  @State() offlineChecked: boolean;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @Prop({ connect: 'ion-alert-controller' }) alertCtrl: HTMLIonAlertControllerElement;

  async componentDidLoad() {
    if ((navigator as any).storage) {
      const estimate = await (navigator as any).storage.estimate();
      this.storageUsed = formatBytes(estimate.usage);
    }

    this.checkState();
  }

  checkState() {
    const offlineState = localStorage.getItem('offlineEnabled');
    console.log(offlineState);
    if (offlineState === 'true') {
      this.offlineChecked = true;
    } else {
      this.offlineChecked = false;
      console.log('here');
    }
  }

  async enableOffline() {
    console.log('offline');

    try {
      await firebase.firestore().enablePersistence();
      const toast = await this.toastCtrl.create({ message: 'Advanced Offline Mode enabled', duration: 1000 });
      toast.present();
    } catch (err) {
      if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
        const toast = await this.toastCtrl.create({ message: 'Error enabling Advanced Offline Mode', duration: 1000 });
        toast.present();
      } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
        const toast = await this.toastCtrl.create({ message: 'Not supported in your browser', duration: 1000 });
        toast.present();
      }
    }
  }

  async disableOffline() {
    await firebase.firestore().enableNetwork();
    const toast = await this.toastCtrl.create({ message: 'Advanced Offline Mode disabled', duration: 1000 });
    toast.present();
  }


  async changed(ev) {
    console.log(ev);
    /*if (ev.target.checked === true) {
      const alert = await this.alertCtrl.create({
        title: 'Are you sure?',
        message: 'Advanced Offline Mode will use more storage on your device',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel: blah');
              this.offlineChecked = false;
            }
          }, {
            text: 'Enable',
            handler: () => {
              this.enableOffline();
              localStorage.setItem('offlineEnabled', 'true');
            }
          }
        ]
      });
      return await alert.present();
    } else if (ev.target.checked === false) {
      this.disableOffline();
      localStorage.setItem('offlineEnabled', 'false');
    }*/
  }

  render() {
    return [
      <profile-header>
        <ion-back-button defaultHref='/home' />
      </profile-header>,

      <ion-content>
        <ion-list no-lines>
          <ion-item>
            <ion-label>
              <h2>Storage Used</h2>
              <p>{this.storageUsed}</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h2>Advanced Offline Mode</h2>
              <p>Use if you are frequently offline</p>
            </ion-label>
            <ion-buttons>
              <ion-toggle onChange={(event) => this.changed(event)} checked={this.offlineChecked}></ion-toggle>
            </ion-buttons>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}