import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import pets from '../src/routes/pets'
import { AppDataSource } from './config/data-source'

const envFile =
  process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })
const app = express()
app.use(
  cors({
    origin: process.env.API_URL
  })
)
app.use(express.json())
app.use('/pets', pets)

AppDataSource.initialize()
  .then(() => {
    console.log(
      `Database conected at ${process.env.DB_HOST}:${process.env.DB_PORT}`
    )
  })
  .catch((error) => {
    console.log(error)
  })

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at PORT: ${process.env.PORT}`)
})
