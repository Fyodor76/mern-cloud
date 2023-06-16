import Box from '@mui/material/Box';

import {Header} from '../Header/Header';

import {Disk} from '../Disk/Disk';


export const MainPage = () => {
  return (
    <Box sx={{borderRadius: '10px'}}>
      <Header/>
      <Disk/>
    </Box>
  );
};