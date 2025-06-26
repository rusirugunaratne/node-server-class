import { Request, Response, NextFunction } from "express"
import { ItemModel } from "../models/Item"
import { APIError } from "../errors/ApiError"

// CREATE
export const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = new ItemModel(req.body)
    await item.save()
    res.status(201).json(item)
  } catch (err) {
    next(err)
  }
}

// READ ALL
export const getItems = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await ItemModel.find()
    res.status(200).json(items)
  } catch (err) {
    next(err)
  }
}

// READ ONE
export const getItemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await ItemModel.findById(req.params.id)
    if (!item) {
      throw new APIError(404, "Item not found")
    }
    res.status(200).json(item)
  } catch (err) {
    next(err)
  }
}

// UPDATE
export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedItem = await ItemModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!updatedItem) {
      throw new APIError(404, "Item not found")
    }
    res.status(200).json(updatedItem)
  } catch (err) {
    next(err)
  }
}

// DELETE
export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedItem = await ItemModel.findByIdAndDelete(req.params.id)
    if (!deletedItem) {
      throw new APIError(404, "Item not found")
    }
    res.status(200).json({ message: "Item deleted successfully" })
  } catch (err) {
    next(err)
  }
}
