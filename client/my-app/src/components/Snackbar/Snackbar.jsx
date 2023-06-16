import { Alert, Snackbar } from '@mui/material';
import React from 'react';



const SnackbarComponent = ({ snackbarState, closeSnackbar }) => (
  <div>
    <Snackbar
      open={snackbarState.isOpen}
      autoHideDuration={4_000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert severity={snackbarState.severity} onClose={closeSnackbar} sx={{ width: '400px' }}>
        {snackbarState.message}
      </Alert>
    </Snackbar>
  </div>
);

export default SnackbarComponent;
