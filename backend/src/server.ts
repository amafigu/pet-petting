import dotenv from 'dotenv'
import express from 'express'
import { AppDataSource } from './config/data-source'

dotenv.config()
const app = express()

app.get('/', (req, res) => {
  res.send('running')
})

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
