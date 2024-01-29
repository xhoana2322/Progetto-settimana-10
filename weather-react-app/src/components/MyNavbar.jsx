import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MyNavbar() {
  return (
    <>
    <Navbar expand="lg" bg="light" className="bg-body-tertiary mb-4 p-3">
            <img
              alt=""
              src={'https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png'}
              width="35"
              height="35"
              className="d-inline-block align-top rounded mx-2"
            />{' '} 
            <Navbar.Brand href="#home">Weather app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to={'/'} className='text-decoration-none text-black'>Home</Link>
                <Link to={'/detail'} className='text-decoration-none text-black mx-2'>Detail</Link>
            </Nav>
            <Navbar.Text className='me-2'>
           Welcome back: <a href="#login" >onorevole Nullazzo</a>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}
