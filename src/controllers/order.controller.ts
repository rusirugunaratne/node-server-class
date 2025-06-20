import { Request, Response, NextFunction } from "express"
import { OrderModel } from "../models/Order"
import { APIError } from "../error/ApiError"

// CREATE
export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = new OrderModel(req.body)
    await order.save()
    res.status(201).json(order)
  } catch (err) {
    next(err)
  }
}

// READ ALL
export const getOrders = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    // Optionally populate customerId and items.itemId for more detailed info
    const orders = await OrderModel.find()
    res.status(200).json(orders)
  } catch (err) {
    next(err)
  }
}

// READ ONE
export const getOrderById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await OrderModel.findById(req.params.id)
    if (!order) {
      throw new APIError(404, "Order not found")
    }
    res.status(200).json(order)
  } catch (err) {
    next(err)
  }
}

// UPDATE
export const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!updatedOrder) {
      throw new APIError(404, "Order not found")
    }
    res.status(200).json(updatedOrder)
  } catch (err) {
    next(err)
  }
}

// DELETE
export const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedOrder = await OrderModel.findByIdAndDelete(req.params.id)
    if (!deletedOrder) {
      throw new APIError(404, "Order not found")
    }
    res.status(200).json({ message: "Order deleted successfully" })
  } catch (err) {
    next(err)
  }
}
