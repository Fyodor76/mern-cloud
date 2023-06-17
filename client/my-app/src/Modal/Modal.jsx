import React, {useEffect} from 'react';
import Modal from '@mui/material/Modal';


const ModalComponent = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const close = (e) => {
      if(e.key === 'Escape'){
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  },[]);

  return (
    <Modal
      onClose={onClose}
      open={isOpen}
      sx={{ backgroundColor: 'rgba(0,0,0,0.18)' }}
      hideBackdrop
      onClick={onClose}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
