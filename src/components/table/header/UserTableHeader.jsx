import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';

const UserTableHeader = ({ headCells, classes }) => (
  <TableHead className={classes.tableHeader}>
    <TableRow>
      {headCells.map((headCell) => (
        <TableCell
          key={headCell.id}
          align={headCell.id === 'actions' ? 'right' : 'left'}
          padding="default"
        >
          {headCell.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

UserTableHeader.propTypes = {
  headCells: PropTypes.array,
  classes: PropTypes.object.isRequired
};

export default UserTableHeader;
