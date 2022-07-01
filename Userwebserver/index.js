const express = require('express')
const app = express()
const Users = require('./api/users.json')
const userRouter = require('./api/userRoutes')

const myLogger = require('./api/middlewares/logger')
const requesttime = require('./api/middlewares/requesttime')
app.use(requesttime);
app.use(myLogger);
app.use(express.json())
app.get('/', (req, res)=>{
    res.send('Welcome to home page')
})
app.use('/users', userRouter)
app.listen(1001,()=>{
    console.log('Runningon port 1001')
})



/*app.get('/users', (req, res)=>{
   res.status(200).json(Users)
})*/