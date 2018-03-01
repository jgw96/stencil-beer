import { Component, Prop, State, Listen } from '@stencil/core';
// import { ActionSheetController } from '@ionic/core';
import { PopoverController, Popover } from '@ionic/core';

// import firebase from 'firebase';

declare var firebase: any;


@Component({
  tag: 'profile-header',
  styleUrl: 'profile-header.scss',
  scoped: true
})
export class ProfileHeader {

  popover: Popover;

  @State() profilePic: string;

  // @Prop({ connect: 'ion-action-sheet-controller' }) actionCtrl: ActionSheetController;
  @Prop({ connect: 'ion-popover-controller'}) popoverCtrl: PopoverController;
  // @Prop({ context: 'activeRouter'}) activeRouter: ActiveRouter;

  componentDidLoad() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.profilePic = user.photoURL;
      }
    });
  }

  @Listen('body:closePopover')
  closePopover() {
    this.popover.dismiss();
  }

  async openPopover(event) {
    this.popover = await this.popoverCtrl.create({
      component: 'popover-page',
      ev: event
    });
    
    await this.popover.present();
  }

  /*async openActionSheet() {
    const actionSheet = await this.actionCtrl.create({
      title: 'Users',
      buttons: [
        {
          text: 'My Profile',
          icon: 'person',
          handler: () => {
            this.activeRouter.get().history.push('/profile', {});
          }
        },
        {
          text: 'All Users',
          icon: 'people',
          handler: () => {
            this.activeRouter.get().history.push('/users', {});
          }
        }
      ]
    });

    actionSheet.present();
  }*/

  render() {
    return (
      <ion-header md-height="96px">
        <ion-toolbar color='dark'>
          <ion-title>IonicBeer Beta</ion-title>

          <ion-buttons slot='end'>
            <ion-button fill='clear' onClick={() => this.openPopover(event)} icon-only>
              {this.profilePic ? <img id='userImage' src={this.profilePic} alt='user profile'></img> : <div id='fake-image'></div>}
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    );
  }
}