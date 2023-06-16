import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const MUITextField = styled(TextField)({
  marginBottom: '24px',
  marginTop: '0px',
});

export const RegistrationPageContainer = styled('div')({
  height: '80%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const RegistrationPage = styled('div')((props) => ({
  backgroundImage: `url(${props.image})`,
  width: '100%',
  height: '100vh',
  backgroundSize: '30%',
}));


export const BlockContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '480px',
  margin: '0 auto',
  background: '#FFFFFF',
  boxShadow:
    '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
  borderRadius: '20px',
  padding: '40px',

  '& a': {
    textDecoration: 'none',
  },

  '@media (max-width: 450px)': {
    width: '280px',
  },
}));
