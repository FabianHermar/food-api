import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import connectDB from './config/db.js'

const app = express()
const PORT = process.env.PORT || 3000

connectDB()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get((req, res) => {
  res.status(404).json({ message: 'Not Found' })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
