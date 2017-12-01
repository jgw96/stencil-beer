exports.config = {
  bundles: [
    { components: ['stencil-beer', 'main-page'] },
    { components: ['bar-page', 'bar-list'] },
    { components: ['beer-page', 'beer-list', 'beer-detail', 'beer-item'] },
    { components: ['bar-directions'] }
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core'},
    { name: 'st-img'}
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
