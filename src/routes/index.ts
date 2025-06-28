import { Router } from "express"
import customerRouter from "./customer.routes"
import itemRouter from "./item.routes"
import authRouter from "./auth.routes"

const rootRouter = Router()

rootRouter.use("/customers", customerRouter)
rootRouter.use("/items", itemRouter)
rootRouter.use("/auth", authRouter)

export default rootRouter
