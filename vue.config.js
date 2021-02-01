const webpack = require("webpack");

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      'vue-router':'VueRouter',
      'jquery': '$',
      'axios': 'axios',
      'vuex': 'Vuex',
      'vue': 'Vue',

    },
    // performance:{
    //   "maxEntrypointSize": 10,
    //   "maxAssetSize": 15
    // }
  },
};

