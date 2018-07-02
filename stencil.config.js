exports.config = {
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js',
        globPatterns: [
          '**/*.{js,css,json,html,ico,png,jpeg}'
        ],
        globIgnores: [
          'build/app/svg/*.js',
          'build/app/*.es5.js'
        ]
      }
    }
  ],
  globalStyle: 'src/global/variables.css',
  enableCache: true
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
