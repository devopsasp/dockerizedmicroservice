const express = require('express')
const route = require("../routes/route")
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
route(app)

app.listen(4500, function(req, res) {
    console.log("server started")
})