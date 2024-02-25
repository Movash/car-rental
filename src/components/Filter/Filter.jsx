import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import makes from './makes.json';
import { FilterDescr, FilterDescrWrap, FiltersWrap } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getFilter } from '../../redux/adverts/thunks';
import { useState } from 'react';
import { Button } from 'styles/MainComponents/MainComponents.styled';
import { advertsSlice } from '../../redux/adverts/slice';

const Filter = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({ make: ''});

  const handleMakeChange = event => {
    setFilters({ make: event.target.value });
  };

  const handleClick = () => {
    const startPage = 1;
    dispatch(advertsSlice.actions.setPage(startPage));
    dispatch(getFilter({ make: filters.make, page: startPage }));
  }

  return (
    <FiltersWrap>
      <FilterDescrWrap>
        <FilterDescr>Car brand</FilterDescr>
        <FormControl
          sx={{
            '.MuiInputBase-formControl': {
              height: '48px',
              width: '224px',
              fontFamily: 'ManropeMedium',
              fontWeight: 500,
              fontSize: '18px',
              color: '#121417',
            },
            '.MuiSelect-icon': {
              color: 'var(--black-color)',
            },
          }}
        >
          <Select
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 224,
                  maxWidth: 272,
                  marginTop: 4,
                  border: '1px solid var(--black-opacity-5-color)',
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
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
            value={filters.make}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            onChange={handleMakeChange}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem
              sx={{
                fontFamily: 'ManropeMedium',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '1.25',
                color: 'var(--black-opacity-20-color)',
                transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  color: 'var(--black-color)',
                  background: 'none',
                },
                '&.Mui-selected': {
                  color: 'var(--black-color)',
                  background: 'none',
                  '&:hover': {
                    background: 'none',
                  },
                },
              }}
              value=""
            >
              All brands
            </MenuItem>
            {makes?.map((item, index) => (
              <MenuItem
                sx={{
                  fontFamily: 'ManropeMedium',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '1.25',
                  color: 'var(--black-opacity-20-color)',
                  transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    color: 'var(--black-color)',
                    background: 'none',
                  },
                  '&.Mui-selected': {
                    color: 'var(--black-color)',
                    background: 'none',
                    '&:hover': {
                      background: 'none',
                    },
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
      <div>
        <Button onClick={handleClick} className={'searchPadding'}>Search</Button>
      </div>
    </FiltersWrap>
  );
};

export default Filter;
