const express = require('express')
const path = require('node:path')
const bodyParser = require('body-parser');
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const dotenv = require('dotenv');
dotenv.config()

app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    console.log('Sending [GET]: Index')
    res.render('index')
})

app.get('/view', (req, res) => {
    console.log('Sending [GET]: View')
    res.render('view')
})

server.listen(3000, () => {
    console.log('DB Views has started. Port: 3000')
})