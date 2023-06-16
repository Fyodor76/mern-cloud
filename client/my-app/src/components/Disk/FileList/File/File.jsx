import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {useDispatch, useSelector} from 'react-redux';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

import {pushToStack, setCurrentDir} from '../../../../reducers/fileReducer';
import {deleteFile, downloadFile} from '../../../../actions/file';
import sizeFormat from '../../../../utils/sizeFormat';

export const File = ({name, date, size, type, id, openSnackbar, openModal}) => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);

  const openDirHandler = () => {
    if (type !== 'dir') {
      return;
    }
    dispatch(pushToStack(currentDir));
    dispatch(setCurrentDir(id));
  };

  const downloadClickHandler = (e) => {
    e.stopPropagation();
    downloadFile({id, name});
  };

  const deleteClickHandler = async (e) => {
    e.stopPropagation();
    const response = await dispatch(deleteFile(id));
    if (response) {
      openSnackbar('success', 'Deleted successfuly');
    } else {
      openSnackbar('error', 'Some error happened, please, try again');
    }
  };

  const openModalHandler = (e) => {
    e.stopPropagation();
    if (type !== 'dir') {
      return;
    }
    openModal('update', name, id);
  };

  return (
    <TableRow key={name} onClick={openDirHandler}>
      <TableCell>
        <Box sx={{display: 'flex', gap: '10px'}}>
          <div>
            {type === 'dir' ?
              <FolderIcon fontSize="large"/>
              :
              <InsertDriveFileIcon fontSize="large"/>}
          </div>
          <Box sx={{paddingTop: '6px'}}>{name}</Box>
        </Box>
      </TableCell>
      <TableCell align="right">{date.slice(0,10)}</TableCell>
      <TableCell align="right">{sizeFormat(size)}</TableCell>
      <TableCell align="right">
        <Button className="buttons-actions" onClick={downloadClickHandler}>
          <FileDownloadIcon/>
        </Button>
        <Button className="buttons-actions" onClick={openModalHandler}>
          <EditIcon/>
        </Button>
        <Button className="buttons-actions" onClick={deleteClickHandler}>
          <DeleteIcon/>
        </Button>
      </TableCell>
    </TableRow>
  );
};