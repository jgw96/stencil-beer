import { Component, State, Prop, Listen } from '@stencil/core';
import { LoadingController, Loading } from '@ionic/core';


@Component({
  tag: 'bar-page',
  styleUrl: 'bar-page.scss'
})
export class BarPage {

  loading: Loading;

  @State() bars: any[];

  @Prop({ connect: 'ion-loading-controller' }) loadingCtrl: LoadingController;
  @Prop({ context: 'isServer' }) private isServer: boolean;

  componentDidLoad() {
    if (!this.isServer) {
      this.loadingCtrl.create({ content: 'fetching bars...' }).then((loading) => {

        this.loading = loading;
        
        loading.present().then(() => {
          navigator.geolocation.getCurrentPosition((position) => {
            fetch('/googlePlaces', {
              method: 'post',
              body: JSON.stringify({ lat: position.coords.latitude, long: position.coords.longitude })
            }).then((response) => {
              return response.json()
            }).then((data) => {
              this.bars = data;

              loading.dismiss();
            })
          });
        })
      })
    }
  }

  componentDidUnload() {
    this.loading.dismiss();
  }

  @Listen('ionInput')
  search(ev) {
    setTimeout(() => {
      const term = ev.detail.target.value;

      this.bars = this.bars.filter((bar) =>
        bar.brewery.name.toLowerCase().indexOf(term.toLowerCase()) > -1
      );
    }, 1000);
  }

  render() {
    return (
      <ion-page class='show-page'>
        <ion-toolbar color='dark'>
          <ion-searchbar></ion-searchbar>
        </ion-toolbar>

        <ion-content>
          <bar-list bars={this.bars}></bar-list>
        </ion-content>
      </ion-page>
    );
  }
}