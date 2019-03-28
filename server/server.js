const express = require('express')
const { getDataFromDatabase, getListingByID } = require('../database/sqlite.js')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, '../public/index.html')))

app.get('/', (req, res) => {
  getDataFromDatabase((err, results) => {
    res.json(results)
  })
})

app.get('/:id', (req, res) => {
  getListingByID(req.params.id, (err, results) => {
    res.json(results)
  })
})

app.listen(3000, () => {
  console.log("Connected to Express server on Port 3000")
})