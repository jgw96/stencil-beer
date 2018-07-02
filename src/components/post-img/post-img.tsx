import { Component, Element, Event, EventEmitter, Prop, State } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'post-img'
})
export class PostImg {
  @Element() el: HTMLElement;

  @Prop() src: string;
  @Prop() alt: string;

  @State() oldSrc: string;
  @State() firebaseSrc: string;

  @Event() lazyImgloaded: EventEmitter<HTMLImageElement>;

  io: IntersectionObserver;

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  componentWillUpdate() {
    console.log('componentWillUpdate called', this.src, this.oldSrc);
    if (this.src !== this.el.querySelector('img').getAttribute('data-src')) {
      this.addIntersectionObserver();
    }
  }

  async handleImage() {
    const image: HTMLImageElement = this.el.querySelector('img');

    const storage = firebase.storage();
    const imagePath = storage.ref(this.src);

    const url = await imagePath.getDownloadURL();

    this.firebaseSrc = url;

    image.onload = () => {
      this.lazyImgloaded.emit(image);
    };
  }

  addIntersectionObserver() {
    if (!this.src) {
      return;
    }
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: IntersectionObserverEntry[]) => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.handleImage();
          this.removeIntersectionObserver();
        }
      })

      this.io.observe(this.el.querySelector('img'));
    } else {
      // fall back to just loading the image for Safari and IE
      this.handleImage();
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    return (
      <img src={this.firebaseSrc} alt={this.alt}></img>
    );
  }
}