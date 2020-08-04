import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';

const EditButton = ({ handleClick }) => (
  <IconButton aria-label="view" onClick={handleClick}>
    <EditIcon fontSize="small" />
  </IconButton>
);

EditButton.propTypes = {
  handleClick: PropTypes.func,
};

export default EditButton;
