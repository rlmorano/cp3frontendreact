import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";


function LogInRegisterRouter() {
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
          backgroundImage: "url(" + require("assets/img/background/2.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <strong><b>User Access</b></strong>
            <br />
            <Button className="btn-round mr-4" color="neutral" type="button" outline href="/login">
              Log In
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline href="/register">
              Register
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LogInRegisterRouter;