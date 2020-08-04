import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const DeleteButton = ({ handleClick }) => (
  <IconButton aria-label="view" onClick={handleClick}>
    <DeleteIcon fontSize="small" />
  </IconButton>
);

export default DeleteButton;
