import { Component } from '@stencil/core';

import { checkAnon } from '../../global/utils';

@Component({
  tag: 'tabs-page',
  styleUrl: 'tabs-page.scss'
})
export class TabsPage {

  render() {
    return (
      <ion-tabs color='dark'>
        <ion-tab selected={true} title='beers' icon='beer' name='beer-tab'>
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab title='bars' icon='pint' name='bar-tab'>
          <ion-nav></ion-nav>
        </ion-tab>

        {checkAnon() ? null : <ion-tab title='favorites' icon='star' component='favorites-page'>
        </ion-tab>}
      </ion-tabs>
    );
  }
}