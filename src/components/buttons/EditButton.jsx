import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const EditButton = ({ handleClick }) => (
  <IconButton aria-label="view" onClick={handleClick}>
    <EditIcon fontSize="small" />
  </IconButton>
);

export default EditButton;
