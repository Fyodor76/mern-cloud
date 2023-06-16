import TextField from '@mui/material/TextField';

import * as Styled from './ModalCreateDir.style';


export const ModalCreateDir = ({setDirName, dirName, createDirHandler, updateDirHandler, mode}) => {
  return (
    <Styled.Container onClick={(e) => e.stopPropagation()}>
      <Styled.Content>
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
              <Styled.ButtonConfirm onClick={createDirHandler}>
              Создать
              </Styled.ButtonConfirm>
              :
              <Styled.ButtonConfirm onClick={updateDirHandler}>
                изменить
              </Styled.ButtonConfirm>
          }
        </Styled.CustomedBlock>
      </Styled.Content>
    </Styled.Container>
  );
};