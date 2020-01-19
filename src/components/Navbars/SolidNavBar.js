import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// nodejs library that concatenates strings
import classnames from 'classnames';
import AuthContext from 'context/auth/authContext';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';

function SolidNavBar() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logoutUser, user } = authContext;

  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  return (
    <Navbar
      className={classnames('fixed-top')}
      color-on-scroll='300'
      expand='lg'
      style={{ backgroundColor: "black" }}
    >
      <Container>
        <div className='navbar-translate'>
          <NavbarBrand
            data-placement='bottom'
            to='/'
            target='_blank'
            tag={Link}
          >
            <img src="img/logo.png" />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </button>
        </div>
        <Collapse
          className='justify-content-end'
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to='/home' tag={Link}>
                <h6 className="solid-nav">HOME</h6>
              </NavLink>
            </NavItem>
            {isAuthenticated ? (
              <>
                {user.email === 'patpatin@gmail.com' ? (
                  <NavItem>
                    <NavLink to='/booking' tag={Link} >
                      <h6 className="solid-nav">BOOK A SESSION</h6>
                    </NavLink>
                  </NavItem>) :
                  (<NavItem>
                    <NavLink to='/booking' tag={Link} >
                      <h6 className="solid-nav">BOOK A SESSION</h6>
                    </NavLink>
                  </NavItem>)}
              </>
            ) : (
                <>
                  <NavItem>
                    <NavLink to='/router' tag={Link}>
                      <h6 className="solid-nav">BOOK A SESSION</h6>
                    </NavLink>
                  </NavItem>
                </>
              )}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <h6 className="solid-nav">My Account</h6>
              </DropdownToggle>
              <DropdownMenu right>
                {isAuthenticated ? (
                  <>
                    {user.email === 'patpatin@gmail.com' ? (<DropdownItem to='/admin' tag={Link}>
                      <h6 className="solid-nav">ADMIN</h6>
                    </DropdownItem>) : (<DropdownItem to='/customer' tag={Link}>
                      <h6 className="solid-nav">BOOKINGS</h6>
                    </DropdownItem>)}


                    <DropdownItem onClick={() => logoutUser()} tag={Link}>
                      <h6 className="solid-nav">LOGOUT</h6>
                    </DropdownItem>
                  </>
                ) : (
                    <>
                      <DropdownItem to='/login' tag={Link}>
                        <h6 className="solid-nav">LOGIN</h6>
                      </DropdownItem>
                      <DropdownItem to='/register' tag={Link}>
                        <h6 className="solid-nav">REGISTER</h6>
                      </DropdownItem>
                    </>
                  )}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
export default SolidNavBar;
