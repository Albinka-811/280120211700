const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "~@css/variables.scss";',
            }
        }
    },
    chainWebpack: config => {
        setAliases(config.resolve.alias);
    }
}

function setAliases (alias) {
    alias
        .set('@store', path.resolve(__dirname, 'src/store'))
        .set('@css', path.resolve(__dirname, 'src/css'))
        .set('@layouts', path.resolve(__dirname, 'src/layouts'))
        .set('@plugins', path.resolve(__dirname, 'src/plugins'))
        .set('@components', path.resolve(__dirname, 'src/components'))
        .set('@assets', path.resolve(__dirname, 'src/assets'))
}
