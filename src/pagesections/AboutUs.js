import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function AboutUs() {
  return (
    <>
      <div className="section text-center" id="aboutus">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">How We Started</h2>
              <h5 className="description">
                In 2008, one of our founders, Ron Poe, came up with the idea of establishing a tattoo business in Manila. There’s no better place to start but in one of the busiest districts in the metro, Makati City. Together with his trusted friend and reliable business partner, Joel Poniente, who eventually handled the business development side of the shop, they established Tattooz. The first Tattooz shop in Polaris Street, Makati still remains one of the most in-demand tattoo parlors in the country.
                </h5>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    </>
  );
}

export default AboutUs;
