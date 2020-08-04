import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

const DeleteButton = ({ handleClick }) => (
  <IconButton aria-label="view" onClick={handleClick}>
    <DeleteIcon fontSize="small" />
  </IconButton>
);

DeleteButton.propTypes = {
  handleClick: PropTypes.func,
};

export default DeleteButton;
