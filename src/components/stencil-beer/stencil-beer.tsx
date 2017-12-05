import { Component } from '@stencil/core';


@Component({
  tag: 'stencil-beer',
  styleUrl: 'stencil-beer.scss'
})
export class StencilBeer {

  changeTheme() {
    const colorValue = document.documentElement.style.getPropertyValue('--theme-primary');
    console.log(colorValue);
    if (colorValue === '#222' || colorValue === '') {
      document.documentElement.style.setProperty('--theme-primary', '#488aff');
      document.documentElement.style.setProperty('--theme-secondary', '#ececec');
    } else {
      document.documentElement.style.setProperty('--theme-primary', '#222');
      document.documentElement.style.setProperty('--theme-secondary', 'black');
    }
  }

  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar no-border-bottom>
            <ion-title>IonicBeer Beta</ion-title>

            <ion-buttons slot='end'>
              <ion-button onClick={() => this.changeTheme()}>
                <ion-icon slot='icon-only' name='color-palette'></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <stencil-router id='router'>
          <stencil-route
            url='/'
            component='main-page'
            exact={true}
          />

          <stencil-route
            url='/beers'
            component='beer-page'
          />

          <stencil-route
            url='/beers/favorites'
            component='favorites-page'
          />

          <stencil-route
            url='/beers/detail/:id'
            component='beer-detail'
          />

          <stencil-route
            url='/bars'
            component='bar-page'
          />

          <stencil-route
            url='/bars/directions/:address'
            component='bar-directions'
          />
        </stencil-router>
      </ion-app>
    );
  }
}