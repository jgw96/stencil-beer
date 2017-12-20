import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'users-list',
  styleUrl: 'users-list.scss'
})
export class UsersList {

  @Prop() users: any[];

  render() {
    if (this.users) {
      return (
        <ion-list>
          {this.users.map((user) => {
            return (
              <ion-item>
                <ion-avatar slot='start'>
                  <img src={user.photo}></img>
                </ion-avatar>
                <ion-label>
                  <h2>{user.name}</h2>
                </ion-label>

                <ion-buttons>
                  <stencil-route-link url={`/main/users/${user.name}`}>
                    <ion-button color='primary' fill='clear'>
                      See Profile
                    </ion-button>
                  </stencil-route-link>
                </ion-buttons>
              </ion-item>
            )
          })}
        </ion-list>
      )
    }
  }
}