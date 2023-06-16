import {styled} from '@mui/material/styles';

export const Container = styled('div')({
  width: '400px',
  height: '300px',
  fontSize: '22px',
  textAlign: 'center',
  background: 'white',
  borderRadius: '10px',
  overflowY: 'scroll',
  border: '1px solid lightgray',
  position: 'absolute',
  right: '0',
  bottom: '0',
});

export const Header = styled('div')({
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
});