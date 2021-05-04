module.exports = {
    css: {
      sourceMap: true,
      loaderOptions: {
        scss: {
          prependData: `
            @import "~@/assets/css/_variables.scss";
            @import "~@/assets/css/_mixin.scss";
            @import "~@/assets/css/_mediaQuery.scss";
          `
        }
      }
    },
    publicPath: '/todo-list'
  }