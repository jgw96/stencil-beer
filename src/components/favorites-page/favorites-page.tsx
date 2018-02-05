import { Component, State, Listen } from '@stencil/core';

import { Beer } from '../../global/interfaces';

// declare var firebase: any;
//import firebase from 'firebase';

declare var firebase: any;

@Component({
  tag: 'favorites-page',
  styleUrl: 'favorites-page.scss'
})
export class favoritesPage {

  @State() beers: Array<Beer>;

  async componentDidLoad() {
    const tempBeers = [];

    this.getSavedBeers().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tempBeers.push(doc.data().beer);
      })

      this.beers = tempBeers;
    })
  }

  getSavedBeers() {
    return firebase.firestore().collection('savedBeers').where('author', '==', firebase.auth().currentUser.email).get();
  }

  @Listen('beerDeleted')
  getFreshBeers() {
    const tempBeers = [];

    this.getSavedBeers().then((querySnapshot) => {
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