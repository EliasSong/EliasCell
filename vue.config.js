const webpack = require("webpack");

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      'jquery': '$',
      'axios': 'axios'
    },
    // performance:{
    //   "maxEntrypointSize": 10,
    //   "maxAssetSize": 15
    // }
  },
};

