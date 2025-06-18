import { createError } from "../utils/createError.js";
export const listUser = (req,res,next)=>{
    try{
        if(true){
           createError(400,'Email is Invalid')
        }else{
            throw new Error("Password is Invalid!!!")
        }
        res.json({message:"This is All user"})
    }
    catch(error){
        next(error);
    }
}

export const readUser = (req,res)=>{
    res.json({message:"This is Read User"})
}

export const createUser = (req,res)=>{
    res.json({message:"This is Create User"})
}

export const updateRoleUser = (req,res)=>{
    res.json({message:"This is Update User"})
}

export const deleteUser = (req,res)=>{
    res.json({message:"This is Update User"})
}