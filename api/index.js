const express = require('express')
const authRoutes = require('./routes/authRoutes')
var cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET"]
}))

app.use('/', authRoutes)

app.listen(8000, () => {
    console.log("Server started on port 8000")
})