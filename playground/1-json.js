const fs = require('fs')


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'HamadaHead'
data.planet = 'Mars'

fs.writeFileSync('1-json.json',JSON.stringify(data))

console.log(data)


