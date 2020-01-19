import React, { useState, useContext } from 'react';
import ReactDatetime from 'react-datetime';
import AuthContext from 'context/auth/authContext';
import SolidNavBar from 'components/Navbars/SolidNavBar';
import axios from 'axios';
// reactstrap components
import {
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Button,
  Row,
  Col
} from 'reactstrap';

const BookingPage = props => {
  const [state, setState] = useState({
    booking_date: '',
    artist: '',
    service: '',
    time: ''
  });

  const onChange = e => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const onDateChange = date => {
    setState({ ...state, booking_date: date.format('MM/DD/YYYY') });
  };

  const onSubmit = e => {
    e.preventDefault();

    const newBooking = {
      booking_date: state.booking_date,
      artist: state.artist,
      service: state.service,
      time: state.time
    };

    axios({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: newBooking,
      url: 'http://tattooz.ralphmorano.com/api/booking/new'
    })
      .then(res => {
        props.history.push('/customer');
      })
      .catch(err => console.log(err.message));
  };


  const authContext = useContext(AuthContext);

  const { isAuthenticated, logoutUser, user } = authContext;
  return (
    <>
      <SolidNavBar />
      <Container className="mt-5">
        <div className='text-center section'>
          <Col md='12'>
            <div className='title mb-3'>
              <h3>Book An Appointment</h3>
            </div>
            <Row>
              <Col sm='12'>
                <Form onSubmit={onSubmit}>
                  <FormGroup>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th scope='col'>Date</th>
                          <th scope='col'>Tattoo Artist</th>
                          <th scope='col'>Type of Services</th>
                          <th scope='col'>Time</th>
                          <th scope='col'>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <InputGroup className='date'>
                              <ReactDatetime
                                inputProps={{
                                  placeholder: 'Choose a Date'
                                }}
                                onChange={onDateChange}
                              />
                              <InputGroupAddon addonType='append'>
                                <InputGroupText>
                                  <span className='glyphicon glyphicon-calendar'>
                                    <i
                                      aria-hidden={true}
                                      className='fa fa-calendar'
                                    />
                                  </span>
                                </InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </td>
                          <td scope='row'>
                            <Input
                              type='select'
                              name='artist'
                              onChange={onChange}
                              value={state.artist}
                              id='artist'
                            >
                              <option value='' disabled>Choose a Artist</option>
                              <option value='Dado David'>Dado David</option>
                              <option value='Anne Concepcion'>
                                Anne Concepcion
                              </option>
                              <option value='Xavir Flintof'>
                                Xavir Flintof
                              </option>
                            </Input>
                          </td>
                          <td>
                            <Input
                              type='select'
                              name='service'
                              onChange={onChange}
                              value={state.service}
                              id='service'
                            >
                              <option value='' disabled>Choose a Service</option>
                              <option value='Modern Tattoo'>
                                Modern Tattoo
                              </option>
                              <option value='Old School Tattoo'>
                                Old School Tattoo
                              </option>
                              <option value='Tribal Tattoo'>
                                Tribal Tattoo
                              </option>
                              <option value='Piercing'>Piercing</option>
                            </Input>
                          </td>
                          <td>
                            <Input
                              type='select'
                              name='time'
                              onChange={onChange}
                              value={state.time}
                              id='time'
                            >
                              <option value='' disabled>Choose a Time</option>
                              <option value='1:00-2:00PM'>1:00-2:00PM</option>
                              <option value='2:00-3:00PM'>2:00-3:00PM</option>
                              <option value='3:00-4:00PM'>3:00-4:00PM</option>
                              <option value='4:00-5:00PM'>4:00-5:00PM</option>
                            </Input>
                          </td>
                          <td>
                            {isAuthenticated ? (
                              <>
                                {user.email === 'patpatin@gmail.com' ? (

                                  <Button color="warning">BOOK A SESSION</Button>) :
                                  (
                                    <Button color="warning">BOOK A SESSION</Button>)}
                              </>
                            ) : (
                                <>

                                  <Button color="warning" href="/router">BOOK A SESSION</Button>
                                </>
                              )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Col>
        </div>
      </Container>
    </>
  );
};

export default BookingPage;
