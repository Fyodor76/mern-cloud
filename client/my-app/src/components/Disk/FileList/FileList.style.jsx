import {styled} from '@mui/material/styles';


export const CustomTable = styled('table')({
  width: '100%',
  marginTop: '20px',

  '& tr, td, th': {
    fontSize: '20px',
  },

  '& td': {
    cursor: 'pointer',
  },

  '& td button': {
    opacity: '0',
  },

  '& tr:hover .buttons-actions': {
    opacity: '1',
  },

  '& td:first-child:hover': {
    transform: 'scale(1.02)',
    cursor: 'pointer',
  },
});

export const BlockNoFiles = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(65vh - 50px)',
  fontSize: '30px',
});