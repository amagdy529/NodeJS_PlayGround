var request = require('request');

const url = 'https://api.darksky.net/forecast/87fac29a8c1a9657793a3c171506b26c/37.8267,-122.4233?units=si'

request({ url:url , json: true } ,( error,response )=>{
    // console.log(response.body.currently)
    var temp = response.body.currently.temperature
    var rain = response.body.currently.precipProbability
    console.log( response.body.daily.data[0].summary + '\nit is currently ' + temp + ' degrees out. there is a ' + rain + '% chance of rain')
})

// GEOCoding

//Address -> Lat/Long ->


const Geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW1hZ2R5NTI5IiwiYSI6ImNqdTc5MWs5YTFydm00ZXBkOHQ0ZXdxNHQifQ.-a2d1S7CjJaPLUVpZc4vNQ'

request({ url:Geourl , json: true } ,( error,response )=>{
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude,longitude)
})