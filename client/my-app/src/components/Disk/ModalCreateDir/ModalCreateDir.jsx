import TextField from '@mui/material/TextField';

import {useEffect} from 'react';

import * as Styled from './ModalCreateDir.style';


export const ModalCreateDir = ({setDirName, dirName, createDirHandler, updateDirHandler, mode}) => {

  const createUpdate = (e) => {
    e.preventDefault();
    if (mode === 'create') {
      createDirHandler();
    } else {
      updateDirHandler();
    }
  };

  return (
    <Styled.Container onClick={(e) => e.stopPropagation()}>
      <Styled.Content onSubmit={createUpdate}>
        { mode === 'create' ?
          <span>Создать новую папку</span>
          :
          <span>Редактировать название папки</span>
        }
        <Styled.CustomedBlock>
          <TextField
            label="Название папки"
            fullWidth
            placeholder="Название папки"
            value={dirName}
            onChange={e => setDirName(e.currentTarget.value)}
          />
        </Styled.CustomedBlock>
        <Styled.CustomedBlock>
          {
            mode === 'create' ?
              <Styled.ButtonConfirm
                type="submit"
                onClick={createDirHandler}
              >
              Создать
              </Styled.ButtonConfirm>
              :
              <Styled.ButtonConfirm
                type="submit"
                onClick={updateDirHandler}
              >
                изменить
              </Styled.ButtonConfirm>
          }
        </Styled.CustomedBlock>
      </Styled.Content>
    </Styled.Container>
  );
};