import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'express-async-errors'
import routes from './routes/Index'
import * as config from './utils/Config'
import middleware from './utils/Middleware'

const app: Application = express()

app.use(cors())

app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.use(middleware.requestLogger)

app.use(routes)

app.listen(config.PORT, () => {
    console.log(`Listening on port: ${config.PORT}`)
})
