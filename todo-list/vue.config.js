module.exports = {
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