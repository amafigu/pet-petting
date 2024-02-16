import express from "express"

const app = express()
const PORT = 3001

app.get("/", (req, res) => {
  res.send("running")
})

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`)
})
