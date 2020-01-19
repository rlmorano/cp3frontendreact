import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer bg-dark">
      <Container>
        <Row>
          <div className="credits mx-auto">
            <span className="copyright">
              © December 2019 -- Capstone 3 created with{" "}
              <i className="fa fa-heart heart" /> By: R.L.M @ Zuitt Coding Bootcamp</span>
          </div>
          <nav className="footer-nav">
            <ul>
            </ul>
          </nav>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
