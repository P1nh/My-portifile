import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey, } from '@mui/material/colors';


let theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: grey[900],
    },
  },

    typography: {
      fontFamily: [
        "Rubik"
      ].join(','),
    },
    
  });
  ;
  theme = responsiveFontSizes(theme)

export default theme;