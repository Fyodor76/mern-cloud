import {useDispatch, useSelector} from 'react-redux';

import Button from '@mui/material/Button';

import {Link} from 'react-router-dom';

import {useForm} from 'react-hook-form';

import {deleteAvatar, updateUser, uploadAvatar} from '../../actions/user';
import avatarImage from '../../images/avatar.png';

import useSnackbar from '../../hooks/useSnackbarHook';

import SnackbarComponent from '../../components/Snackbar/Snackbar';

import * as Styled from './Profile.style';

export const Profile = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const { snackbarState, openSnackbar, closeSnackbar } = useSnackbar();


  const avatar = currentUser.avatar && `http://localhost:8000/${currentUser.avatar}`;

  const changeHandler = (e) => {
    const file = e.target.files[0];
    dispatch(uploadAvatar(file));
  };

  const onSubmit = async (user) => {
    const response = await dispatch(updateUser(user));

    if (response) {
      openSnackbar('success', 'Changes are saved!');
    } else {
      openSnackbar('error', 'Some error happened, please, try again');
    }
  };

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {...currentUser},
  });

  return (
    <Styled.Profile>
      <Styled.BlockAvatar>
        <Styled.Avatar src={avatar ? avatar : avatarImage} />
        <div>
          <Styled.ButtonUpload variant="contained">
            <label htmlFor="file-upload" className="custom-file-upload">
             Загрузить фотографию
            </label>
            <input
              onChange={changeHandler}
              id="file-upload"
              type="file"
              accept="image/*"
              style={{display: 'none'}}
            />
          </Styled.ButtonUpload>
          <Styled.ButtonDelete
            variant="outlined"
            onClick={() => dispatch(deleteAvatar())}
          >
           Удалить фотографию
          </Styled.ButtonDelete>
        </div>
      </Styled.BlockAvatar>
      <Styled.BlockUserInfo onSubmit={handleSubmit(onSubmit)}>
        <Styled.CustomedTextField
          fullWidth
          label="Имя"
          variant="outlined"
          {...register('name')}
          defaultValue={watch().name}
        />
        <Styled.CustomedTextField
          fullWidth
          label="Фамилия"
          variant="outlined"
          {...register('surname')}
          defaultValue={watch().surname}
        />
        <Styled.CustomedTextField
          fullWidth
          label="Email"
          variant="outlined"
          {...register('email')}
          defaultValue={watch().email}
        />
        <Styled.CustomedTextField
          fullWidth
          readOnly
          label="Места на диске"
          variant="outlined"
          {...register('diskSpace')}
          defaultValue={watch().diskSpace}
        />
        <Styled.CustomedTextField
          fullWidth
          readOnly
          label="Занято места на диске"
          variant="outlined"
          {...register('usedSpace')}
          defaultValue={watch().usedSpace}
        />
        <Styled.ButtonSaveChanges
          type="submit"
          variant="contained"
        >
            Сохранить изменения
        </Styled.ButtonSaveChanges>
      </Styled.BlockUserInfo>
      <Styled.ButtonToMainPage>
        <Button variant="outlined" sx={{textTransform: 'none'}}>
          <Link to="/main-page">Облачное хранилище</Link>
        </Button>
      </Styled.ButtonToMainPage>
      <SnackbarComponent snackbarState={snackbarState} closeSnackbar={closeSnackbar} />
    </Styled.Profile>
  );
};