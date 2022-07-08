import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
require('dotenv/config')

const app = express()

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

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello API!')
})

app.listen(3333, () => {
  console.info('API started!')
})
