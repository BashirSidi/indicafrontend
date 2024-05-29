import { createTheme } from '@mui/material/styles';
import { CSSObject } from '@mui/system';

const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '50px',
          '@media (max-width: 600px)': {
            fontSize: '30px', 
          },
          color: '#1a2c25',
        } as CSSObject,
      },
    },
  },
});

export default theme;
