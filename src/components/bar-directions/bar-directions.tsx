import { Component, Prop } from '@stencil/core';
import { LoadingController, Loading } from '@ionic/core';

declare var google: any;

@Component({
  tag: 'bar-directions',
  styleUrl: 'bar-directions.scss'
})
export class BarDirections {

  @Prop() match: any;
  @Prop({ connect: 'ion-loading-controller' }) loadingCtrl: LoadingController;

  url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCb9lhLYxUnRjSp1oIGl6aAsXLODc3o-f4';
  script: HTMLScriptElement;
  loading: Loading;

  loadScript() {
    return new Promise((resolve) => {
      this.script = document.createElement('script');
      this.script.src = this.url;
      document.body.appendChild(this.script);
      resolve();
    });
  }

  async componentDidLoad() {
    this.loading = await this.loadingCtrl.create({
      content: 'loading directions...'
    });
    this.loading.present();

    await this.loadScript();

    this.script.addEventListener('load', async () => {
      const response = await fetch('/googleGeocode', {
        method: 'post',
        body: JSON.stringify({ address: this.match.params.address })
      });
      const data = await response.json();

      navigator.geolocation.getCurrentPosition((position) => {
        const start = { lat: position.coords.latitude, lng: position.coords.longitude };
        const dest = { lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng };

        const map = new google.maps.Map(document.querySelector('#map'), {
          center: start,
          zoom: 7
        });

        const directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });

        // Set destination, origin and travel mode.
        const request = {
          destination: dest,
          origin: start,
          travelMode: 'DRIVING'
        };

        // Pass the directions request to the directions service.
        const directionsService = new google.maps.DirectionsService();
        directionsService.route(request, (response, status) => {
          if (status == 'OK') {
            // Display the route on the map.
            directionsDisplay.setDirections(response);
            this.loading.dismiss();
          } else {
            this.loading.dismiss();
          }
        });
      })
    });
  }

  render() {
    return (
      <ion-page class='show-page'>
        <ion-content>
          <div id='map'></div>
        </ion-content>
      </ion-page>
    );
  }
}