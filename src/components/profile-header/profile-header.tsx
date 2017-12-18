import { Component } from '@stencil/core';


@Component({
  tag: 'profile-header',
  styleUrl: 'profile-header.scss'
})
export class ProfileHeader {

  render() {
    return (
      <ion-header md-height="96px">
        <ion-toolbar color='dark'>
          <ion-title>IonicBeer Beta</ion-title>

          <ion-buttons slot='end'>
            <stencil-route-link url='/main/profile'>
              <ion-button fill='clear' icon-only>
                <ion-icon name='person'></ion-icon>
              </ion-button>
            </stencil-route-link>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    );
  }
}