import PropTypes from 'prop-types';

import { TableRow, Checkbox, TableCell } from '@mui/material';

UserTableRow.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string,
    typeCompte: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function UserTableRow({ row, selected, onClick }) {
  const { name, typeCompte, email, password } = row;

  return (
    <TableRow
      hover
      role="checkbox"
      aria-checked={selected}
      tabIndex={-1}
      selected={selected}
      onClick={(event) => onClick(event, name)}
    >
      <TableCell padding="checkbox">
        <Checkbox checked={selected} />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{typeCompte}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{password}</TableCell>
    </TableRow>
  );
}