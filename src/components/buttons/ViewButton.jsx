import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ViewIcon from '@material-ui/icons/Visibility';
import PropTypes from 'prop-types';

const ViewButton = ({ handleClick }) => (
  <IconButton aria-label="view" onClick={handleClick}>
    <ViewIcon fontSize="small" />
  </IconButton>
);

ViewButton.propTypes = {
  handleClick: PropTypes.func,
};

export default ViewButton;
