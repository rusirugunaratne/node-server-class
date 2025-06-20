import { Request, Response, NextFunction } from "express"
import { CustomerModel } from "../models/Customer"
import { APIError } from "../error/ApiError"

// CREATE
export const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customer = new CustomerModel(req.body)
    await customer.save()
    res.status(201).json(customer)
  } catch (err) {
    next(err)
  }
}

// READ ALL
export const getCustomers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const customers = await CustomerModel.find()
    res.status(200).json(customers)
  } catch (err) {
    next(err)
  }
}

// READ ONE
export const getCustomerById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customer = await CustomerModel.findById(req.params.id)
    if (!customer) {
      throw new APIError(404, "Customer not found")
    }
    res.status(200).json(customer)
  } catch (err) {
    next(err)
  }
}

// UPDATE
export const updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedCustomer = await CustomerModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!updatedCustomer) {
      throw new APIError(404, "Customer not found")
    }
    res.status(200).json(updatedCustomer)
  } catch (err) {
    next(err)
  }
}

// DELETE
export const deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedCustomer = await CustomerModel.findByIdAndDelete(req.params.id)
    if (!deletedCustomer) {
      throw new APIError(404, "Customer not found")
    }
    res.status(200).json({ message: "Customer deleted successfully" })
  } catch (err) {
    next(err)
  }
}
