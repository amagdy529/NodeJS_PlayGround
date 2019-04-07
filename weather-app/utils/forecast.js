const request = require('request')

const forecast = (latitude , longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/87fac29a8c1a9657793a3c171506b26c/'+latitude+','+longitude+'?units=si'
    
    request({url:url , json:true} , (error,response) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (response.body.error) {
            callback('Unable to find location!',undefined)
        } else {
            callback(undefined,response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast


// Old Function not the callback way

// const url = 'https://api.darksky.net/forecast/87fac29a8c1a9657793a3c171506b26c/37.8267,-122.4233?units=si'

// request({ url:url , json: true } ,( error,response )=>{
//     if (error) {
//         console.log('Unable to connect to the weater service!')
//     } else if (response.body.error) {
//         console.log('Unable To find Location!')
//     } else {
//         var temp = response.body.currently.temperature
//         var rain = response.body.currently.precipProbability
//         console.log( response.body.daily.data[0].summary + '\nit is currently ' + temp + ' degrees out. there is a ' + rain + '% chance of rain')
//     }
// })

