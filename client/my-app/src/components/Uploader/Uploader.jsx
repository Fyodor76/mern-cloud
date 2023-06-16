import React from 'react';
import CloseIcon from '@mui/icons-material/Close';


import {useDispatch, useSelector} from 'react-redux';

import Button from '@mui/material/Button';

import {hideUploader} from '../../reducers/uploadRecuder';

import UploadFile from './UploaderFile/UploadFile';
import * as Styled from './Uploader.style';


const Uploader = () => {
  const files = useSelector(state => state.upload.files);
  const isVisible = useSelector(state => state.upload.isVisible);
  const dispatch = useDispatch();

  return ( isVisible &&
    <Styled.Container>
      <Styled.Header>
        <div>Загрузки</div>
        <div>
          <Button
            onClick={() => dispatch(hideUploader())}>
            <CloseIcon/>
          </Button>
        </div>
      </Styled.Header>
      {files.map(file =>
        <UploadFile key={file.id} file={file}/>
      )}
    </Styled.Container>
  );
};

export default Uploader;