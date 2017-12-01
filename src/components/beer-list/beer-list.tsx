import { Component, Prop } from '@stencil/core';

import { Beer } from '../../global/interfaces';


@Component({
  tag: 'beer-list',
  styleUrl: 'beer-list.scss'
})
export class BeerList {

  @Prop() beers: Array<Beer>;

  render() {
    if (this.beers) {
      const beers = this.beers.map((beer) => {
        return (
          <beer-item beer={beer}></beer-item>
        )
      });

      return (
        <ion-list>
          {beers}
        </ion-list>
      )
    } else {
      return (
        <ion-list>
          <div id='fake-card'></div>
        </ion-list>
      )
    }
  }
}