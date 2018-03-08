import { Component, Element, Event, EventEmitter, Prop } from '@stencil/core';
import { PopoverController } from '@ionic/core';
// import { ActiveRouter } from '@stencil/router';


@Component({
  tag: 'popover-page',
  styleUrl: 'popover-page.scss'
})
export class PopoverPage {

  // @Prop({ context: 'activeRouter' }) activeRouter: ActiveRouter;
  @Prop({ connect: 'ion-popover-controller' }) popoverCtrl: PopoverController;

  @Event() closePopover: EventEmitter;

  @Element() el: Element;

  openProfile() {
    this.closePopover.emit();
    // this.activeRouter.get().history.push('/profile', {});
    document.querySelector('ion-nav').push('profile-page');

  }

  openAll() {
    this.closePopover.emit();
    // this.activeRouter.get().history.push('/users', {});
    document.querySelector('ion-nav').push('users-page');
  }

  render() {
    return (
      <ion-list no-lines>
        <ion-item onClick={() => this.openProfile()}><ion-label>My Profile</ion-label></ion-item>
        <ion-item onClick={() => this.openAll()}><ion-label>All Users</ion-label></ion-item>
      </ion-list>
    );
  }
}