import { Component, Element, State, Prop } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'users-page'
})
export class UsersPage {

  @State() users: any[];
  @Prop({ context: 'isPrerender' }) private isPrerender: boolean;

  @Element() el: Element;

  iScroll: HTMLIonInfiniteScrollElement;
  last: number;

  componentDidLoad() {
    if (!this.isPrerender) {
      this.setUpUsers();
    }
  }

  setUpUsers() {
    const tempUsers = [];

    const currentUser = firebase.auth().currentUser;

    this.getUsers().then((querySnapshot) => {

      querySnapshot.forEach((doc) => {
        if (doc.data().email !== currentUser.email) {
          tempUsers.push(doc.data());
        }
      })

      this.users = tempUsers;
      this.last = querySnapshot.docs[querySnapshot.docs.length - 1];

      // now lets init infiniteScrolling
      this.iScroll = this.el.querySelector('#infinite-scroll');

      this.iScroll.addEventListener('ionInfinite', async () => {
        const emptyUsers = [];

        const snapshot = await this.paginate(this.last);

        this.last = snapshot.docs[snapshot.docs.length - 1];

        snapshot.forEach((doc) => {
          if (doc.data().email !== currentUser.email) {
            emptyUsers.push(doc.data());
          }
        });

        this.users = this.users.concat(emptyUsers);
        console.log(this.users);

        this.iScroll.complete();
      })
    });
  }

  paginate(last) {
    return firebase.firestore().collection('users')
      .startAfter(last)
      .limit(12)
      .get();
  }

  getUsers() {
    return firebase.firestore().collection('users')
      .limit(12)
      .get();
  }

  render() {
    return [
      <profile-header>
        <ion-back-button defaultHref='/home' />
      </profile-header>,

      <ion-content>
        <users-list users={this.users}></users-list>

        <ion-infinite-scroll id="infinite-scroll">
          <ion-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="Loading more data...">
          </ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </ion-content>
    ];
  }
}