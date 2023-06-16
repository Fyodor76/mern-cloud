import * as Styled from './ButtonUpload.style';

export const ButtonUpload = ({fileUploadHandler}) => {
  return (
    <Styled.ButtonConfirm
      variant="contained"
      component="label"
    >
      Загрузить файл
      <input
        type="file"
        multiple
        onChange={(e) => fileUploadHandler(e)}
        hidden
      />
    </Styled.ButtonConfirm>
  );
};