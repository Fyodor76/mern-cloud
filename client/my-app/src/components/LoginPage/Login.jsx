import {useState} from 'react';
import {
  InputLabel,
  OutlinedInput,
  FormControl,
  IconButton,
  InputAdornment,
} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Visibility, VisibilityOff } from '@mui/icons-material';


import {Link, Navigate} from 'react-router-dom';

import {useForm} from 'react-hook-form';

import {useDispatch, useSelector} from 'react-redux';

import picture from '../../images/space-background.jpg';

import {login} from '../../actions/user';

import SnackbarComponent from '../Snackbar/Snackbar';
import useSnackbar from '../../hooks/useSnackbarHook';

import * as Styled from './LoginPage.style';



export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { snackbarState, openSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth);


  const handleShowPassword = (event) => {
    event.preventDefault();

    setShowPassword(!showPassword);
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      surname: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (values) => {
    const response = dispatch(login(values));
    if (!response?.data) {
      openSnackbar('error', 'Invalid login or password');
    }
  };


  return (
    <>
      {isAuth && <Navigate to="/main-page" />}
      <Styled.LoginPage image={picture}>
        <Styled.LoginPageContainer>
          <Styled.BlockContent>
            <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
              Enter cloud storage
            </Typography>
            <Box component="form"  noValidate onSubmit={handleSubmit(onSubmit)}>
              <Styled.MUITextField
                margin="normal"
                fullWidth
                {...register('email')}
                label="Email address"
                autoFocus
              />
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  sx={{ padding: '0' }}
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  endAdornment={
                    <InputAdornment
                      position="end"
                      sx={{
                        position: 'absolute',
                        right: '3%',
                      }}
                    >
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={handleShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
                log in
              </Button>
            </Box>
            <Styled.BlockRegistrationForgetPassword>
              <div>
                <Link to="/forget-password">Forget password?</Link>
              </div>
              <div>
                <Link to="/registration">Don't you have account?</Link>
              </div>
            </Styled.BlockRegistrationForgetPassword>
          </Styled.BlockContent>
        </Styled.LoginPageContainer>
        <SnackbarComponent snackbarState={snackbarState} closeSnackbar={closeSnackbar} />
      </Styled.LoginPage>
    </>
  );
};