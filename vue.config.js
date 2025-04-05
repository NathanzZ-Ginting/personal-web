const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "util": require.resolve("util/"),
        "zlib": require.resolve("browserify-zlib"),
        "stream": require.resolve("stream-browserify"),
        "url": require.resolve("url/"),
        "crypto": require.resolve("crypto-browserify"),
        "assert": require.resolve("assert/")
      }
    }
  },
  pwa: {
    name: 'Joenathan Web',
    themeColor: '#42b983',
    msTileColor: '#ffffff',
    display: 'standalone',
    backgroundColor: '#ffffff',
    manifestOptions: {
      short_name: 'Nathan',
      icons: [
        {
          src: 'img/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'img/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  }
})