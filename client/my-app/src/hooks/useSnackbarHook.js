import { useState } from 'react';


const useSnackbar = () => {
  const [snackbarState, setSnackbarState] = useState({
    severity: 'success',
    isOpen: false,
    message: '',
  });

  const openSnackbar = (severity, message) => {
    setSnackbarState((prevState) => ({
      ...prevState,
      isOpen: true,
      severity: severity,
      message: message,
    }));
  };

  const closeSnackbar = () => {
    setSnackbarState((prevState) => ({
      ...prevState,
      isOpen: false,
      message: '',
    }));
  };

  return { snackbarState, openSnackbar, closeSnackbar };
};

export default useSnackbar;
