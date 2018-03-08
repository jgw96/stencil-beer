import { Component, Element, State } from '@stencil/core';
// import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss'
})
export class MainPage {

  @State() firstImageUrl: string = '/assets/beers.jpeg';
  @State() secondImageUrl: string = '/assets/bars.jpeg';

  // @Prop() history: RouterHistory;

  @Element() el: Element;

  navigateToBeer() {
    // this.history.push('/beers', {});
    this.el.closest('ion-nav').push('tabs-page');
  }

  navigateToBars() {
    // this.history.push('/bars', {});
    this.el.closest('ion-nav').push('bar-page');
  }

  render() {
    return (
      <ion-page class='show-page'>
        <profile-header></profile-header>

        <ion-content>
          <main>
            <div onClick={() => this.navigateToBeer()}>
              <div id='first-card' class='card'>
                <img class='cardImage' src={this.firstImageUrl} alt='beer' />
                <div class="card-title">Beers</div>
                <div class="card-subtitle">for you!</div>
              </div>
            </div>

            <div>
              <div class='card'>
                <img class='cardImage' src={this.secondImageUrl} alt='bar' />
                <div class="card-title">Bars</div>
                <div class="card-subtitle">near you!</div>
              </div>
            </div>
          </main>
        </ion-content>
      </ion-page>
    );
  }
}