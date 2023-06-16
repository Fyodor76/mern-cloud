import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';


export const SelectSort = ({setSort, sort}) => {
  return (
    <FormControl sx={{marginTop: '50px'}}>
      <InputLabel id="select">Сортировка по</InputLabel>
      <Select
        id="select"
        sx={{height: '40px', width: '160px'}}
        label="Сортировка по"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <MenuItem value="name">имени</MenuItem>
        <MenuItem value="type">типу</MenuItem>
        <MenuItem value="date">дате</MenuItem>
      </Select>
    </FormControl>
  );
};