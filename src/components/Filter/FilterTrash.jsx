const CustomSelect = ({ label, id, value, onChange, options }) => (
  <FormControl
    sx={{
      '.MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.8)',
        '&.Mui-focused': {
          color: '#E6533C',
        },
      },
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(239, 237, 232, 0.30)',
        borderRadius: '12px',
      },
      '.MuiOutlinedInput-input': {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
      },
      '.MuiSelect-icon': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(239, 237, 232, 0.30)',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(239, 237, 232, 0.30)',
      },
    }}
  >
    <InputLabel id={`${id}-label`}>{label}</InputLabel>
    <Select
      labelId={`${id}-label`}
      id={id}
      value={value}
      label={label}
      onChange={onChange}
      IconComponent={KeyboardArrowDownIcon}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        PaperProps: {
          style: {
            maxHeight: 276,
            maxWidth: 164,
            marginTop: 2,
            borderRadius: 12,
            background: '#1C1C1C',
            color: 'rgba(255, 255, 255, 0.8)',
          },
        },
      }}
      sx={{
        width: 194,
        height: 52,
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(239, 237, 232, 0.30)',
          },
        },
      }}
    >
      {options?.map(item => (
        <MenuItem
          key={item}
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
            textTransform: 'capitalize',
          }}
          value={item}
        >
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);




      // <Autocomplete
      //   id="filter-demo"
      //   options={carBrand}
      //   sx={{ width: 224 }}
      //   renderInput={params => <TextField {...params} label="Enter the text" />}
      // />;