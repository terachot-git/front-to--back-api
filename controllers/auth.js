import { object, ref, string } from "yup"
import prisma from "../config/prisma.js"
import { createError } from "../utils/createError.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req,res,next) => {
   try {
     const {email,name,password} = req.body
     const user = await prisma.user.findFirst({
        where: {
            email:email,
        }
     })
    console.log(user)

    if(user){
        createError(400,"Email already exist!!")
    }
    const hashPassword = bcrypt.hashSync(password,10);

    const result = await prisma.user.create({
        data:{email:email,
            name:name,
            password:hashPassword}
    })
    res.json({message:`Register ${result.name} Success`})
   } catch (error) {
      
        next(error)
   }
}


export const login = async (req,res,next) => {

try {
      /*
    1.Validate body
    2.Check body
    3.Check Email in DB
    4.Check pwd
    5.Create token
    6.Response
    */

    const {email,password} = req.body
    const user = await prisma.user.findFirst({where:{email:email,}})
    if(!user) 
    {
        createError(401,"Email or Password is invalid")
    }
    const checkpassword = await bcrypt.compare(password,user.password)
    if (!checkpassword)
    {
        createError(401,"Email or Password is invalid")
    }

const payload = {
    id: user.id,
    role: user.role,
}
const token = jwt.sign(payload,process.env.SECRET,{expiresIn:"1d"})



    res.json({message:`Wellcome ${user.name}`,token})


} catch (error) {
    next(error);
}
}