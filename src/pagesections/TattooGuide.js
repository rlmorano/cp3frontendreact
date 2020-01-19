import React from "react";

// reactstrap components
import { Container, Row, Col, } from "reactstrap";

function Services() {
  return (
    <>
      <div className="section text-center section-dark" id="service">
        <Container>
          <Row>
            <Col lg="12">
              <h4 className="tattoo-guide"><u>AVOID MAKING ANY RASH DECISIONS.</u></h4>
              <br />
              <p className="tattoo-guide-font">If you’re getting a tattoo because you’re drunk or high, rebellious or your friends are goading you, then you’re getting a tattoo for all the wrong reasons and the choice you make is likely to reflect this lack of forethought.</p>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h4 className="tattoo-guide"><u>CONSIDER WHERE YOU WANT THE TATTOO.</u></h4>
              <br />
              <p className="tattoo-guide-font">This will have some influence on the design, especially if it’s an intimate design. For any parts of your body that you show regularly (and that is a lot of body if you’re a bikini or board shorts wearer), then that doesn’t leave much space for intimate tattoos that you don’t want your grandmother seeing.</p>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h4 className="tattoo-guide"><u>SPEND SOME TIME REFINING THE DESIGN AND CHOOSING ONE THAT HAS MEANING FOR YOU.</u></h4>
              <br />
              <p className="tattoo-guide-font">Do some research first. Head over to the library or visit a Tattooz branch near you and look through our tattoo design books.</p>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h4 className="tattoo-guide"><u>TRY A REHEARSAL RUN OF THE TATTOO.</u></h4>
              <br />
              <p className="tattoo-guide-font">Use henna to get a temporary version of the design. You won’t be able to see different colors, or certain looks, but you will be able to judge the feeling of a tattoo. Henna lasts a week to a month.</p>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h4 className="tattoo-guide"><u>THINK BEFORE YOU INK.</u></h4>
              <br />
              <p className="tattoo-guide-font">Think about it a lot. When you are certain, wait some more just to make sure. Ultimately, a well chosen tattoo design can be a thing of beauty and a confidence enhancement. A poorly chosen one done on a whim can leave you unhappy for all time.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Services;
