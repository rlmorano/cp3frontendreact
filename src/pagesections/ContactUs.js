import React from "react";

// reactstrap components
import { Container, Row, Col, Button, Form, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

function ContactUs() {
  return (
    <>
      <div className="section" id="contactus">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="text-center">Send us your thoughts.</h2>
              <Form className="contact-form">
                <Row>
                  <Col md="6">
                    <label>Name</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Name" type="text" />
                    </InputGroup>
                  </Col>
                  <Col md="6">
                    <label>Email</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="email" />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <label>Subject</label>
                    <InputGroup>
                      <Input placeholder="(ex. Quote Design, Feedback, Inquire Price)" type="text" />
                    </InputGroup>
                  </Col>
                </Row>
                <label>Message</label>
                <Input
                  placeholder="Tell us your thoughts..."
                  type="textarea"
                  rows="4"
                />
                <Row>
                  <Col className="ml-auto mr-auto" md="4">
                    <Button className="btn-fill" color="warning" size="lg">
                      Send Message
                      </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactUs;
