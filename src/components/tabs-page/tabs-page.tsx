import { Component } from '@stencil/core';


@Component({
  tag: 'tabs-page',
  styleUrl: 'tabs-page.scss'
})
export class TabsPage {

  render() {
    return (
      <ion-tabs color='dark'>
        <ion-tab selected={true} title='beers' icon='beer' component='beer-page'>
        </ion-tab>

        <ion-tab title='favorites' icon='star' component='favorites-page'>
        </ion-tab>

        <ion-tab title='my profile' icon='person' component='profile-page'>
        </ion-tab>
      </ion-tabs>
    );
  }
}