import * as Styled from '../../Disk.style';

export const ButtonCreate = ({openModal}) => {
  return (
    <div>
      <Styled.ButtonCreate onClick={() => openModal('create', '')}>
        Создать
      </Styled.ButtonCreate>
    </div>
  );
};