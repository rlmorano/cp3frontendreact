import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SolidNavBar from 'components/Navbars/SolidNavBar';
import setAuthToken from '../utils/setAuthToken';
// reactstrap components
import {
  FormGroup,
  Container,
  Row,
  Button,
  Col
} from 'reactstrap';

const CustomerPage = props => {
  const [bookings, setBookings] = useState('');
  useEffect(() => {
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
    }

    axios({
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      url: 'http://tattooz.ralphmorano.com/api/booking/mybookings'
    })
      .then(res => {
        if (res.data.length === 0) {

        } else {
          setBookings(res.data);
        }

      })
      .catch(err => console.log(err.message));
  }, []);

  const deleteBooking = id => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      setAuthToken(token);
    }

    axios({
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      url: 'http://tattooz.ralphmorano.com/api/booking/' + id
    })
      .then(res => {
        axios({
          method: 'GET',
          headers: { 'content-type': 'application/json' },
          url: 'http://tattooz.ralphmorano.com/api/booking/mybookings'
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
        <div className='text-center section'>
          <Col md='12'>
            <div className='title mb-3'>
              <h3>Current Appointments</h3>
            </div>
            <Row>
              <Col sm='12'>
                <FormGroup>
                  <table className='table table-bordered'>

                    <thead>
                      <tr>
                        <th scope='col'>Date</th>
                        <th scope='col'>Tattoo Artist</th>
                        <th scope='col'>Type of Services</th>
                        <th scope='col'>Time</th>
                        <th scope='col'>Status</th>
                        <th scope='col' style={{ width: '300px' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings === '' ? (<tr>
                        <td colSpan="6">No</td>
                      </tr>) :
                        bookings.map(booking => (
                          <tr>
                            <td>{booking.booking_date}</td>
                            <td scope='row'>{booking.artist}</td>
                            <td>{booking.service}</td>
                            <td>{booking.time}</td>
                            <td>{booking.status}</td>
                            <td>
                              <Button className='btn-danger mr-2'
                                onClick={() => deleteBooking(booking._id)}
                              >
                                DELETE
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
  );
};

export default CustomerPage;
