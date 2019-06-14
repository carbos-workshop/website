import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red, yellow, grey } from '@material-ui/core/colors/';

const theme = responsiveFontSizes(createMuiTheme({
  spacing: 4,
  typography: {
    useNextVariants: true,
    fontFamily: 'Oxygen',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
  },
  palette: {
    type: 'dark',
    primary: {
      main: red[500],
      dark: red[600],
    },
    secondary: {
      light: yellow[100],
      main: yellow[400],
      dark: yellow[600],
    },
    background: {
      default: grey[900]
    }
  },
  overrides: {
    MuiTouchRipple: {
      root: {
        color: '#bdbdbd',
      },
    },
    MuiButton: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.08)'
        }
      }
    }
  },
}));

// set all instances of font-family to Oxygen
Object.keys(theme.typography).forEach( key => {
  if (typeof key === 'object'){
      key.fontFamily = '"Oxygen", "Helvetica", "Arial", sans-serif"'
  }
});

export default theme;
