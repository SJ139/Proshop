// ==**Backend/Routes/productRoutes.js**==

import express from "express";
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from "../models/productModel.js";

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

router.get('/:id',asyncHandler(async (req,res) =>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    } else{
        res.status(404)
        throw new error('Product Not Found')
    }
}))

export default router