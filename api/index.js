const express = require('express')
const authRoutes = require('./routes/authRoutes')
var cors = require('cors')
const config = require('./config')

const app = express()

app.use(express.json())
app.use(cors({
    origin: "https://music-wrapped-main.vercel.app", //"http://localhost:3000",
    methods:["GET"]
}))

app.use('/', authRoutes)
app.use('/info', require('./routes/infoRoutes'))

app.listen(8000, () => {
    console.log("Server started on port 8000")
})