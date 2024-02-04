import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { InputLabel } from '@mui/material';
import makes from './makes.json';
import { FiltersWrap } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getFilter } from '../../redux/adverts/thunks';
import { useState } from 'react';


const Filter = () => {

  const dispatch = useDispatch();

  const [filters, setFilters] = useState({make: ''});

  const handleMakeChange = event => {
    setFilters({ make: event.target.value });
    dispatch(getFilter({ make: event.target.value }));
  };

  return (
    <FiltersWrap>
      <FormControl>
        <InputLabel id={`make-select-label`}>Choose the car</InputLabel>
        <Select
          labelId={`make-select-label`}
          id="make-select"
          value={filters.make}
          label="Make"
          onChange={handleMakeChange}
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            width: 194,
            height: 52,
          }}
        >
          {makes?.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FiltersWrap>
  );
};

export default Filter;
