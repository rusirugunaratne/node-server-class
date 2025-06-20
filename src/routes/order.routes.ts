import { Router } from "express"
import { createOrder, deleteOrder, getOrderById, getOrders, updateOrder } from "../controllers/order.controller"

const orderRouter = Router()

orderRouter.post("/", createOrder) // POST /api/orders
orderRouter.get("/", getOrders) // GET /api/orders
orderRouter.get("/:id", getOrderById) // GET /api/orders/:id
orderRouter.put("/:id", updateOrder) // PUT /api/orders/:id
orderRouter.delete("/:id", deleteOrder) // DELETE /api/orders/:id

export default orderRouter
