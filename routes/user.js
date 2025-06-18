import express from "express"
const router = express.Router();
import { createUser, deleteUser, listUser, readUser, updateRoleUser } from "../controllers/user.js";



//ENDPOINT http://localhost:8000/api/users
router.get('/users',listUser)
router.get('/user',readUser)


router.post('/user',createUser)

router.patch('/user/role/:id',updateRoleUser)

router.delete('/user/:id',deleteUser)


export default router