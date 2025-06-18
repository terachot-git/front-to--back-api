import { object,ref,string } from "yup"
export const registerSchema = object({
    email: string().email("Email ไม่ถูกต้อง").required(),
    name:string().min(3,"Name ต้องมากกว่า 3 อักษร"),
    password: string().min(6,"Password ต้องมากกว่า 6 อักษร"),
    confirmPassword:string().required().oneOf([ref("password"),null],"Confirm Password ไม่ตรงกัน")
})

export const loginSchema = object({
    email: string().email("Email ไม่ถูกต้อง").required(),
    password: string().min(6,"Password ต้องมากกว่า 6 อักษร"),
})

