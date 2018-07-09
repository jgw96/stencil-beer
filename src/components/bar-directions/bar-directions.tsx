import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'bar-directions',
  styleUrl: 'bar-directions.css'
})
export class BarDirections {

  @Prop() address: string;
  @Prop() dest: string;
  @Prop({ connect: 'ion-loading-controller' }) loadingCtrl: HTMLIonLoadingControllerElement;

  @State() directionsLeg: google.maps.DirectionsLeg;

  url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCb9lhLYxUnRjSp1oIGl6aAsXLODc3o-f4';
  script: HTMLScriptElement;
  loading: HTMLIonLoadingElement;

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
        body: JSON.stringify({ address: this.address })
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
          travelMode: google.maps.TravelMode.DRIVING
        };

        // Pass the directions request to the directions service.
        const directionsService = new google.maps.DirectionsService();
        directionsService.route(request, (response, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            console.log(response);
            this.directionsLeg = response.routes[0].legs[0];
            console.log(this.directionsLeg);
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

  openMaps() {
    window.open(`https://www.google.com/maps/dir/?api=1&origin=${this.directionsLeg.start_address}&destination=${this.directionsLeg.end_address}`);
  }

  render() {
    return [
      <profile-header>
        <ion-back-button defaultHref='/home' />
      </profile-header>,
      
      <ion-content>
        <div id='map'></div>
        <div id='bottomPaper'>

          <ion-fab edge={true} horizontal='end' vertical='top'>
            <ion-fab-button onClick={() => this.openMaps()}>
              <ion-icon name='car'></ion-icon>
            </ion-fab-button>
          </ion-fab>

          <ion-list no-lines>
            <ion-item>
              <ion-label>
                <h1>{this.dest}</h1>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-label>
                {this.directionsLeg ? <h2>{this.directionsLeg.duration.text} away</h2> : <h2>'Loading...'</h2>}
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon color='primary' name='pin' slot='start' size='large'></ion-icon>

              <ion-label>
                {this.directionsLeg ? this.directionsLeg.end_address : 'Loading...'}
              </ion-label>
            </ion-item>
          </ion-list>
        </div>
      </ion-content>
    ];
  }
}