import { Container } from '@material-ui/core';
import React from 'react';
import { TableContext } from './context/TableContext';
import { useData } from './hooks/data.hook';
import UserTable from './components/table/UserTable';

function App() {
  const { setToLocalStorage, rows } = useData();

  return (
    <TableContext.Provider value={{ rows, setToLocalStorage }}>
      <Container maxWidth="md">
        <h1>Test project</h1>
        <UserTable />
      </Container>
    </TableContext.Provider>
  );
}

export default App;
