import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

export const ButtonConfirm = styled(({children, ...props}) => (
  <Button sx={{
    background: 'rgba(25, 118, 210, 0.04)',
    color: '#1976d2',
    border: '1px solid #566885',
  }}
  {...props}>{children}</Button>
))(() => ({}));

