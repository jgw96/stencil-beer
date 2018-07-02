import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'post-detail'
})
export class PostDetail {

  @Prop() post: any;

  render() {
    return (
      <ion-page class='show-page'>

        <profile-header>
          <ion-back-button defaultHref='/home' />
        </profile-header>

        <ion-content padding>
          <post-img src={this.post.image} alt='feed image'></post-img>

          <h2>{this.post.title}</h2>
          <p>{this.post.postText}</p>

          <am-rating colorOn='#FFEB3B' rating={this.post.rating} max-rating='5'></am-rating>
        </ion-content>
      </ion-page>
    );
  }
}