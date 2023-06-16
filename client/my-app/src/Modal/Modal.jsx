import React from 'react';
import Modal from '@mui/material/Modal';


const ModalComponent = ({ isOpen, onClose, children }) => (
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

export default ModalComponent;
