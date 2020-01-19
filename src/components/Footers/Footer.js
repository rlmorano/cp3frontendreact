import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer-custom">
      <Container>
        <Row>
          <div className="credits mx-auto footer-custom mt-3">
            <span className="copyright">
              © December 2019 -- Capstone 3 created with{" "}
              <i className="fa fa-heart heart" /> By: R.L.M @ Zuitt Coding Bootcamp</span>
            <br />
            <br />
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
