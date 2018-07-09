import { Component, Prop, State } from '@stencil/core';

import { Beer } from '../../global/interfaces';

declare var firebase: any;

@Component({
  tag: 'user-profile',
  styleUrl: 'user-profile.css'
})
export class UserProfile {

  @Prop() userName: string;

  @State() beers: Array<Beer>;
  @State() user: any;

  async componentDidLoad() {
    const allData = await this.getFullUser(this.userName);

    if (allData[1].length > 0) {
      this.beers = allData[1];
    }
    console.log(this.beers);
    this.user = allData[0];
  }

  getUserBeers(email) {
    return firebase.firestore().collection('savedBeers').where('author', '==', email).get();
  }

  async getFullUser(name) {
    console.log(name);
    const fullUser = [];
    let userEmail = null;

    const doc = await firebase.firestore().collection('users').where('name', '==', name).get();

    await doc.forEach((user) => {
      console.log(user);
      fullUser.push(user.data());
      userEmail = user.data().email;
    })

    const tempBeers = [];

    const beerDoc = await this.getUserBeers(userEmail)

    await beerDoc.forEach((doc) => {
      tempBeers.push(doc.data().beer);
    })

    fullUser.push(tempBeers);

    console.log(fullUser);
    return fullUser;
  }

  async follow() {
    // const currentUser = firebase.auth().currentUser;
    const doc = await firebase.firestore().collection('users').where('name', '==', this.userName).get();

    await doc.forEach((user) => {
      console.log(user.data());
    });
  }

  render() {
    if (this.user) {
      return [
        <profile-header>
          <ion-back-button defaultHref='/home' />
        </profile-header>,

        <ion-content>
          <div id='imageBlock'>
            <img src={this.user.photo}></img>
          </div>

          <h2>{this.user.name}</h2>

          {this.beers ?
            <h1>Favorite Beers</h1>
            : null
          }

          {this.beers ?
            <beer-list beers={this.beers} fave={false}></beer-list>
            : null
          }

        </ion-content>
      ];
    } else {
      return [
        <profile-header>
          <ion-back-button defaultHref='/home' />
        </profile-header>,

        <ion-content>
          <div id='fake-card'></div>
        </ion-content>
      ]
    }
  }
}