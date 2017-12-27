import { Component, State, Prop } from '@stencil/core';

import { getUsers } from '../../global/save-service';

declare let firebase: any;

@Component({
  tag: 'users-page',
  styleUrl: 'users-page.scss'
})
export class UsersPage {

  @State() users: any[];
  @Prop({ context: 'isPrerender' }) private isPrerender: boolean;

  componentDidLoad() {
    if (!this.isPrerender) {
      const tempUsers = [];

      const currentUser = firebase.auth().currentUser;

      getUsers().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().email !== currentUser.email) {
            tempUsers.push(doc.data());
          }
        })

        this.users = tempUsers;
        console.log(this.users);
      })
    }
  }

  render() {
    return (
      <ion-page class='show-page'>
        <profile-header></profile-header>

        <ion-content>
          <users-list users={this.users}></users-list>
        </ion-content>
      </ion-page>
    );
  }
}