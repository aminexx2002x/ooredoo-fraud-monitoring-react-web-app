import PropTypes from 'prop-types';

import { TableRow, TableCell } from '@mui/material';

TableEmptyRows.propTypes = {
  emptyRows: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default function TableEmptyRows({ emptyRows, height }) {
  if (!emptyRows) {
    return null;
  }

  return (
    <TableRow
      sx={{
        ...(height && {
          height: height * emptyRows,
        }),
      }}
    >
      <TableCell colSpan={9} />
    </TableRow>
  );
}
