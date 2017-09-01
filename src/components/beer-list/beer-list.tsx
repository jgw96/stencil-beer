import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'beer-list',
  styleUrl: 'beer-list.scss'
})
export class BeerList {

  @Prop() beers: any[];

  render() {
    if (this.beers) {
      const beers = this.beers.map((beer) => {
        return (
          <ion-card>
            <st-img src={beer.image_url} alt='beer' />
            <ion-card-content>
              <ion-card-title>
                {beer.name}
              </ion-card-title>

              <p>
                {beer.description}
              </p>
            </ion-card-content>

            <stencil-route-link url={`/beers/detail/${beer.id}`} router="#router">
              <ion-buttons slot='end'>
                <ion-button color='primary' clear>
                  Detail
                </ion-button>
              </ion-buttons>
            </stencil-route-link>
          </ion-card>
        )
      });

      return (
        <ion-list>
          {beers}
        </ion-list>
      )
    }
  }
}