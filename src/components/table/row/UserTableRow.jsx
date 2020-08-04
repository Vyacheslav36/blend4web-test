import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';
import ViewButton from '../../buttons/ViewButton';
import EditButton from '../../buttons/EditButton';
import DeleteButton from '../../buttons/DeleteButton';

const ActionsGroup = ({ handleRemoveItem, handleEditRow, handleViewRow }) => {
  const handleView = (e) => {
    const { id } = e.currentTarget.parentNode.parentNode.dataset;
    handleViewRow(id);
  };

  const handleEdit = (e) => {
    const { id } = e.currentTarget.parentNode.parentNode.dataset;
    handleEditRow(id);
  };

  const handleRemove = (e) => {
    const question = 'Are you sure you want to remove this item';
    if (window.confirm(question)) {
      const { id } = e.currentTarget.parentNode.parentNode.dataset;
      handleRemoveItem(id);
    }
  };
  return (
    <>
      <ViewButton handleClick={handleView} />
      <EditButton handleClick={handleEdit} />
      <DeleteButton handleClick={handleRemove} />
    </>
  );
};

const UserTableRow = ({
  row, handleRemoveItem, handleEditRow, handleViewRow
}) => (
  <TableRow
    hover
    data-id={row.id}
  >
    <TableCell align="left">{row.name}</TableCell>
    <TableCell align="left">{row.type}</TableCell>
    <TableCell align="left">{row.color}</TableCell>
    <TableCell align="right">
      <ActionsGroup
        handleRemoveItem={handleRemoveItem}
        handleEditRow={handleEditRow}
        handleViewRow={handleViewRow}
      />
    </TableCell>
  </TableRow>
);

UserTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  handleRemoveItem: PropTypes.func,
  handleViewRow: PropTypes.func,
  handleEditRow: PropTypes.func,
};

export default UserTableRow;
