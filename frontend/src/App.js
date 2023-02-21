import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Routes } from 'react-router-dom';
import CartScreen from './screens/CartScreen';


const App = () => {
  return (
    <Router>
  
      <Header />

      <Routes>
        <Route path= '/' element={<HomeScreen/>} />
        <Route path= '/product/:id' element={<ProductScreen />} />
        <Route path= '/cart/:id?' element={<CartScreen />} />
      </Routes>
        
      <Footer />
    
    
    </Router>
  )
  }

export default App;
