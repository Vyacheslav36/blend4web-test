import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ViewIcon from '@material-ui/icons/Visibility';

const ViewButton = ({ handleClick }) => (
  <IconButton aria-label="view" onClick={handleClick}>
    <ViewIcon fontSize="small" />
  </IconButton>
);

export default ViewButton;
