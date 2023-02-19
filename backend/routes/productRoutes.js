// ==**Backend/Routes/productRoutes.js**==

import express from "express";
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from "../models/productModel.js";
import mongoose from "mongoose";
// @desc fetch all products.
// @route GET /api/products.
// @access Public Route.

router.get('/',asyncHandler(async (req,res) =>{
    const products = await Product.find({})
    res.json(products)

}))

// @desc fetch single product.
// @route GET /api/products/:id
// @access Public Route.

router.get('/:id', asyncHandler(async (req,res) =>{
    
    const id = req.params.id
    console.log(id)
    const product = await Product.findById(mongoose.Types.ObjectId(id))
    console.log(product)
    if(product){
        res.json(product)
    } else{
        res.status(404)
        throw new error('Product Not Found')
    }
}))

export default router