import { Router } from "express"
import {
  createCustomer,
  deleteCustomer,
  getCustomerById,
  getCustomers,
  updateCustomer,
} from "../controllers/customer.controller"

const customerRouter = Router()

customerRouter.post("/", createCustomer)
customerRouter.get("/", getCustomers)
customerRouter.get("/:id", getCustomerById)
customerRouter.delete("/:id", deleteCustomer)
customerRouter.put("/:id", updateCustomer)

export default customerRouter
