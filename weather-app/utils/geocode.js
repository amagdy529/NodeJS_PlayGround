const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW1hZ2R5NTI5IiwiYSI6ImNqdTc5MWs5YTFydm00ZXBkOHQ0ZXdxNHQifQ.-a2d1S7CjJaPLUVpZc4vNQ'

    request({url: url,json:true} , (error, response) => {
        if (error) {
            callback('Unable To connect To Location Services!',undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable To find location , try another location' , undefined)   
        } else {
            callback(undefined , {
                latitude: response.body.features[0].center[1] ,
                longitude: response.body.features[0].center[0] ,
                location: response.body.features[0].place_name
            })
        }
    })

}

module.exports = geocode

// Old function Without Callback
// GEOCoding
//Address -> Lat/Long ->

// const Geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW1hZ2R5NTI5IiwiYSI6ImNqdTc5MWs5YTFydm00ZXBkOHQ0ZXdxNHQifQ.-a2d1S7CjJaPLUVpZc4vNQ'

// request({ url:Geourl , json: true } ,( error,response )=>{
//     if (error) {
//         console.log('Unable to connect to the MapBox Geo  service!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find Location , try another search!')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude,longitude)
//     }
// })


