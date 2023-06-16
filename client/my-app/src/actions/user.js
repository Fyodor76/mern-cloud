import axios from 'axios';

import {setIsLoading, setUser} from '../reducers/userReducer';

export const registration = async (values) => {
  try {
    const {email, password, name, surname} = values;
    const response = await axios.post('http://localhost:8000/api/auth/registration', {
      email,
      password,
      name,
      surname,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const login = (values) => {
  return async dispatch => {
    try {
      const {email, password} = values;
      const response = await axios.post('http://localhost:8000/api/auth/login', {
        email,
        password,
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
      return response;
    } catch (e) {
      console.log(e);
    }
  };
};

export const auth = () => {
  return async dispatch => {
    try {
      const response = await axios
        .get('http://localhost:8000/api/auth/user',
          {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(e);
      localStorage.removeItem('token');
    }
  };
};