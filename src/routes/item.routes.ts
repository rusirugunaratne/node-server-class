import { Router } from "express"
import { createItem, deleteItem, getItemById, getItems, updateItem } from "../controllers/item.controller"

const itemRouter = Router()

itemRouter.post("/", createItem) // POST /api/items
itemRouter.get("/", getItems) // GET /api/items
itemRouter.get("/:id", getItemById) // GET /api/items/:id
itemRouter.put("/:id", updateItem) // PUT /api/items/:id
itemRouter.delete("/:id", deleteItem) // DELETE /api/items/:id

export default itemRouter
