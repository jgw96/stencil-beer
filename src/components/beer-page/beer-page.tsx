import { Component, State, Prop } from '@stencil/core';
import { LoadingController } from '@ionic/core';


@Component({
  tag: 'beer-page',
  styleUrl: 'beer-page.scss'
})
export class BeerPage {

  @State() beers: any[];

  @Prop({ connect: 'ion-loading-controller' }) loadingCtrl: LoadingController;

  page: number;

  componentDidLoad() {
    this.page = 1;

    this.fetchBeers(this.page);
  }

  fetchBeers(page) {
    this.loadingCtrl.create({ content: 'fetching beers...' }).then((loading) => {
      loading.present().then(() => {
        fetch(`https://api.punkapi.com/v2/beers?page=${page}`).then((response) => {
          return response.json();
        }).then((data) => {
          this.beers = data;
          loading.dismiss();
        })
      })
    })
  }

  nextPage() {
    this.page = this.page + 1;
    this.fetchBeers(this.page);
  }

  previousPage() {
    this.page = this.page - 1;
    this.fetchBeers(this.page);
  }

  render() {
    return (
      <ion-page>
        <ion-content>
          <beer-list beers={this.beers}></beer-list>
        </ion-content>

        <ion-footer>
          <ion-toolbar>
            <ion-buttons slot='start'>
              <ion-button clear onClick={() => this.previousPage()}>
                back
              </ion-button>
            </ion-buttons>


            <ion-buttons slot='end'>
              <ion-button clear onClick={() => this.nextPage()}>
                next
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-footer>
      </ion-page>
    );
  }
}