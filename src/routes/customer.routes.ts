import { Router } from "express"
import {
  createCustomer,
  deleteCustomer,
  getCustomerById,
  getCustomers,
  updateCustomer,
} from "../controllers/customer.controller"

const customerRouter = Router()

customerRouter.post("/", createCustomer) // POST /api/customers
customerRouter.get("/", getCustomers) // GET /api/customers
customerRouter.get("/:id", getCustomerById) // GET /api/customers/:id
customerRouter.put("/:id", updateCustomer) // PUT /api/customers/:id
customerRouter.delete("/:id", deleteCustomer) // DELETE /api/customers/:id

export default customerRouter
