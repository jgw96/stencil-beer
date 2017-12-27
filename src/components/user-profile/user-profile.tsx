import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

import { getCertainUser } from '../../global/save-service';


@Component({
  tag: 'user-profile',
  styleUrl: 'user-profile.scss'
})
export class UserProfile {

  @Prop() match: MatchResults;
  @State() beers: any;
  @State() user: any;

  async componentDidLoad() {
    const allData = await getCertainUser(this.match.params.user);

    if (allData[1].length > 0) {
      this.beers = allData[1];
    }
    console.log(this.beers);
    this.user = allData[0];
  }

  render() {
    if (this.user) {
      return (
        <ion-page class='show-page'>
          <profile-header></profile-header>

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
        </ion-page>
      );
    } else {
      return (
        <ion-page class='show-page'>
          <profile-header></profile-header>

          <ion-content>
            <div id='fake-card'></div>
          </ion-content>
        </ion-page>
      )
    }
  }
}