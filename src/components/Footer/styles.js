import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
  root: {
    backgroundColor: '#121212',
    width: '100%',
    minHeight: '64px',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridRowGap: '1em',
    justifySelf: ' flex-end',
  },
  logo: {
    gridColumnStart: '2',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    [theme.breakpoints.up('md')]: {
      margin: '1em'
    },
  },
  contact: {
    gridColumnStart: '3',
    gridColumnEnd: '11',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    textAlign: 'center',
  },
  return: {
    gridColumnStart: '12',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  returnWrapperButton:{
    padding: '0',
    minWidth: '0',
    height: '100%',
    display: 'flex',
  },
}))