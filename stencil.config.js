exports.config = {
  bundles: [
    { components: ['stencil-beer', 'main-page'] },
    { components: ['bar-page', 'bar-list'] },
    { components: ['beer-page', 'beer-list', 'beer-detail'] },
    { components: ['bar-directions'] }
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core'},
    { name: 'st-img'}
  ],
  serviceWorker: {
    globPatterns: [
      '**/*.{js,css,json,html,ico,png,jpeg}'
    ]
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
