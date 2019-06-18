import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // marginTop: theme.spacing(30),
  },
  container: {
    margin: '0 15%',
    paddingTop: theme.spacing(15),
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      margin: '0 5%',
      width: '90%',
    },
  },
  title: {
    marginBottom: theme.spacing(2)
  },
  subtitle: {
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(8)
  },
  stepper: {
    background: 'transparent',
    padding: '24px 0'
  },
}))