import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
  root: {
    background: 'white',
    color: 'black',
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
    background: 'white',
    color: 'black',
    marginBottom: theme.spacing(10),
  },
  textOnlyRow: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(8),
    paddingTop: 0,
  },
  textWithImage: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: theme.spacing(8),
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '50vw',
      margin: '0 auto',
      padding: '20px 0',
    },
  },
  imageSwapOrder: {
    [theme.breakpoints.down('sm')]: {
      order: '2'
     },
  },
  mobileFirst: {
    [theme.breakpoints.down('sm')]: {
     order: '1'
    },
  },
  // imageLeft: {},
  // imageRight: {},
}))