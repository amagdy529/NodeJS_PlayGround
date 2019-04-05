const fs = require('fs')
const book = {
    title:'ego is the enemy',
    author:'ryan renolds'
}

const bookJsonString = JSON.stringify(book)

// fs.appendFileSync('1-json.json',bookJsonString)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)

