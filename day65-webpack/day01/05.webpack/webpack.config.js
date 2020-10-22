const {resolve} = require("path");

module.exports = {
    entry:"./05.webpack/src/js/app.js",
    output:{
        filename:"app.js",
        path:resolve(__dirname,"./dist/js")
    }
}