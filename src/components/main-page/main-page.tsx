import { Component, State, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss'
})
export class MainPage {

  @State() firstImageUrl: string = '../../images/beers.jpeg';
  @State() secondImageUrl: string = '../../images/bars.jpeg';

  @Prop() history: RouterHistory;

  navigateToBeer() {
    this.history.push('/beers', {})
  }

  navigateToBars() {
    this.history.push('/bars', {})
  }

  render() {
    return (
      <ion-page class='show-page'>
        <profile-header></profile-header>

        <ion-content>
          <main>
            <stencil-route-link url="/beers">
              <div id='first-card' class='card'>
                <img class='cardImage' src={this.firstImageUrl} alt='beer' />
                <div class="card-title">Beers</div>
                <div class="card-subtitle">for you!</div>
              </div>
            </stencil-route-link>

            <stencil-route-link url="/bars">
              <div class='card'>
                <img class='cardImage' src={this.secondImageUrl} alt='bar' />
                <div class="card-title">Bars</div>
                <div class="card-subtitle">near you!</div>
              </div>
            </stencil-route-link>
          </main>
        </ion-content>
      </ion-page>
    );
  }
}