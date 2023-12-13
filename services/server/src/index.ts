const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();

const app = express();
const port = process.env.PORT;

// temporarily allow CORS requests until better solution is in place
app.use(cors())

app.get('/', (req, res) => {
  res.send('Service status: UP')
})
app.get('/channels', (req, res) => {
  res.send({total: 0, items: []})
})
app.get('/collections', (req, res) => {
  res.send({total: 0, items: []})
})

app.listen(port, () => {
  console.log(`[server]: server is running on port ${port}`)
})