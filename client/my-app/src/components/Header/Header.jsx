import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

import {useDispatch} from 'react-redux';

import {logout} from '../../reducers/userReducer';

import * as Styled from './Header.style';

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <Styled.Header>
      <div>
        <MeetingRoomIcon
          onClick={() => dispatch(logout())}
          sx={{cursor: 'pointer', position: 'absolute', right: '10px'}}
          fontSize="large"
          color="primary"
        />
      </div>
    </Styled.Header>
  );
};