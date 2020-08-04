import { createContext } from 'react';

const noop = () => {};

export const TableContext = createContext({
  rows: [],
  setToLocalStorage: noop,
});
