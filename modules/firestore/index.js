const { resolve } = require('path');

const firestoreModule = function (moduleOptions) {
  const options = Object.assign({}, this.options.firestore, moduleOptions);

  /* eslint-disable no-console */
  console.log('firestore module config', options);

  // add firestore client plugin
  this.addTemplate({
    src: resolve(__dirname, './templates/plugins/firestore.ts'),
    fileName: 'firestore.ts'
  });

  this.addPlugin({
    options,
    src: resolve(__dirname, './templates/plugins/index.ts')
  });
};

module.exports = firestoreModule;
module.exports.default = firestoreModule;
