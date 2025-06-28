import { authenticateToken } from './../middlewares/authenticateToken';
import { Router } from "express"
import { signup, getAllUsers, login, refreshToken, logout } from "../controllers/auth.controller"

const authRouter = Router()

authRouter.post("/signup", signup) // POST /api/auth/signup
authRouter.post("/login", login)
authRouter.get("/users", authenticateToken, getAllUsers) // GET /api/auth/users
authRouter.post("/refresh-token", refreshToken)
authRouter.post("/logout", logout)
export default authRouter
