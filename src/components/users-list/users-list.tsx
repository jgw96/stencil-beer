import { Component, Element, Prop } from '@stencil/core';


@Component({
  tag: 'users-list',
  styleUrl: 'users-list.css'
})
export class UsersList {

  @Prop() users: any[];

  @Element() el: Element;

  goToUser(userName: string) {
    (this.el.closest('ion-nav') as HTMLIonNavElement).push('user-profile', {userName});
  }

  render() {
    if (this.users) {
      return (
        <ion-list no-lines>
          {this.users.map((user) => {
            return (
              <ion-item key={user.id}>
                <ion-avatar slot='start'>
                  <img src={user.photo}></img>
                </ion-avatar>
                <ion-label>
                  <h2>{user.name}</h2>
                </ion-label>

                <ion-buttons>
                  <stencil-route-link url={`/users/${user.name}`}>
                    <ion-button onClick={() => this.goToUser(user.name)} color='primary' fill='clear'>
                      See Profile
                    </ion-button>
                  </stencil-route-link>
                </ion-buttons>
              </ion-item>
            )
          })}
        </ion-list>
      )
    } else {
      return (
        <ion-list>
          <div id='fake-card'></div>
        </ion-list>
      )
    }
  }
}