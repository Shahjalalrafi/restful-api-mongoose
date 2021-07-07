const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const postsRoute = require('./Routes/posts')

const app = express()
app.use(cors())
app.use(express.json())

const url = `mongodb+srv://myTodos:rafi1234@cluster0.fltsf.mongodb.net/restful-api?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => console.log('db connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) =>{
    res.send('helllo root route')
})

app.use('/posts', postsRoute)

// listen port
app.listen(5000, () => {
    console.log('listenning on port 5000')
})