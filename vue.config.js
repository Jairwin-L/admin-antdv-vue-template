const BASE_URL_API = 'https://api.douban.com/'
module.exports = {
  devServer: {
    proxy: {
      '/v2': {
        target: BASE_URL_API,
        ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  }
}
