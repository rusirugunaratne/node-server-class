import { Router } from "express"
import customerRouter from "./customer.routes"
import itemRouter from "./item.routes"
import orderRouter from "./order.routes"

const rootRouter = Router()

rootRouter.use("/customers", customerRouter)
rootRouter.use("/items", itemRouter)
rootRouter.use("/orders", orderRouter)

export default rootRouter
