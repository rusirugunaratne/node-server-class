import { Router } from "express"
import {
  createCustomer,
  deleteCustomer,
  getCustomerById,
  getCustomers,
  updateCustomer,
} from "../controllers/customer.controller"
import { authenticateToken } from "../middlewares/authenticateToken"

const customerRouter = Router()
customerRouter.use(authenticateToken)
// this blocks all the routes in this router

customerRouter.post("/", createCustomer)
customerRouter.get("/", getCustomers)
customerRouter.get("/:id", getCustomerById)
customerRouter.delete("/:id", deleteCustomer)
customerRouter.put("/:id", updateCustomer)

export default customerRouter
