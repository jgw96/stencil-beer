import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'feed-list'
})
export class StencilComponent {

  @Prop() posts: any;

  render() {
    if (this.posts) {
      const posts = this.posts.map((post) => {
        return (
          <post-item post={post}></post-item>
        )
      });

      return (
        <ion-list no-lines>
          {posts}
        </ion-list>
      )
    } else {
      return (
        <ion-list no-lines>
          <div id='fake-card'></div>
        </ion-list>
      )
    }
  }
}