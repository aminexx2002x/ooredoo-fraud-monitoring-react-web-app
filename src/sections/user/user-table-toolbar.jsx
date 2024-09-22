import PropTypes from 'prop-types';

import { Toolbar, Typography, OutlinedInput, InputAdornment } from '@mui/material';

import Iconify from 'src/components/iconify';

UserTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  filterName: PropTypes.string.isRequired,
  onFilterName: PropTypes.func.isRequired,
};

export default function UserTableToolbar({ numSelected, filterName, onFilterName }) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => theme.palette.primary.main,
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <OutlinedInput
          value={filterName}
          onChange={onFilterName}
          placeholder="Search user..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" />
            </InputAdornment>
          }
          sx={{ width: 240 }}
        />
      )}
    </Toolbar>
  );
}
