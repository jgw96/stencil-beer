import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'post-item',
  styleUrl: 'post-item.scss'
})
export class PostItem {

  @Prop() post: any;

  render() {
    return (
      <ion-card>
        <post-img src={this.post.image} alt='feed image'></post-img>
        <ion-card-content>
          <ion-card-title>
            {this.post.title}
          </ion-card-title>
          <p>
            {this.post.postText}
          </p>
        </ion-card-content>
      </ion-card>
    );
  }
}