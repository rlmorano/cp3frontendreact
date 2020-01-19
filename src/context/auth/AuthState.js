import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { SET_CURRENT_USER, USER_LOADING, GET_ERRORS } from '../types';

const AuthState = props => {
  const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    errors: {}
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registerUser = (userData, history) => {
    axios
      .post('http://tattooz.ralphmorano.com/api/users/register', userData)
      .then(res => history.push('/login')) // re-direct to login on successful register
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      }
      );
  };

  const loginUser = (userData, history) => {
    console.log('login');
    axios({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: userData,
      url: 'http://tattooz.ralphmorano.com/api/users/login',
    }).then(res => {
      history.push('/')
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));

      localStorage.setItem('isLoggedIn', true);
    })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

  const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };

  const setUserLoading = () => {
    return {
      type: USER_LOADING
    };
  };

  const logoutUser = () => {
    window.location.href = './';

    localStorage.removeItem('isLoggedIn');
    // Remove token from local storage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };

  const updateProfile = name => {
    axios
      .put('/api/account/update', name)
      .then(res => {
        // Save to localStorage
        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  };

  const changePassword = passwords => {
    axios
      .put('/api/account/changepassword', passwords)
      .then(res => {
        if (res.data.success) {
          logoutUser();
        }
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  };

  useEffect(() => {
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      // Set user and isAuthenticated
      dispatch(setCurrentUser(decoded));
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        dispatch(logoutUser());
        // Redirect to login
        window.location.href = './login';
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        errors: state.errors,
        registerUser,
        loginUser,
        setUserLoading,
        logoutUser,
        updateProfile,
        changePassword
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
