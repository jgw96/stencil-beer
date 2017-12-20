import { Component, State } from '@stencil/core';

import { getUsers } from '../../global/save-service';


@Component({
  tag: 'users-page',
  styleUrl: 'users-page.scss'
})
export class UsersPage {

  @State() users: any[];

  componentDidLoad() {
    const tempUsers = [];

    getUsers().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tempUsers.push(doc.data());
      })

      this.users = tempUsers;
      console.log(this.users);
    })
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