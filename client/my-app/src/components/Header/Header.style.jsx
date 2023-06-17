import {styled} from '@mui/material/styles';

export const Header = styled('div')({
  backgroundColor: 'white',
  width: '100%',
  height: '40px',
  position: 'relative',
});

export const Container = styled('div')({
  display: 'flex',
  gap: '30px',
  position: 'absolute',
  right: '10px',
});

export const BlockAvatar = styled('div')({
  marginTop: '2px',
  position: 'relative',
});

export const ProfileActions = styled('div')({
  position: 'absolute',
  zIndex: '3',
  width: '200px',
  background: '#F5F5F5',
  right: '-60px',
  top: '42px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});