exports.config = {
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core' },
    { name: 'st-img' }
  ],
  serviceWorker: {
    swSrc: 'src/sw.js',
    globPatterns: [
      '**/*.{js,css,json,html,ico,png,jpeg}'
    ],
    globIgnores: [
      'build/app/svg/*.js',
      'build/app/*.es5.js'
    ]
  },
  globalStyle: 'src/global/variables.css',
  enableCache: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
