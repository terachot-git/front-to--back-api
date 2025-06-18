import express from "express"
import { login, register } from "../controllers/auth.js"

import { validate } from "../validation/validate.js"
import { loginSchema, registerSchema } from "../validation/schema.js"
const router = express() 


router.post("/register",validate(registerSchema),register)
router.post("/login",validate(loginSchema),login)

export default router