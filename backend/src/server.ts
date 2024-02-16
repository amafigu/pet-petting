import dotenv from 'dotenv'
import express from 'express'
import { AppDataSource } from './config/data-source'
import router from './routes'
dotenv.config()
const app = express()
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
