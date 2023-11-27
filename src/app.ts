// const express = require('express')
import express, { NextFunction, Request, Response } from "express"
const app = express()
const port = 3000

//parser
app.use(express.json())

//middleware
const logger=(req:Request, res:Response, next:NextFunction)=>{
  console.log(req.url,req.method,req.hostname);
  next()
}

//router
const userRouter=express.Router();
const courseRouter=express.Router();

app.use('/api/V1/users',userRouter)
app.use('/api/V1/courses',courseRouter)
userRouter.post('/createUser',(req:Request,res:Response)=>{
  const user =req.body;
  console.log(user)

  res.json({
    success:true,
    massage:"User is created successfully",
    data: user,
  })
})

courseRouter.post('/createCourse',(req:Request,res:Response)=>{
  const course =req.body;
  console.log(course)

  res.json({
    success:true,
    massage:"Course is created successfully",
    data: course,
  })
})

app.get('/', logger, (req:Request, res:Response) => {
  res.send('Hello devs!')
})

app.post('/',logger,(req:Request,res:Response)=>{
console.log(req.body);
res.json({
  message:"Successfullu received data"
})
});
export default app; 