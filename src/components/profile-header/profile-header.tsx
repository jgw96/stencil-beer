import { Component, Prop } from '@stencil/core';
import { ActionSheetController } from '@ionic/core';
import { ActiveRouter } from '@stencil/router';


@Component({
  tag: 'profile-header',
  styleUrl: 'profile-header.scss',
  scoped: true
})
export class ProfileHeader {

  @Prop({ connect: 'ion-action-sheet-controller' }) actionCtrl: ActionSheetController;
  @Prop({ context: 'activeRouter'}) activeRouter: ActiveRouter;

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
              <ion-icon name='person'></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    );
  }
}