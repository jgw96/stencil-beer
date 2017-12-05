exports.config = {
  bundles: [
    { components: ['stencil-beer', 'main-page'] },
    { components: ['bar-page', 'bar-list'] },
    { components: ['beer-page', 'beer-list', 'beer-detail', 'beer-item'] },
    { components: ['favorites-page'] },
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
    ],
    globIgnores: [
      'build/app/svg/*.js'
    ]
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
