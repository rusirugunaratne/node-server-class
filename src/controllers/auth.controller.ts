import { Request, Response, NextFunction } from "express"
import { UserModel } from "../models/User"

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = new UserModel(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

export const getAllUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserModel.find().select("-password") // exclude password
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}
