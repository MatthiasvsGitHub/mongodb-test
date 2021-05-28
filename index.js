const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
require('dotenv').config()
const postRouter = require('./routes/Posts')
const leadbRouter = require('./routes/Leaderboard')

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser : true, useUnifiedTopology : true})

/* app.use(postRouter) */
app.use(leadbRouter)


app.listen(port, console.log(`Server is listening on port ${port}`));