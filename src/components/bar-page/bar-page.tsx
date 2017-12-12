import { Component, State, Prop, Listen } from '@stencil/core';
import { ToastController } from '@ionic/core';

import { Bar } from '../../global/interfaces';

@Component({
  tag: 'bar-page',
  styleUrl: 'bar-page.scss'
})
export class BarPage {

  @State() bars: Array<Bar>;

  @Prop({ context: 'isServer' }) private isServer: boolean;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  componentDidLoad() {
    if (!this.isServer) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        try {
          this.getBars(position);
        }
        catch (err) {
          this.showErrorToast();
        }
      });
    }
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({ message: 'Error loading data', duration: 1000 });
    toast.present();
  }

  async getBars(position: Position) {
    const response = await fetch('/googlePlaces', {
      method: 'post',
      body: JSON.stringify({ lat: position.coords.latitude, long: position.coords.longitude })
    })
    const data = await response.json();

    this.bars = data;
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