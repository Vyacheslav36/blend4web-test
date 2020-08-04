import { useCallback, useEffect, useState } from 'react';

const storageName = 'data';

const getStaticData = async () => {
  // eslint-disable-next-line no-undef
  const response = await fetch('/static/data.json');
  // eslint-disable-next-line no-return-await
  return response.json();
};

export const useData = () => {
  const [rows, setRows] = useState();

  const setToLocalStorage = useCallback((value) => localStorage.setItem(storageName, JSON.stringify(value)), []);
  const getFromStaticFile = useCallback(async () => {
    const staticData = await getStaticData();
    setToLocalStorage(staticData);
    setRows(staticData);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem(storageName)) getFromStaticFile();
    else setRows(JSON.parse(localStorage.getItem(storageName)));
  }, []);

  return { setToLocalStorage, rows };
};
