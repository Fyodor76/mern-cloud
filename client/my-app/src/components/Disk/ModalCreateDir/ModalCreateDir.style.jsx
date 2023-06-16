import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

export const Container = styled('div')({
  position: 'absolute',
  fontSize: '22px',
  left: '50%',
  top: '50%',
  display: 'block',
  width: '500px',
  borderRadius: '10px',
  height: '240px',
  background: 'white',
  transform: 'translate(-50%, -50%)',
});

export const Content = styled('div')({
  width: '90%',
  margin: '20px auto',
});

export const CustomedBlock = styled('div')({
  marginTop: '30px',
});

export const ButtonConfirm = styled(({children, ...props}) => (
  <Button sx={{
    width: '164px',
    height: '36px',
    background: '#0D34BE',
    color: 'white',
    boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), ' +
      '0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: '4px',
    float: 'right',
  }}
  {...props}>{children}</Button>
))(() => ({}));


