import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

import ProductRoutes from './routes/ProductRoutes'
import CategoryRoutes from './routes/CategoryRoutes'

const app = express()

app.use(express.json())
app.use('/products', ProductRoutes)
app.use('/categories', CategoryRoutes)

const { DATABASE_USERNAME, DATABASE_PASSWORD } = process.env

mongoose
  .connect(
    `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@nodejs-products-api.cp4grgl.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((data) => {
    console.info('The connection to the database was successful!')
  })
  .catch((err) => {
    console.info('Database connection failed: ', err)
  })

app.listen(3333, () => {
  console.info('API started!')
})
