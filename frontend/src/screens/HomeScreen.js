import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/OLD Product'
import {listProducts} from '../actions/productActions'


const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state =>state.productList)
  const {loading, error, products}= productList

  useEffect(() => {
    dispatch(listProducts())
    

  }, [dispatch])


  return (
    <>
        <h1>Latest Products</h1>
        {loading ? (<Loader/>) : error ?(<Message variant='danger'>{error}</Message>) :(
        <Row>
            {products.map(product =>(
                <Col key={product._id} ms={12} md={6} lg={4}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
         )}
        
    </>
  )
}

export default HomeScreen