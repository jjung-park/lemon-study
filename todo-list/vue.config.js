module.exports = {
    publicPath: '/todo-list/',
    outputDir: 'docs',
    css:{
        loaderOptions:{
            scss:{
                prependDate:`
                    @import "@/assets/style/_mixins.scss";
                    @import "@/assets/style/_variables.scss"
                `
            }
        }
    }
}