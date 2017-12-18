import { Component, State, Listen } from '@stencil/core';

import { getSavedBeers } from '../../global/save-service';

import { Beer } from '../../global/interfaces';

@Component({
  tag: 'favorites-page',
  styleUrl: 'favorites-page.scss'
})
export class favoritesPage {

  @State() beers: Array<Beer>;

  async componentDidLoad() {
    const tempBeers = [];

    getSavedBeers().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tempBeers.push(doc.data().beer);
      })

      this.beers = tempBeers;
    })
  }

  @Listen('beerDeleted')
  getFreshBeers() {
    const tempBeers = [];

    getSavedBeers().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tempBeers.push(doc.data().beer);
      })

      this.beers = tempBeers;
    })
  }

  render() {
    return (
      <ion-page class='show-page'>
        <profile-header></profile-header>

        <ion-content>
          <h1>Favorite Beers</h1>
          <beer-list fave={true} beers={this.beers}></beer-list>
        </ion-content>
      </ion-page>
    );
  }
}