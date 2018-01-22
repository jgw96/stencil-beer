import { Component, Prop, State } from '@stencil/core';
import { ActionSheetController } from '@ionic/core';
import { ActiveRouter } from '@stencil/router';

declare var firebase: any;

@Component({
  tag: 'profile-header',
  styleUrl: 'profile-header.scss',
  scoped: true
})
export class ProfileHeader {

  @State() profilePic: string;

  @Prop({ connect: 'ion-action-sheet-controller' }) actionCtrl: ActionSheetController;
  @Prop({ context: 'activeRouter'}) activeRouter: ActiveRouter;

  componentDidLoad() {
    console.log(firebase.auth().currentUser);
    this.profilePic = firebase.auth().currentUser.photoURL;
  }

  openActionSheet() {
    console.log(this.activeRouter.get());
    this.actionCtrl.create({
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
    }).then((actionSheet) => {
      actionSheet.present();
    })
  }

  render() {
    return (
      <ion-header md-height="96px">
        <ion-toolbar color='dark'>
          <ion-title>IonicBeer Beta</ion-title>

          <ion-buttons slot='end'>
            <ion-button fill='clear' onClick={() => this.openActionSheet()} icon-only>
              <img id='userImage' src={this.profilePic} alt='user profile'></img>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    );
  }
}