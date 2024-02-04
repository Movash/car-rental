import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { InputLabel } from '@mui/material';
import makes from './makes.json';
import { FilterDescr, FilterDescrWrap, FiltersWrap } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getFilter } from '../../redux/adverts/thunks';
import { useState } from 'react';

const Filter = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({ make: '' });

  const handleMakeChange = event => {
    setFilters({ make: event.target.value });
    dispatch(getFilter({ make: event.target.value }));
  };

  return (
    <FiltersWrap>
      <FilterDescrWrap>
        <FilterDescr>Car brand</FilterDescr>
        <FormControl
          sx={{
            '.MuiInputLabel-root': {
              color: '#121417',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: 1.11,
              '&.Mui-focused': {
                color: 'var(--third-gray-color)',
              },
            },
            '.MuiSelect-icon': {
              color: 'var(--black-color)',
            },
          }}
        >
          <InputLabel id={`make-select-label`}>Choose the car</InputLabel>
          <Select
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 224,
                  maxWidth: 272,
                  marginTop: 4,
                  border: '1px solid var(--black-opacity-20-color)',
                  borderRadius: '14px',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '1.25',
                  background: 'var(--white-color)',
                  color: 'var(--black-opacity-20-color)',
                },
              },
            }}
            sx={{
              width: 194,
              height: 52,
              borderRadius: '14px',
              background: 'var(--gray-color)',
              '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--third-gray-color)',
                },
              },
            }}
            labelId={`make-select-label`}
            id="make-select"
            value={filters.make}
            label="Choose the car"
            onChange={handleMakeChange}
            IconComponent={KeyboardArrowDownIcon}
          >
            {makes?.map((item, index) => (
              <MenuItem
                sx={{
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '1.25',
                  color: 'var(--black-opacity-20-color)',
                  transition:
                    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    color: 'var(--black-color)',
                    background: 'var(--gray-color)',
                  },
                }}
                key={index}
                value={item}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FilterDescrWrap>
    </FiltersWrap>
  );
};

export default Filter;
