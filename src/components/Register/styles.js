import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(20),
  },
  container: {
    margin: '0 15%',
    paddingTop: theme.spacing(5),
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
    marginBottom: theme.spacing(5)
  },
  message: {
      textAlign: 'center',
      fontSize: theme.typography.pxToRem(15),
      fontWeight: 500
  },
  button: {
    marginTop: theme.spacing(8),
    width: '100%'
  },
  textField: {
    width: '100%',
  },
  formControl: {
    width: '100%',
  },
  registerRow: {
    marginTop: theme.spacing(4)
  }
  
}))