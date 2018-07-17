import { Component, Element, State, Prop, Listen } from '@stencil/core';

import { Beer } from '../../global/interfaces';
import { fetchBeers, doSearch } from '../../global/http-service';

@Component({
  tag: 'beer-page',
  styleUrl: 'beer-page.css'
})
export class BeerPage {

  page: number = 1;
  currentStyle: number = 2;
  styles: Array<{ name: string, id: number }> = [
    {
      name: 'English IPA',
      id: 2
    },
    {
      name: 'Imperial IPA',
      id: 31
    },
    {
      name: 'Stout',
      id: 20
    },
    {
      name: 'Wheat',
      id: 112
    },
    {
      name: 'Oktoberfest',
      id: 82
    },
    {
      name: 'Lager',
      id: 93
    }
  ];

  @State() beers: Array<Beer>;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;


  @Element() el: Element;

  async componentDidLoad() {
    this.setUpBeers();
  }

  async setUpBeers() {
    // set up with first bit of content
    try {
      this.beers = await fetchBeers(this.page, this.currentStyle);
    }
    catch (err) {
      console.log(err);
      this.showErrorToast();
    }

    // now lets init infiniteScrolling
    const iScroll: HTMLIonInfiniteScrollElement = this.el.querySelector('#infinite-scroll');

    iScroll.addEventListener('ionInfinite', async () => {
      this.page = this.page + 1;

      try {
        const newBeers = await fetchBeers(this.page, this.currentStyle);
        this.beers = this.beers.concat(newBeers);
        iScroll.complete();
      }
      catch (err) {
        console.log(err);
        this.showErrorToast();
      }
    })
  }

  async newStyle(id: number) {
    // reset beers
    this.beers = null;

    try {
      this.beers = await fetchBeers(1, id);
    }
    catch (err) {
      console.error(err);
      this.showErrorToast();
    }
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error loading data', duration: 1000 });
    toast.present();
  }

  @Listen('ionInput')
  search(ev) {
    setTimeout(async () => {
      if (ev.target.value.length > 0) {
        try {
          const searchTerm = ev.target.value;
          this.beers = await doSearch(searchTerm);
        }
        catch (err) {
          this.beers = await fetchBeers(this.page);
        }
      } else {
        this.beers = await fetchBeers(1);
      }
    }, 500);
  }

  render() {
    return [
      <profile-header>
        <ion-toolbar id='searchbar' slot='searchbarSlot' color='dark'>
          <ion-searchbar></ion-searchbar>
        </ion-toolbar>
      </profile-header>,

      <ion-content>
        <div id='stylesBar'>
          {
            this.styles.map((style) => {
              return (
                <ion-button onClick={() => this.newStyle(style.id)} color='dark' shape='round'>
                  {style.name}
                </ion-button>
              )
            })
          }
        </div>
        <beer-list fave={false} beers={this.beers}></beer-list>

        <ion-infinite-scroll id="infinite-scroll">
          <ion-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="Loading more data...">
          </ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </ion-content>
    ];
  }
}