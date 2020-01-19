import React, { useContext } from 'react';
// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";
import AuthContext from 'context/auth/authContext';

function PromoOne() {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logoutUser, user } = authContext;
  return (
    <>
      <div className="section section-dark text-center">
        <br />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">GET 30% OFF YOUR FIRST INK</h2>
              <h6 className="description"><sub>*Term & Conditions Apply</sub></h6>
              <br />
              {isAuthenticated ? (
                <>
                  {user.email === 'patpatin@gmail.com' ? (

                    <Button className="btn-round" color="warning" href="/booking">BOOK A SESSION</Button>) :
                    (
                      <Button className="btn-round" color="warning" href="/booking">BOOK A SESSION</Button>)}
                </>
              ) : (
                  <>

                    <Button className="btn-round" color="warning" href="/router">BOOK A SESSION</Button>
                  </>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PromoOne;
