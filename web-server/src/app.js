const path = require('path')
const express = require('express')
console.log(__dirname)
console.log(path.join(__dirname,'../public'))
// console.log(__filename)
const app = express()

// define paths for express engine
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates')

//Setup Handlebars engine and views location
app.set('view engine' , 'hbs')
app.set('views',viewsPath)


app.use(express.static(publicDirectory))

app.get('', (req,res) => {
    res.render('index',{
        title:"Weather App",
        name: "Ahmed Magdy"
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        title:"Weather App",
        name: "Ahmed Magdy"
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        title:"Help Page HBS",
        name: "Ahmed Magdy"
    })
})

app.get('', (req,res) => {
    res.send('Hello express! BBBCC')
})


app.get('/help', (req,res) => {
    res.send([{
        name:"ahmed",
        age: "27"
    },{
        name:"aAAhmed",
        age: "272"

    }])
    // res.send('Help Page')
})

app.get('/about', (req,res) => {
    // res.send('About Page')
    app.use(express.static(publicDirectory+"/about"))
    // res.redirect('/about');
})

app.get('/weather', (req,res) => {
    res.send({
        forecast:"it is not raining thank god!",
        location:"Philadelphia Inshallah with rocky"
    })
    // res.redirect('/weather');
})

app.listen(3000, () => {
    console.log('Server is Up MotherFucker on Port 300!')
})

//app.com
//app.com/help
//app.com/about
