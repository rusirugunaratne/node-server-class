import { NextFunction, Request, Response } from "express"
import { CustomerModel } from "../models/Customer"
import { APIError } from "../errors/ApiError"

export const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customer = new CustomerModel(req.body)
    await customer.save()
    res.status(201).json(customer)
  } catch (error: any) {
    next(error)
  }
}

// get all customers
export const getCustomers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customers = await CustomerModel.find()
    res.status(200).json(customers)
  } catch (error: any) {
    next(error)
  }
}

export const getCustomerById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customer = await CustomerModel.findById(req.params.id)
    if (!customer) {
      throw new APIError(404, "Customer not found")
    }
    res.status(200).json(customer)
  } catch (error: any) {
    next(error)
  }
}

export const deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedCustomer = await CustomerModel.findByIdAndDelete(req.params.id)
    if (!deletedCustomer) {
      throw new APIError(404, "Customer not found")
    }
    res.status(200).json({ message: "Customer deleted" })
  } catch (error: any) {
    next(error)
  }
}

export const updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedCustomer 
    = await CustomerModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      // if true  -> return the updated customer
      // if false -> return the old customer
      runValidators: true,
      // run the validators before updating
    })
    if(!updateCustomer) {
        throw new APIError(404, "Customer not found")
    }
    res.status(200).json(updatedCustomer)
  } catch (error: any) {
    next(error)
  }
}
