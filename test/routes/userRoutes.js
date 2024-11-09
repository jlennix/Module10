const express = require('express')
const userRouter = express.Router()
//http://localhost:3000/users/user1
userRouter.get('/user1', (req,res)=>{
    res.send('This is user1')
})

module.exports = userRouter;