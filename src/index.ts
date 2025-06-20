import express, { Request, Response } from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/mongo"
import rootRouter from "./routes"
import { errorHandler } from "./middleware/errorHandler"

dotenv.config()
const app = express()
app.use(express.json()) 
// to give express the ability to handle jsons

const PORT = process.env.PORT

app.use("/api", rootRouter)
app.use(errorHandler)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
})
