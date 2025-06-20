import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be positive"],
  },
})

const ItemModel = mongoose.model("Item", itemSchema)

export { ItemModel }
