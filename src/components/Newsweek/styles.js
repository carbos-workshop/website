import { makeStyles } from '@material-ui/core/styles';

let quoteWidth = 48
export const styles = makeStyles(theme => ({
  blackText: {
    color: 'black',
    background: 'white',
  },
  root: {
    background: 'white',
  },
  container: {
    margin: '0 15%',
    paddingTop: '48px',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      margin: '0 5%',
      width: '90%',
    },
  },
  title: {
    // color: 'black',
    // background: 'white',
  },
  subtitle: {
    marginTop: theme.spacing(10),
    margin: theme.spacing(15),
    background: 'transparent',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      marginTop: theme.spacing(5),
    },
  },
  subtitleText: {
    zIndex: '3',
    color: 'rgba(0,0,0,.65)',
    marginTop: `-${quoteWidth/2}px`,
    lineHeight: 1
  },
  quoteImage: {
    width: `${quoteWidth}px`,
    zIndex:'-1',
  },
  quoteRight: {
    marginBottom: `-${quoteWidth/3}px`,
  },
  quoteLeft: {
    marginLeft: `-${quoteWidth}px`,
    marginBottom: `-${quoteWidth/6}px`,
  },
  videoWrapper: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(10),
    }
  },
  videoFrame: {
    margin: '0 auto',
  },
}));