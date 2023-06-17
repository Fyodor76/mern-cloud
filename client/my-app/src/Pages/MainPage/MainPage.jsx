import Box from '@mui/material/Box';

import {Header} from '../../components/Header/Header';

import {Disk} from '../../components/Disk/Disk';


export const MainPage = () => {
  return (
    <Box sx={{borderRadius: '10px'}}>
      <Disk/>
    </Box>
  );
};