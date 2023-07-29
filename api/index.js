const express = require('express')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use('/auth', authRoutes)

app.listen(8000, ()=>{
    console.log("Server started on port 8000")
})