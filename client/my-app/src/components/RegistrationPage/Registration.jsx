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
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

import useSnackbar from '../../hooks/useSnackbarHook';
import picture from '../../images/space-background.jpg';
import {registration} from '../../actions/user';
import SnackbarComponent from '../Snackbar/Snackbar';

import * as Styled from './Registration.style';



export const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegSuccess, setIsRegSuccess] = useState(false);
  const { snackbarState, openSnackbar, closeSnackbar } = useSnackbar();


  // hook react hook form
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
    },
  });

  const handleShowPassword = (event) => {
    event.preventDefault();

    setShowPassword(!showPassword);
  };

  const onSubmit = async (values) => {
    const response = await registration(values);

    if (response) {
      setIsRegSuccess(true);
      openSnackbar('success', 'Registration is successful');
    } else {
      openSnackbar('error', 'Some error happened, please, try again');
    }
  };


  return (
    <Styled.RegistrationPage image={picture}>
      <Styled.RegistrationPageContainer>
        <Styled.BlockContent>
          {isRegSuccess ?
            <div style={{fontSize: '18px', textAlign: 'center'}}>
              <div style={{display: 'flex', gap: '6px', justifyContent: 'center'}}>
                <div>
                You have registered successfully
                </div>
                <div>
                  <CheckCircleOutlineOutlinedIcon style={{color: 'green'}}/>
                </div>
              </div>
              <div style={{paddingTop: '8px'}}>
                <Link to="/">
                   Go to the login page
                </Link>
              </div>
            </div>
            :
            <>
              <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Registration
              </Typography>
              <Box component="form"  noValidate onSubmit={handleSubmit(onSubmit)}>
                <Styled.MUITextField
                  margin="normal"
                  fullWidth
                  {...register('name')}
                  label="Name"
                  autoFocus
                />
                <Styled.MUITextField
                  margin="normal"
                  fullWidth
                  label="Surname"
                  {...register('surname')}
                />
                <Styled.MUITextField
                  margin="normal"
                  fullWidth
                  label="Email address"
                  {...register('email')}
                />
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    sx={{ padding: '0' }}
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
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
              Submit
                </Button>
              </Box>
            </>}
        </Styled.BlockContent>
      </Styled.RegistrationPageContainer>
      <SnackbarComponent snackbarState={snackbarState} closeSnackbar={closeSnackbar} />
    </Styled.RegistrationPage>
  );
};