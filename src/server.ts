import express from 'express'
import mongoose from 'mongoose'
import router from './routes'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(router)

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
