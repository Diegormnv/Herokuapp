const dotenv = require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 9000

app.use('/api/*', (_, res) =>{
    res.json({data: 'The API LIVES'})
})


app.listen(port, () =>{
    console.log(`Server is live on port ${port}`)
})


// console.log('Its alive!!!!!')
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)
// console.log(dotenv)
// console.log(dotenv.PORT)
// console.log(process.env.FOOD)

