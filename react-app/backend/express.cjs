const express = require('express')
const cors = require('cors')
const app = express()
const port = 3333

app.use(express.json())
app.use(cors())

app.get('/express', (req, res) => {
  return res.status(200).json({message: "yeey"})
})

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
