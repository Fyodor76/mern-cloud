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


import picture from '../../images/space-background.jpg';

import * as Styled from './ForgetPassword.style';



export const ForgetPassword = () => {
  return (
    <Styled.ForgetPassPage image={picture}>
      <Styled.ForgetPassPageContainer>
        <Styled.BlockContent>
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Password recovery
          </Typography>
          <Box component="form"  noValidate>
            <Styled.MUITextField
              margin="normal"
              fullWidth
              label="Email address"
              autoFocus
            />
            <Button type="submit" fullWidth variant="contained">
              Submit
            </Button>
          </Box>
        </Styled.BlockContent>
      </Styled.ForgetPassPageContainer>
    </Styled.ForgetPassPage>
  );
};