import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PropTypes from 'prop-types';

const CreateButton = ({ handleClick }) => (
  <IconButton aria-label="create" onClick={handleClick}>
    <AddCircleIcon color="primary" />
  </IconButton>
);

CreateButton.propTypes = {
  handleClick: PropTypes.func,
};

export default CreateButton;
