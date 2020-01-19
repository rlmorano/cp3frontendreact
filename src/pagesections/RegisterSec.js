import React, { useState, useContext, useEffect } from 'react'
// import useScript from '../hooks/useScript';
// import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function RegisterSec(props) {

  const authContext = useContext(AuthContext);
  const { registerUser, errors, isAuthenticated } = authContext;

  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    mobilenumber: '',
    email: '',
    password: '',
    confirmpassword: '',
    errors: {}
  });

  const onChange = e => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const newUser = {
      firstname: state.firstname,
      lastname: state.lastname,
      mobilenumber: state.mobilenumber,
      email: state.email,
      password: state.password,
      confirmpassword: state.confirmpassword
    };
    registerUser(newUser, props.history);
  };

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (errors) {
      setState({ ...state, errors: errors });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, isAuthenticated, props.history]);

  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-reg/5.jpg") + ")"
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mt-0"
                    color="facebook"
                    href="https://www.facebook.com/"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="google"
                    href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="twitter"
                    href="https://twitter.com/"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form" onSubmit={onSubmit}>
                  <label>First Name</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="First Name" type="text" onChange={onChange} value={state.firstname} id="firstname" required value={state.firstname} />
                  </InputGroup>
                  <label>Last Name</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Last Name" type="text" onChange={onChange} value={state.lastname} id="lastname" required value={state.lastname} />
                  </InputGroup>
                  <label>Mobile Number</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Mobile Number" type="number" onChange={onChange} value={state.mobilenumber} id="mobilenumber" required value={state.mobilenumber} />
                  </InputGroup>
                  <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" onChange={onChange} value={state.email} id="email" required />
                    <span className="text-danger">{state.errors.email}</span>
                  </InputGroup>
                  <label>Password</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" id="password" required value={state.password} onChange={onChange} required value={state.password} />
                    <span className="text-danger">{state.errors.password}</span>

                  </InputGroup>
                  <label>Confirm Password</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Confirm Password" type="password" id="confirmpassword" required value={state.confirmpassword} onChange={onChange} />
                    <span className="text-danger">{state.errors.confirmpassword}</span>
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="warning"
                    type="submit"
                  >
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="warning"
                    onClick={e => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default RegisterSec;
