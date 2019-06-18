import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(20),
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
    marginBottom: theme.spacing(12)
  },
  otherTitle: {
    marginTop: theme.spacing(12),
  },
  partnerLogo:{
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '81px'
  }
}))