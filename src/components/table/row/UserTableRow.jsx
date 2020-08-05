import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
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

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: 'none',
  },
  hover: {
    borderTop: '3px solid #333333',
  },
}));

const UserTableRow = ({
  row, handleRemoveItem, handleEditRow, handleViewRow
}) => {
  const classes = useStyles();

  const dragStart = (e) => {
    const el = e.currentTarget;
    e.dataTransfer.setData('Id', el.dataset.id);
    setTimeout(() => el.classList.add(classes.hidden), 0);
  };

  const dragEnd = (e) => {
    e.currentTarget.classList.remove(classes.hidden);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.currentTarget.classList.add(classes.hover);
  };

  const dragLeave = (e) => {
    e.currentTarget.classList.remove(classes.hover);
  };

  const dragDrop = (e) => {
    const elementId = e.dataTransfer.getData('Id');
    const draggableElement = document.querySelector(`[data-id="${elementId}"]`);
    if (draggableElement) {
      e.currentTarget.before(draggableElement);
    }
    e.currentTarget.classList.remove(classes.hover);
  };

  return (
    <TableRow
      hover
      data-id={row.id}
      draggable
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDragEnd={dragEnd}
      onDrop={dragDrop}
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
};

UserTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  handleRemoveItem: PropTypes.func,
  handleViewRow: PropTypes.func,
  handleEditRow: PropTypes.func,
};

export default UserTableRow;
