import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

function LandingPage() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/background/1.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h3>Want a to different   <strong><b>TATTOO EXP</b></strong>  erience?</h3>
            <br />
            <Button className="btn-round" color="neutral" type="button" outline href="/home">
              Please Come In
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
