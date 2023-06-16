import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';

import {createDir, getFiles, searchFiles, updateDir, uploadFile} from '../../actions/file';

import useModal from '../../Modal/hooks/useModal';

import Modal from '../../Modal/Modal';

import useSnackbar from '../../hooks/useSnackbarHook';

import SnackbarComponent from '../Snackbar/Snackbar';

import Uploader from '../Uploader/Uploader';

import {showLoader} from '../../reducers/appReducer';

import * as Styled from './Disk.style';
import {FileList} from './FileList/FileList';
import {ButtonBack} from './Actions/ButtonBack/ButtonBack';
import {ButtonCreate} from './Actions/ButtonCreate/ButtonCreate';
import {SelectSort} from './Actions/SelectSort/SelectSort';
import {InputSearch} from './Actions/InputSearch/InputSeach';
import {ButtonUpload} from './Actions/ButtonUpload/ButtonUpload';
import {ModalCreateDir} from './ModalCreateDir/ModalCreateDir';


export const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);
  const loader = useSelector(state => state.app.loader);

  const {modalState, closeModal, openModal} = useModal();
  const { snackbarState, openSnackbar, closeSnackbar } = useSnackbar();

  const [searchName, setSearchName] = useState('');
  const [dirName, setDirName] = useState('');
  const [sort, setSort] = useState('type');
  const [dragEnter, setDragEnter] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState(false);

  useEffect(() => {
    setDirName(modalState.folderName);
  }, [modalState]);

  useEffect(() => {
    dispatch(getFiles(currentDir, sort));
  }, [currentDir, dispatch, sort]);

  const createDirHandler = () => {
    const response = dispatch(createDir(currentDir, dirName));
    closeModal();
    setDirName('');
    if (response) {
      openSnackbar('success', 'Folder is created succesfully');
    } else {
      openSnackbar('error', 'Some error happened, please, try again');
    }
  };

  const updateDirHandler = () => {
    const response = dispatch(updateDir(currentDir, dirName, modalState.id));
    closeModal();
    setDirName('');
    if (response) {
      openSnackbar('success', 'Folder is update successfully');
    } else {
      openSnackbar('error', 'Some error happened, please, try again');
    }
  };



  const fileUploadHandler = (e) => {
    const files = [...e.target.files];
    const result = [];

    files.forEach(file => {
      const response = dispatch(uploadFile(file, currentDir));

      result.push(response);
    });

    Promise.all(result)
      .then(() => {
        openSnackbar('success', 'Files have been successfully uploaded');
      })
      .catch(() => {
        openSnackbar('error', 'Some error happened, please, try again');
      });
  };

  const dragEnterHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragEnter(true);
  };

  const dragLeaveHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragEnter(false);
  };

  const dropHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const files = [...event.dataTransfer.files];
    files.forEach(file => dispatch(uploadFile(file, currentDir)));
    setDragEnter(false);
  };

  function searchHandler(e) {
    setSearchName(e.target.value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }
    dispatch(showLoader());
    if(e.target.value !== '') {
      setSearchTimeout(setTimeout((value) => {
        dispatch(searchFiles(value));
      }, 500, e.target.value));
    } else {
      dispatch(getFiles(currentDir));
    }
  }

  return (
    <>
      {!dragEnter ? <Styled.BlockDisk
        onDragEnter={dragEnterHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragEnterHandler}
      >
        <Styled.BlockActions>
          <Styled.BlockBackCreate>
            <div>
              <ButtonBack/>
              <ButtonCreate openModal={openModal}/>
            </div>
            <SelectSort
              setSort={setSort}
              sort={sort}
            />
          </Styled.BlockBackCreate>
          <Styled.BlockSearch>
            <InputSearch
              searchName={searchName}
              searchHandler={searchHandler}
            />
          </Styled.BlockSearch>
          <Styled.BlockUpload>
            <ButtonUpload fileUploadHandler={fileUploadHandler}/>
          </Styled.BlockUpload>
        </Styled.BlockActions>
        {loader ?
          <Styled.BlockLoader>
            <CircularProgress/>
          </Styled.BlockLoader>
          :
          <FileList
            openSnackbar={openSnackbar}
            openModal={openModal}
          />
        }
        <Modal
          onClose={closeModal}
          isOpen={modalState.isOpen}
        >
          <ModalCreateDir
            dirName={dirName}
            setDirName={setDirName}
            createDirHandler={createDirHandler}
            updateDirHandler={updateDirHandler}
            mode={modalState.mode}
          />
        </Modal>
        <SnackbarComponent
          snackbarState={snackbarState}
          closeSnackbar={closeSnackbar}
        />
      </Styled.BlockDisk>
        :
        <Styled.BlockDragDrop
          onDragEnter={dragEnterHandler}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragEnterHandler}
          onDrop={dropHandler}
        >
          <Box sx={{marginTop: '20%'}}>Перетащите файлы</Box>
        </Styled.BlockDragDrop>}
      <Uploader/>
    </>
  );
};