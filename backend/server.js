
import express from 'express'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import productRoutes from './routes/productRoutes.js'
dotenv.config()

connectDB()

const app=express()
app.get('/', (req,res) =>{
    res.send('API is Running....!')
})

app.use('/api/products', productRoutes)
const PORT = process.env.PORT || 5000 

app.use(notFound)

app.use(errorHandler)


app.listen
    (PORT,
    console.log(`server running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
