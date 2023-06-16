import TextField from '@mui/material/TextField';
import {InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export const InputSearch = ({searchName, searchHandler}) => {
  return (
    <TextField
      label="Поиск по файлам..."
      multiline
      fullWidth
      value={searchName}
      onChange={e => searchHandler(e)}
      placeholder="Поиск по файлам..."
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};