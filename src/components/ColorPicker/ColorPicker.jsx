import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  color: {
    width: '36px',
    height: '14px',
    borderRadius: '2px',
    background: '#fff',
  },
  swatch: {
    padding: '5px',
    background: '#fff',
    borderRadius: '1px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
    display: 'inline-block',
    cursor: 'pointer',
  },
  disabled: {
    cursor: 'auto',
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  },
}));

const ColorPicker = ({ color, onColorChange, disabled }) => {
  const classes = useStyles();
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => !disabled && setDisplayColorPicker(!displayColorPicker);

  const handleClose = () => setDisplayColorPicker(false);

  return (
    <div>
      <div
        className={`${classes.swatch} ${disabled ? classes.disabled : ''}`}
        onClick={handleClick}
      >
        <div
          className={classes.color}
          style={{ background: color }}
        />
      </div>
      {
        displayColorPicker
          ? (
            <div>
              <div
                className={classes.cover}
                onClick={handleClose}
              />
              <ChromePicker
                color={color}
                onChangeComplete={onColorChange}
              />
            </div>
          )
          : null
      }
    </div>
  );
};

export default ColorPicker;
