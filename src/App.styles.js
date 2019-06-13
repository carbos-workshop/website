import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
  root: {

  },
  heroTextWrapper: {
    marginTop: '35vh',
    marginBottom: '150px',
    padding: `0 20% 0 10%`
  },
  heroImageWrapper: {
    opacity: '0.5',
    display: 'flex',
    paddingRight: theme.spacing(5),
    marginTop: '-80px'
  },
  heroParalaxWrapper: {
    marginBottom: '-200px',
    marginTop: '-200px',
    display: 'flex',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  heroParalaxLogo: {
    height: '400px',
  },
  heroTransition: {
    marginTop: '-200px',
    width: '100%',
    height: '0',
    borderRight: '100vw solid transparent',
    borderLeft: '0 solid transparent',
    borderBottom: '200px solid #fff',
    position: 'relative',
  },
  projectSection: {
    height: '100vh',
    background: 'white',
    zIndex: 2
  }
}));