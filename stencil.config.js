exports.config = {
  bundles: [
    { components: ['stencil-beer', 'main-page'] },
    { components: ['beer-page', 'beer-list', 'beer-detail']},
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
