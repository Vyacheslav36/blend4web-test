import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'normal',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 'normal',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 'normal',
    },
    h4: {
      fontSize: '1.25rem',
    },
    h5: {
      fontSize: '1.125rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
});

export default theme;
