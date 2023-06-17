import axios from 'axios';

import {setUser} from '../reducers/userReducer';

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

export const updateUser = (user) => {
  return async dispatch => {
    try {
      const response = await axios
        .put('http://localhost:8000/api/auth/user', user,
          {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      dispatch(setUser(response.data));
      return response;
    } catch (e) {
      console.log(e);
      localStorage.removeItem('token');
    }
  };
};

export const uploadAvatar = (file) => {
  return async dispatch => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios
        .post('http://localhost:8000/api/files/avatar', formData,
          {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      dispatch(setUser(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};


export const deleteAvatar = () => {
  return async dispatch => {
    try {
      const response = await axios
        .delete('http://localhost:8000/api/files/avatar',
          {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      dispatch(setUser(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};