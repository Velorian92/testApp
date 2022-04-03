const express = require('express')
const app = express()
const PORT = 5000
const fs = require('fs')
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.get('/dbEmit/data.json', (req, res) => {
    res.header("Content-Type", 'application/json');
    fs.readFile(`${__dirname}/dbEmit/data.json`, (err, data) => {
        if (err) throw err
        res.send(JSON.parse(data))  
    })
})

app.get('/dbEmit/coments.json', (req, res) => {
    res.header("Content-Type", 'application/json');
    fs.readFile(`${__dirname}/dbEmit/coments.json`, (err, data) => {
        if (err) throw err
        res.send(JSON.parse(data))  
    })
})

fs.readdir(`${__dirname}/images`, (err,files) => {
    files.forEach(element => {
        app.get(`/images/${element}`, (req,res) => {
            res.sendFile(`${__dirname}/images/${element}`)
        })
    });
})

app.listen(PORT, () => {
    console.log(`
        Server has been started on port ${PORT}
    `)
})