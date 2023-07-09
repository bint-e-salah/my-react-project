import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import Cart from './Cart'
// import { useContext } from 'react';
// import { GlobalContext } from '../main';


function Navigation() {

    // const {contextData} = useContext(GlobalContext)


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='navbar-brand' to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/products">Products</Link>

                    </Nav>

                    <div className='me-5 d-flex align-items-center'>   <FaUserCircle size={25} />  <span className='ms-2'>
                    {/* {contextData.username} */}
                    </span></div>
                    <Cart />


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;