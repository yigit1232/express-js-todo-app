const express = require('express')
const app = express()
const port = 3000
const router = require('./router/todo.router')
require('./connection/db.connection')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',router)
app.listen(port,()=>{console.log(`http://localhost:${port}`)})