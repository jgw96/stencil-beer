import { Component, State, Prop, Listen } from '@stencil/core';

import { Bar } from '../../global/interfaces';

@Component({
  tag: 'bar-page',
  styleUrl: 'bar-page.css'
})
export class BarPage {

  @State() bars: Array<Bar>;

  @Prop({ context: 'isServer' }) private isServer: boolean;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;

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
    console.log(data);

    this.bars = data;
  }

  @Listen('ionInput')
  search(ev) {
    setTimeout(() => {
      const term = ev.detail.target.value;
      console.log(term);
      console.log(this.bars);

      this.bars = this.bars.filter((bar) =>
        bar.name.toLowerCase().indexOf(term.toLowerCase()) > -1
      );
    }, 1000);
  }

  render() {
    return [
      <profile-header>
      </profile-header>,

      <ion-toolbar color='dark'>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>,

      <ion-content>
        <bar-list bars={this.bars}></bar-list>
      </ion-content>
    ];
  }
}