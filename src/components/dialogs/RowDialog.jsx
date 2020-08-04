import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& #save-button': {
      marginRight: 10
    }
  },
}));

const RowDialog = ({ open, handleClose, message, type }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      maxWidth="md"
    >
      <DialogContent>
        <Typography component="h2" variant="h3">
          {message}
        </Typography>
        <Box className={classes.buttons}>
          {
            type !== 'preview' && <Button variant="outlined" id="save-button">Save</Button>
          }
          <Button variant="outlined" color="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RowDialog;