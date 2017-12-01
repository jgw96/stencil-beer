import { Component, State } from '@stencil/core';


@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss'
})
export class MainPage {

  @State() firstImageUrl: string = '../../images/smaller-beers.jpeg';
  @State() secondImageUrl: string = '../../images/smaller-bars.jpeg';

  componentDidLoad() {
    const firstBigImage = new Image();
    const secondBigImage = new Image();

    firstBigImage.src = '../../images/beers.jpeg';
    secondBigImage.src = '../../images/bars.jpeg';

    firstBigImage.onload = () => {
      this.firstImageUrl = firstBigImage.src;
    };

    secondBigImage.onload = () => {
      this.secondImageUrl = secondBigImage.src;
    };
  }

  render() {
    return (
      <ion-page class='show-page'>
        <ion-content>
          <main>
            <stencil-route-link url="/beers">
              <div id='first-card' class='card'>
                <img src={this.firstImageUrl} alt='beer' />
                <div class="card-title">Beers</div>
                <div class="card-subtitle">Find beers!</div>
              </div>
            </stencil-route-link>

            <stencil-route-link url="/bars">
              <div class='card'>
                <img src={this.secondImageUrl} alt='bar' />
                <div class="card-title">Bars</div>
                <div class="card-subtitle">Find bars near you!</div>
              </div>
            </stencil-route-link>
          </main>
        </ion-content>
      </ion-page>
    );
  }
}