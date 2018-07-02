import { Component, Element, Prop } from '@stencil/core';


@Component({
  tag: 'post-item'
})
export class PostItem {

  @Prop() post: any;

  @Element() el: Element;

  componentDidLoad() {
    console.log(this.post);
  }

  clickedDetail(post) {
    (this.el.closest('ion-nav')as HTMLIonNavElement).push('post-detail', {post});
  }

  render() {
    return (
      <ion-item onClick={() => {this.clickedDetail(this.post)}}>
        <ion-avatar slot='start'>
          <post-img src={this.post.image} alt='feed image'></post-img>
        </ion-avatar>

        <ion-label>
          <h2>{this.post.title}</h2>
          <p>{this.post.postText}</p>

          <am-rating colorOn='#FFEB3B' rating={this.post.rating} max-rating='5'></am-rating>
        </ion-label>
      </ion-item>
    );
  }
}