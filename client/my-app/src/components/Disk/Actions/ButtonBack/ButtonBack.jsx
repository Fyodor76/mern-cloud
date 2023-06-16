import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import {useDispatch, useSelector} from 'react-redux';

import * as Styled from '../../Disk.style';
import {setCurrentDir} from '../../../../reducers/fileReducer';


export const ButtonBack = () => {
  const dispatch = useDispatch();
  const dirStack = useSelector(state => state.files.dirStack);
  
  const backClickHandler = () => {
    const backDirId = dirStack.pop();
    dispatch(setCurrentDir(backDirId));
  };

  return (
    <div>
      <Styled.ButtonBack onClick={backClickHandler}>
        <KeyboardReturnIcon/>
      </Styled.ButtonBack>
    </div>
  );
};