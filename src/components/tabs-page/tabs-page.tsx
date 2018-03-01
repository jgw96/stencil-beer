import { Component } from '@stencil/core';


@Component({
  tag: 'tabs-page',
  styleUrl: 'tabs-page.scss'
})
export class TabsPage {

  render() {
    return (
      <ion-tabs color='dark'>
        <ion-tab title='beers' icon='beer'>
          <beer-page></beer-page>
        </ion-tab>

        <ion-tab title='favorites' icon='star'>
          <favorites-page></favorites-page>
        </ion-tab>

        <ion-tab title='my profile' icon='person'>
          <profile-page></profile-page>
        </ion-tab>
      </ion-tabs>
    );
  }
}