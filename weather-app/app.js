var request = require('request');

const url = 'https://api.darksky.net/forecast/87fac29a8c1a9657793a3c171506b26c/37.8267,-122.4233'

request({ url:url , json: true } ,( error,response )=>{
    // console.log(response.body.currently)
    var temp = response.body.currently.temperature
    var rain = response.body.currently.precipProbability
    console.log('it is currently ' + temp + ' degrees out. there is a ' + rain + '% chance of rain')
})