import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { Box, makeStyles } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import ColorPicker from '../ColorPicker/ColorPicker';

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: 30,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& #save-button': {
      marginRight: 20
    }
  },
  formBlock: {
    '& .MuiFormControl-root': {
      marginBottom: 10
    },
    marginBottom: 30,
  },
}));

const RowForm = ({
  type, classes, handleClose, handleSave, currentRow
}) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: currentRow ? currentRow.id : null,
      name: currentRow ? currentRow.name : '',
      type: currentRow ? currentRow.type : '',
      color: currentRow ? currentRow.color : '#ffffff',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name required'),
      type: Yup.string()
        .required('Type required'),
      color: Yup.string()
        .required('Color required'),
    }),
    onSubmit: (values) => {
      handleSave(values);
      handleClose();
    },
  });

  const isDisabled = type === 'preview';

  const onColorChange = (color) => {
    formik.setFieldValue('color', color.hex);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.formBlock}>
        <TextField
          fullWidth
          required
          id="name"
          label="Name"
          error={!!(formik.touched.name && formik.errors.name)}
          onChange={formik.handleChange}
          value={formik.values.name}
          disabled={isDisabled}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: 'black', textAlign: 'left' }}>{formik.errors.name}</div>
        ) : null}
        <TextField
          fullWidth
          required
          id="type"
          label="Type"
          error={!!(formik.touched.type && formik.errors.type)}
          onChange={formik.handleChange}
          value={formik.values.type}
          disabled={isDisabled}
        />
        {formik.touched.type && formik.errors.type ? (
          <div style={{ color: 'black', textAlign: 'left' }}>{formik.errors.type}</div>
        ) : null}
        <ColorPicker color={formik.values.color} onColorChange={onColorChange} disabled={isDisabled} />
      </div>
      <Box className={classes.buttons}>
        {
          !isDisabled
          && (
            <Button
              type="submit"
              variant="outlined"
              id="save-button"
            >
              Save
            </Button>
          )
        }
        <Button variant="outlined" color="primary" onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </form>
  );
};

RowForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func,
  message: PropTypes.string,
  type: PropTypes.string,
  currentRow: PropTypes.object,
  classes: PropTypes.object,
};

const RowDialog = ({
  open, handleClose, message, type, handleSave, currentRow
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
    >
      <DialogContent>
        <Typography component="h2" variant="h3" className={classes.header}>
          {message}
        </Typography>
        <RowForm
          type={type}
          classes={classes}
          handleSave={handleSave}
          currentRow={currentRow}
          handleClose={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
};

RowDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func,
  message: PropTypes.string,
  type: PropTypes.string,
  currentRow: PropTypes.object,
};

export default RowDialog;
