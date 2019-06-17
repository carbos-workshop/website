import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(30),
    marginBottom: theme.spacing(5),
  },
  container: {
    margin: '0 15%',
    paddingTop: theme.spacing(20),
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      margin: '0 5%',
      width: '90%',
    },
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(8),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 500,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover':{
      color: theme.palette.primary.light,
    },
    '&:active':{
      color: theme.palette.primary.main,
    }
  }
}))