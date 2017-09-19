import { Component, Prop } from '@stencil/core';
import { LoadingController } from '@ionic/core';

declare var google: any;

@Component({
  tag: 'bar-directions',
  styleUrl: 'bar-directions.scss'
})
export class BarDirections {

  @Prop() match: any;
  @Prop({ connect: 'ion-loading-controller' }) loadingCtrl: LoadingController;

  apiKey = 'AIzaSyCb9lhLYxUnRjSp1oIGl6aAsXLODc3o-f4';
  url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCb9lhLYxUnRjSp1oIGl6aAsXLODc3o-f4';

  componentWillLoad() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCb9lhLYxUnRjSp1oIGl6aAsXLODc3o-f4';
    document.body.appendChild(script);
  }

  componentDidLoad() {
    this.loadingCtrl.create({ content: 'getting location...' }).then((loading) => {
      loading.present().then(() => {

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.match.params.address}&key=${this.apiKey}`).then((response) => {
          return response.json()
        }).then((data) => {
          console.log(data);
          navigator.geolocation.getCurrentPosition((position) => {
            const start = { lat: position.coords.latitude, lng: position.coords.longitude };
            const dest = { lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng };

            const map = new google.maps.Map(document.getElementById('map'), {
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

                loading.dismiss();
              }
            });
          })
        })
      })
    })
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