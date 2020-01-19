import React from "react";

// reactstrap components
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardFooter } from "reactstrap";

function Team() {
  return (
    <>
      <div className="section section-dark text-center" id="team">
        <Container>
          <h2 className="title">Our Team</h2>
          <Row>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/team/1.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">DADO DAVID</CardTitle>
                      <h6 className="card-category">Tattoo Design Expert</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    “Seeing those scars, those marks that he most definitely had never asked for, I had to wonder how he felt about being permanently marked up”
                    </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/team/2.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">ANNIE CONCEPCION</CardTitle>
                      <h6 className="card-category">Tattoo Expert</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    “I am a canvas of my experiences, my story is etched in lines and shading, and you can read it on my arms, my legs, my shoulders, and my stomach.”
                    </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/team/3.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">XAVIR FLINTOF</CardTitle>
                      <h6 className="card-category">Piercing & Body Modification Expert</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    “I look at my body as an extension of the music. My body is a canvas, and with my tattoos, I want them to be a direct reflection of my thoughts.”
                    </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Team;
