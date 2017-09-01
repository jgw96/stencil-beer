import { Component, Prop, State } from '@stencil/core';


@Component({
  tag: 'beer-detail',
  styleUrl: 'beer-detail.scss'
})
export class BeerDetail {

  @State() beer: any;
  @Prop() match: any;

  componentDidLoad() {
    fetch(`https://api.punkapi.com/v2/beers?ids=${this.match.params.id}`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.beer = data[0];
    })
  }

  render() {
    if (this.beer) {

      const foods = this.beer.food_pairing.map((food: any) => {
        return (
          <div>{food}</div>
        )
      })

      return (
        <ion-page>
          <ion-content>
            <div id='img-block'>
              <st-img src={this.beer.image_url} alt={this.beer.name}></st-img>
            </div>
            <h1>{this.beer.name}</h1>

            <div>ABV: {this.beer.abv}</div>
            <div>IBU: {this.beer.ibu}</div>

            <p>{this.beer.description}</p>

            <h4>Food Pairings</h4>
            {foods}
          </ion-content>
        </ion-page>
      )
    } else {
      <ion-page>
        <ion-content>
        </ion-content>
      </ion-page>
    }
  }
}