import React, { useContext, useEffect, useState } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { TablePagination } from '@material-ui/core';
import { TableContext } from '../../context/TableContext';
import UserTableRow from './row/UserTableRow';
import UserTableHeader from './header/UserTableHeader';
import NoDataRow from './row/NoDataRow';
import RowDialog from '../dialogs/RowDialog';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  tableHeader: {
    '& th': {
      fontWeight: 'bold'
    }
  },
}));

const UserTable = () => {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [currentRow, setCurrentRow] = useState(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // For modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(null);
  const [modalType, setModalType] = useState('preview');

  const { rows: savedRows, setToLocalStorage } = useContext(TableContext);

  useEffect(() => {
    setRows(savedRows);
  }, [savedRows]);

  const headCells = [
    { id: 'name', label: 'Name' },
    { id: 'type', label: 'Type' },
    { id: 'color', label: 'Color' },
    { id: 'actions', label: '' },
  ];

  const handleRemoveItem = (id) => {
    const newData = rows.filter((row) => row.id !== Number(id));
    setRows(() => newData);
    setToLocalStorage(newData);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalMessage(null);
  };

  const handleViewRow = (id) => {
    const row = rows.find((e) => e.id === Number(id));
    if (row) {
      setCurrentRow(() => row);
      setModalMessage(`Viewing a recording - ${row.name}`);
      setModalType('preview');
      setModalOpen(true);
    }
  };

  const handleEditRow = (id) => {
    const row = rows.find((e) => e.id === Number(id));
    if (row) {
      setCurrentRow(() => row);
      setModalMessage('Editing a record');
      setModalType('edit');
      setModalOpen(true);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          size="medium"
        >
          <UserTableHeader classes={classes} headCells={headCells} />
          <TableBody>
            {
              rows && rows.length
                ? rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      key={row.id}
                      row={row}
                      handleRemoveItem={handleRemoveItem}
                      handleViewRow={handleViewRow}
                      handleEditRow={handleEditRow}
                    />
                  ))
                : <NoDataRow />
            }
          </TableBody>
        </Table>
      </TableContainer>
      {
        rows && rows.length
          ? (
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          )
          : null
      }
      <RowDialog
        open={modalOpen}
        handleClose={handleModalClose}
        message={modalMessage}
        type={modalType}
      />
    </Paper>
  );
};

export default UserTable;
