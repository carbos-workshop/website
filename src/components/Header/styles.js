import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
  flexEnd: {
    display:'flex',
    justifyContent: 'flex-end',
  },
  root:{
    flexGrow: 1,
    padding: theme.spacing(2),
    margin: '0 10%',
    [theme.breakpoints.down('sm')]: {
      margin: '0 5%'
    },
  },
  desktopMenu: {
    flexGrow: 2,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  mobileMenu: {
    flexGrow: 2,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
  },
  sidenav: {
    // background: 'black',
  },
  button: {
    '&:hover': {
      background: 'transparent'
    },
    textTransform: 'lowercase',
    fontWeight: '300',
    fontSize: '24px',
    color: 'white',
    transition: 'color .33s cubic-bezier(.5,.93,.67,.97)',
  },
  active: {
    color: theme.palette.primary.main,
  },
}));