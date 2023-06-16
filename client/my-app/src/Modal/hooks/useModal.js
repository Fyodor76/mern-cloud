import { useState } from 'react';

const useModal = () => {
  const [modalState, setIsOpen] = useState(
    {
      isOpen: false,
      mode: '',
      file: '',
      id: '',
    });

  const openModal = (mode, folderName, id) => {
    setIsOpen((prev) => ({
      ...prev,
      isOpen: true,
      mode: mode,
      folderName: folderName,
      id: id,
    }));
  };

  const closeModal = () => {
    setIsOpen((prev) => ({
      ...prev,
      isOpen: false,
      mode: '',
      folderName: '',
    }));
  };

  return { modalState, openModal, closeModal };
};

export default useModal;
