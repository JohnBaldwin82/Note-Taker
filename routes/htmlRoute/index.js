const path = require('path')
const route = require('express').Router()

route.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
})

route.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})
module.exports = route