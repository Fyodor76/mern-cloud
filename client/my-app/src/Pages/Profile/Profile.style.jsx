import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const Profile = styled('div')({
  width: '80%',
  position: 'relative',
  margin: '50px auto',
  display: 'flex',
  gap: '100px',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: '10px',
  textAlign: 'center',
  padding: '100px 40px 60px 40px',
});

export const BlockAvatar = styled('div')({
  marginLeft: '100px',
});

export const BlockUserInfo = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
});

export const Avatar = styled('img')({
  borderRadius: '50%',
  width: '370px',
  height: '370px',
});

export const ButtonToMainPage = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '30px',
});

export const ButtonUpload = styled(({children, ...props}) => (
  <Button sx={{
    textTransform: 'none',
    width: '290px',
    display: 'block',
    fontSize: '18px',
    margin: '20px auto',
  }}
  {...props}>{children}</Button>
))(() => ({}));

export const ButtonSaveChanges = styled(({children, ...props}) => (
  <Button sx={{
    position: 'absolute',
    fontSize: '18px',
    textTransform: 'none',
    bottom: '-15px',
    left: 'calc(50% - 150px)',
    width: '400px',
  }}
  {...props}>{children}</Button>
))(() => ({}));

export const ButtonDelete = styled(({children, ...props}) => (
  <Button sx={{
    textTransform: 'none',
    width: '290px',
    display: 'block',
    fontSize: '18px',
    margin: '0 auto',
  }}
  {...props}>{children}</Button>
))(() => ({}));

 

export const CustomedTextField = styled(TextField)({
  width: '70%',
});
