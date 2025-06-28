import { Router } from "express"
import { signup, getAllUsers } from "../controllers/auth.controller"

const authRouter = Router()

authRouter.post("/signup", signup) // POST /api/auth/signup
authRouter.get("/users", getAllUsers) // GET /api/auth/users

export default authRouter
