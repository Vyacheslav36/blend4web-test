import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const CreateButton = ({ handleClick }) => (
  <IconButton aria-label="create" onClick={handleClick}>
    <AddCircleIcon fontSize="small" color="primary" />
  </IconButton>
);

export default CreateButton;
