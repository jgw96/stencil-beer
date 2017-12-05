import { Component, State } from '@stencil/core';

import { getSavedBeers } from '../../global/save-service';

import { Beer } from '../../global/interfaces';

@Component({
  tag: 'favorites-page',
  styleUrl: 'favorites-page.scss'
})
export class favoritesPage {

  @State() beers: Array<Beer>;

  componentDidLoad() {
    this.beers = getSavedBeers();
  }

  render() {
    return (
      <ion-page class='show-page'>
        <ion-content>
          <h1>Favorite Beers</h1>
          <beer-list beers={this.beers}></beer-list>
        </ion-content>
      </ion-page>
    );
  }
}