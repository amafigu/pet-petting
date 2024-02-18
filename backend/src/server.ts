import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { AppDataSource } from './config/data-source'
import router from './routes'
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
router(app)

AppDataSource.initialize()
  .then(() => {
    console.log(
      `Database conected at ${process.env.DB_HOST}:${process.env.DB_PORT}`
    )
  })
  .catch((error) => {
    console.log(error)
  })

app.listen(process.env.PORT, () => {
  console.log(`Server running at PORT: ${process.env.PORT}`)
})
