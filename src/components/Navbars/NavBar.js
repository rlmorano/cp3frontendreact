import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// nodejs library that concatenates strings
import classnames from 'classnames';
import { Link as Slink, animateScroll as scroll } from "react-scroll";

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

function NavBar() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logoutUser, user } = authContext;

  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames('fixed-top', navbarColor)}
      color-on-scroll='300'
      expand='lg'
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
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='services' tag={Slink} smooth={true} offset={-20}>
                SERVICES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='carousel' tag={Slink} smooth={true} offset={-20}>
                GALLERY
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='aboutus' tag={Slink} smooth={true} offset={-20}>
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='team' tag={Slink} smooth={true} offset={-20}>
                TEAM
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='contactus' tag={Slink} smooth={true} offset={-20}>
                CONTACT
              </NavLink>
            </NavItem>

            {isAuthenticated ? (
              <>
                {user.email === 'patpatin@gmail.com' ? (
                  <NavItem>
                    <NavLink to='/booking' tag={Link} >
                      BOOK A SESSION
                  </NavLink>
                  </NavItem>) :
                  (<NavItem>
                    <NavLink to='/booking' tag={Link} >
                      BOOK A SESSION
                    </NavLink>
                  </NavItem>)}
              </>
            ) : (
                <>
                  <NavItem>
                    <NavLink to='/router' tag={Link}>
                      BOOK A SESSION
                    </NavLink>
                  </NavItem>
                </>
              )}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My Account
              </DropdownToggle>
              <DropdownMenu right>
                {isAuthenticated ? (
                  <>
                    {user.email === 'patpatin@gmail.com' ? (<DropdownItem to='/admin' tag={Link}>
                      ADMIN
                </DropdownItem>) : (<DropdownItem to='/customer' tag={Link}>
                        BOOKINGS
                </DropdownItem>)}


                    <DropdownItem onClick={() => logoutUser()} tag={Link}>
                      LOGOUT
                </DropdownItem>
                  </>
                ) : (
                    <>
                      <DropdownItem to='/login' tag={Link}>
                        LOGIN
                    </DropdownItem>
                      <DropdownItem to='/register' tag={Link}>
                        REGISTER
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
export default NavBar;
