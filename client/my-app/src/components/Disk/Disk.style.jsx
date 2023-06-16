import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

export const BlockDisk = styled('div')({
  width: '80%',
  margin: '50px auto',
  backgroundColor: 'white',
  height: '80vh',
  borderRadius: '10px',
  overflowY: 'scroll',
  padding: '15px 50px',
});

export const BlockLoader = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(70vh - 50px)',
});

export const BlockBackCreate = styled('div')({
  display: 'flex',
  gap: '20px',
});

export const BlockSearch = styled('div')({
  width: '800px',
  marginTop: '40px',
});

export const BlockUpload = styled('div')({
  paddingTop: '45px',
});


export const BlockActions = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const BlockDragDrop = styled('div')({
  border: 'dashed #566885 2px',
  alignItems: 'center',
  textAlign: 'center',
  color: '#566885',
  fontSize: '45px',
  width: '80%',
  margin: '50px auto',
  backgroundColor: 'white',
  height: '80vh',
  borderRadius: '10px',
});
export const ButtonBack = styled(({children, ...props}) => (
  <Button sx={{
    border: '1px solid #566885',
    width: '55px',
    borderRadius: '37px',
    height: '34px',
    cursor: 'pointer',
    color: 'black',
  }}
  {...props}>{children}</Button>
))(() => ({}));


export const ButtonCreate = styled(({children, ...props}) => (
  <Button  sx={{
    width: '158px',
    height: '34px',
    border: '1px solid #566885',
    borderRadius: '14px',
    marginTop: '18px',
  }}
  {...props} >{children}</Button>
))(() => ({}));