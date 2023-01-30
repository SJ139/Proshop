import React from 'react'
import {Navbar, Nav, Container, NavLink} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>

    <Nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <Container>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/home">Proshop</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div> 
        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link to="/cart">Cart</Link>
                </li>
                 <li class="nav-item">
                    <Link class="nav-link" to="/login">SignIn</Link>
                </li>
    
        </ul>
        </div>
        </Container>
    </Nav>
    </header>
  )
}

export default Header;