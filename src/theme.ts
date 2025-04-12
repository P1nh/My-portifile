import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey, } from '@mui/material/colors';


let theme = createTheme({
  palette: {
    primary: {
      main: grey[800]
    },
    secondary: {
      main: grey[400]
    },
  },
});
  ;
  theme = responsiveFontSizes(theme)

export default theme;