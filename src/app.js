import express from 'express'

import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import mongoose from 'mongoose'

import routes from '@/routes'
import utils from '@/utils'
import models from '@/models'

const app = express()

dotenv.config('.env')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('jwtsecret', process.env.jwtsecret)

mongoose.connect('mongodb://localhost:27017/inssa',
  {
    useCreateIndex: true,
    useNewUrlParser: true
  },
  error => {
    if (error) console.error(utils.messages.dbError)
  })

app.use('/device', routes.device)

app.use((req, res, next) => {
  next(models.Error(404, utils.messages.noEndPoint))
})

app.use((response, req, res, next) => {
  res.status(response.status || 500).json({
    message: response.message
  })
})

export default app
