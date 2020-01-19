import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import SolidNavBar from 'components/Navbars/SolidNavBar';
import AuthContext from '../context/auth/authContext';

import setAuthToken from '../utils/setAuthToken';
// reactstrap components
import {
  FormGroup,
  Container,
  Button,
  Row,
  Col
} from "reactstrap";

const AdminPage = (props) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [bookings, setBookings] = useState('');
  useEffect(() => {

    if (user.email !== 'patpatin@gmail.com') {
      props.history.push("/");
    }

    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
    }

    axios({
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      url: 'http://tattooz.ralphmorano.com/api/booking/allbookings'
    })
      .then(res => {
        if (res.data.length === 0) {

        } else {
          setBookings(res.data); console.log(bookings);
        }

      })
      .catch(err => console.log(err.message));

  }, []);

  const rejectBooking = id => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      setAuthToken(token);
    }

    axios({
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      url: 'http://tattooz.ralphmorano.com/api/booking/' + id + '/reject'
    })
      .then(res => {
        axios({
          method: 'GET',
          headers: { 'content-type': 'application/json' },
          url: 'http://tattooz.ralphmorano.com/api/booking/allbookings'
        })
          .then(res => {
            setBookings(res.data);
          })
          .catch(err => console.log(err.message));
      })
      .catch(err => console.log(err.message));
  }
  const approveBooking = id => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      setAuthToken(token);
    }

    axios({
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      url: 'http://tattooz.ralphmorano.com/api/booking/' + id + '/accept'
    })
      .then(res => {
        axios({
          method: 'GET',
          headers: { 'content-type': 'application/json' },
          url: 'http://tattooz.ralphmorano.com/api/booking/allbookings'
        })
          .then(res => {
            setBookings(res.data);
          })
          .catch(err => console.log(err.message));
      })
      .catch(err => console.log(err.message));
  }

  return (
    <>
      <SolidNavBar />
      <Container className="mt-5" >
        <div className="text-center section">
          <Col md="12">
            <div className="title mb-3">
              <h3>All Appointments</h3>
            </div>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Customer Name</th>
                        <th scope='col'>Mobile Number</th>
                        <th scope="col">Tattoo Artist</th>
                        <th scope="col">Type of Services</th>
                        <th scope="col">Time</th>
                        <th scope="col">Status</th>
                        <th scope='col' style={{ width: '300px' }}>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      {bookings === '' ? (<tr>
                        <td colSpan="8">No Appointment</td>
                      </tr>) :
                        bookings.map(booking => (
                          <tr>
                            <td>{booking.booking_date}</td>
                            <td>{booking.user.firstname + " " + booking.user.lastname}</td>
                            <td>{booking.user.mobilenumber}</td>
                            <td scope='row'>{booking.artist}</td>
                            <td>{booking.service}</td>
                            <td>{booking.time}</td>
                            <td>{booking.status}</td>
                            <td>
                              <Button className='btn-success mr-2'
                                onClick={() => approveBooking(booking._id)}
                              >
                                APPROVE
                              </Button>
                              <Button className='btn-danger mr-2'
                                onClick={() => rejectBooking(booking._id)}
                              >
                                REJECT
                              </Button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </FormGroup>
              </Col>

            </Row>
          </Col>
        </div>
      </Container>
    </>
  )
}

export default AdminPage;
