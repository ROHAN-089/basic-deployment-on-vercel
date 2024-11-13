const express = require("express")
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about',(req,res)=>{
    res.send("this is response send in req recived on about")
})

app.get('/login',(req,res)=>{
    res.send("<h1>LOGIN</>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})