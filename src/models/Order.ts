import mongoose, { Schema } from "mongoose"

// Define the type for an item in the order
type OrderItem = {
  itemId: mongoose.Types.ObjectId // Reference to Item model
  itemName: string
  price: number
  quantity: number
  subtotal: number
}

// Define the main Order type
type Order = {
  customerId: mongoose.Types.ObjectId // Reference to Customer model
  customerName: string
  items: OrderItem[]
  total: number
  date: Date
  status: "pending" | "completed" | "cancelled" | string
}

// Define the schema for items in the order
const orderItemSchema = new Schema<OrderItem>(
  {
    itemId: { type: Schema.Types.ObjectId, ref: "Item", required: true },
    itemName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
    subtotal: { type: Number, required: true },
  },
  { _id: false }
)

// Define the main order schema
const orderSchema = new Schema<Order>(
  {
    customerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
    customerName: { type: String, required: true },
    items: { type: [orderItemSchema], required: true },
    total: { type: Number, required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" },
  },
  { timestamps: true }
)

export const OrderModel = mongoose.model<Order>("Order", orderSchema)
