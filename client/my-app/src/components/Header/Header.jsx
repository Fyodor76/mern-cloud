import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

import {useDispatch, useSelector} from 'react-redux';

import {Avatar} from '@mui/material';

import {useState} from 'react';

import Button from '@mui/material/Button';

import {Link} from 'react-router-dom';

import {logout} from '../../reducers/userReducer';

import {deleteAvatar, uploadAvatar} from '../../actions/user';

import * as Styled from './Header.style';

export const Header = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.user.currentUser);

  const [isAvatarActions, setAvatarActions] = useState(false);

  const avatar = currentUser.avatar && `http://localhost:8000/${currentUser.avatar}`;

  const changeHandler = (e) => {
    const file = e.target.files[0];
    dispatch(uploadAvatar(file));
  };

  const openAvatarActions = (e) => {
    e.stopPropagation();
    setAvatarActions(!isAvatarActions);
  };

  const closeAvatarActions = () => {
    setAvatarActions(false);
  };

  return (
    <Styled.Header onClick={closeAvatarActions}>
      <Styled.Container>
        <Styled.BlockAvatar>
          <Avatar
            src={avatar}
            sx={{height: '33px', width: '33px', cursor: 'pointer'}}
            onClick={openAvatarActions}
          />
          {isAvatarActions &&
            <Styled.ProfileActions onClick={(e) => e.stopPropagation()}>
              <Button  sx={{textTransform: 'none', width: '190px'}}>
                <Link to="/profile" onClick={closeAvatarActions}>Профиль</Link>
              </Button>
              <Button sx={{textTransform: 'none', width: '190px'}}>
                <label htmlFor="file-upload" className="custom-file-upload">
                  Загрузить аватарку
                </label>
                <input
                  onChange={changeHandler}
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  style={{display: 'none'}}
                />
              </Button>
              <Button
                onClick={() => dispatch(deleteAvatar())}
                sx={{textTransform: 'none', width: '190px'}}
              >
                Удалить аватарку
              </Button>
            </Styled.ProfileActions>
          }
        </Styled.BlockAvatar>
        <MeetingRoomIcon
          onClick={() => dispatch(logout())}
          sx={{cursor: 'pointer'}}
          fontSize="large"
          color="primary"
        />
      </Styled.Container>
    </Styled.Header>
  );
};