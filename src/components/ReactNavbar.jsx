import { Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ButtonComponent} from "./Button.jsx"
function ReactNavbar() {
  //check line 17 for First item in navbar :D
  return (
      <Navbar bg="light" variant="light">
          <Link className="ml-2" to="/"> 
          <img
            src={process.env.PUBLIC_URL + '/LogoShop.png'}
            alt="Auto BOOST"
          />
          </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="/"></Link>
                </Nav>
                <Nav>
                  <Link to="/cart">
                    <ButtonComponent>
                        <i className="fas fa-shopping-cart"></i> cart
                    </ButtonComponent>
                  </Link>
                </Nav>
              </Navbar.Collapse>
      </Navbar>
  );
}

export default ReactNavbar;
