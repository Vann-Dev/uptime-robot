const axios = require("axios")
const url = require('../url.json')
const urls = url.urls

setInterval(function () {
    urls.forEach(uri => {
        axios.get(uri).then(console.log("Ping At " + Date.now())).catch(() => { });
    })
}, 60 * 1000);

console.log('Pinger Ready')