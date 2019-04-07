var request = require('request');

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



geocode('Cairo', (error,data) => {
    console.log('error is : ' , error)
    console.log('Data is :\n',data)
})