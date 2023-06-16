import {useSelector} from 'react-redux';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {CSSTransition} from 'react-transition-group';

import * as Styled from './FileList.style';
import './index.css';


import {File} from './File/File';

export const FileList = ({openSnackbar, openModal}) => {
  const files = useSelector(state => state.files.files);

  if (files.length === 0) {
    return (
      <Styled.BlockNoFiles>
        Файлы не найдены
      </Styled.BlockNoFiles>
    );
  }

  return (
    <div>
      <Styled.CustomTable >
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Размер</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file) => (
            <CSSTransition
              key={file.name}
              timeout={500}
              classNames="file"
              exit={false}
            >
              <File
                name={file.name}
                size={file.size}
                date={file.date}
                type={file.type}
                id={file._id}
                openSnackbar={openSnackbar}
                openModal={openModal}
              />
            </CSSTransition>
          ))}
        </TableBody>
      </Styled.CustomTable>
    </div>
  );
};