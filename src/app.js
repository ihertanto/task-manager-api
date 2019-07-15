const express = require('express')
require('./db/mongoose')
const authRouter = require('./routers/auth')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use(authRouter)
app.use(userRouter)
app.use(taskRouter)

module.exports = app