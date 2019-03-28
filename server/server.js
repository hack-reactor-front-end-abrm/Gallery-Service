const express = require('express')
const { getDataFromDatabase, getListingByID } = require('../database/sqlite.js')
const path = require('path')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, '../dist/')))

app.get('/', (req, res) => {
  getDataFromDatabase((err, results) => {
    res.send(results)
  })
})

app.get('/:id', (req, res) => {
  getListingByID(req.params.id, (err, results) => {
    res.send(results)
  })
})

app.listen(3000, () => {
  console.log("Connected to Express server on Port 3000")
})