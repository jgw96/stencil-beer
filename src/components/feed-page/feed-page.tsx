import { Component, Listen, Prop, State } from '@stencil/core';
import { ModalController } from '@ionic/core';

declare var firebase: any;

@Component({
  tag: 'feed-page',
  styleUrl: 'feed-page.scss'
})
export class FeedPage {

  @State() posts: any = [];

  @Prop({ connect: 'ion-modal-controller' }) modalCtrl: ModalController;

  componentDidLoad() {
    this.getPosts();
  }

  async getPosts() {
    const tempPosts = [];

    const snapshot = await firebase.firestore().collection('feed').get();
    snapshot.forEach((doc) => {
      tempPosts.push(doc.data());
    });

    console.log(tempPosts);

    this.posts = tempPosts;
  }

  @Listen('body:ionModalDidDismiss')
  update() {
    this.getPosts();
  }

  async makeNewPost() {
    const modal = await this.modalCtrl.create({
      component: 'feed-page-modal'
    });
    await modal.present();
  }

  render() {
    return (
      <ion-page>

        <profile-header>
        </profile-header>

        <ion-content>
          <feed-list posts={this.posts}></feed-list>
        </ion-content>

        <ion-fab vertical='bottom' horizontal='right'>
          <ion-fab-button onClick={() => this.makeNewPost()}>
            <ion-icon name='add'></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-page>
    );
  }
}