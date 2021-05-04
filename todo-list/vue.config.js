module.exports = {
    css: {
      sourceMap: true,
      loaderOptions: {
        scss: {
          prependData: `
            @import "~@/assets/style/common.scss";
          `
        }
      }
    },
    publicPath: '/todo-list'
  }