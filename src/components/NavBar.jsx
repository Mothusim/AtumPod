import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useAuth } from '../Auth';
import '../App.css';

const navLinkStyling = {
  color: 'white',
  fontSize: '1em',
  padding: 10,
};

const navBrandStyling = {
  color: 'white',
  fontWeight: 'bold',
  fontSize: '2em',
};

export default function NavBar() {

  const auth = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {

    auth.logout();
    navigate('/login');

  };

  return (

    <>
    
      <Navbar className='navbar' style={{padding:  '0 3%'}} expand="lg" sticky="top" collapseOnSelect>

        <Navbar.Brand style={navBrandStyling}>

          <img src="src/assets/react.svg" alt="logo" height="40px" width="40px" />
          AtumPod

        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse style={{ padding: '0 0 0 0' }}>

          <Nav>

            <Link to={'download'} style={navLinkStyling}>

              Get The App

            </Link>

            <Link to={'/'} style={navLinkStyling}>

              Home

            </Link>

            {auth.user?

              <Link to={'user'} style={navLinkStyling}>

                My stuff

              </Link>
            : null

            }

            <Link to={'signin'} style={navLinkStyling} onClick={handleLogout}>

              {auth.user? 'Logout': 'Login'}

            </Link>

            {!auth.user?

              <Link to={'allshows'} style={navLinkStyling}>

                All Shows

              </Link>
              
            : null

            }

            <Link to={'about'} style={navLinkStyling}>

              About

            </Link>

          </Nav>

        </Navbar.Collapse>

      </Navbar>
      
    </>

  );

}
