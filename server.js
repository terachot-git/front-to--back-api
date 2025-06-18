import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'
const app = express()


//Basic middlewares
app.use(cors())//Allow cross domains
app.use(morgan('dev')) //Show log
app.use(express.json())//for readbody

//Routing GET,POST,PUT,PATCH,DELETE
//
// app.get('/',(req,res)=>{
//     res.json({message:"Hello cc20"})
// })
app.use('/api',userRouter)
app.use('/auth',authRouter)
const PORT = 8000
// Start Server
app.listen(PORT,()=>console.log(`Server is running on port http://localhost:${PORT}`))