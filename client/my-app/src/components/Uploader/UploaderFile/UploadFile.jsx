import React from 'react';
import {useDispatch} from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

import {removeUploadFile} from '../../../reducers/uploadRecuder';


const UploadFile = ({file}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 10px'}}
      >
        <div>{file.name}</div>
        <div>
          <Button
            onClick={() => dispatch(removeUploadFile(file.id))}
          >
            <DeleteIcon/>
          </Button>
        </div>
      </Box>
      <div>
        <Box sx={{
          width: file.progress + '%',
          background: 'green',
          color: 'white'}}>
          {file.progress}%
        </Box>
      </div>
    </div>
  );
};

export default UploadFile;