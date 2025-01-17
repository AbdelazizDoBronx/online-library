import express from 'express'
import authRoutes from './Routes/auth.js'

const app = express()




app.use('/api/auth',authRoutes)



app.listen(3001,()=>console.log('server is up and runing'))