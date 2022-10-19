// bits commented out are copied from team-dev-server that I'm unsure what they do

import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import userRouter from './routes/user.js'
import shopRouter from './routes/shop.js'
import itemRouter from './routes/item.js'
import locationRouter from './routes/location.js'
import authRouter from './routes/auth.js'

const app = express()
// app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.use('/user', userRouter)
app.use('/users', userRouter)
app.use('/shop', shopRouter)
app.use('/shops', shopRouter)
app.use('/item', itemRouter)
app.use('/items', itemRouter)
app.use('/location', locationRouter)
app.use('/', authRouter)

// app.get('*', (req, res) => {
//     res.status(404).json({
//       status: 'fail',
//       data: {
//         resource: 'Not found'
//       }
//     })
//   })

// app.use((error, req, res, next) => {
//     console.error(error)
  
//     if (error.code === 'P2025') {
//       return sendDataResponse(res, 404, 'Record does not exist')
//     }
  
//     return sendDataResponse(res, 500)
// })

const port = process.env.PORT || 4040

app.listen(port, () => {
  console.log(`\n Server is running on port ${port}\n`)
})