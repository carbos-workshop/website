import { makeStyles } from '@material-ui/core/styles';

let stripeHeight = 100;
export const styles = makeStyles(theme => ({
  root: {

  },
  heroTextWrapper: {
    marginTop: '20vh',
    marginBottom: '175px',
    padding: `0 20% 0 10%`,
  },
  heroText:{
    lineHeight: '1.3',
  },
  heroImageWrapper: {
    opacity: '0.5',
    display: 'flex',
    paddingRight: theme.spacing(5),
    marginTop: `-${stripeHeight / 2}px`,
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
    }
    
  },
  heroParalaxWrapper: {
    marginBottom: `-${stripeHeight * 2}px`,
    marginTop: `-${stripeHeight * 2}px`,
    display: 'flex',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      marginBottom: `-${stripeHeight}px`,
      marginTop: `-${stripeHeight}px`,
    },
  },
  heroParalaxLogo: {
    height: '400px',
    [theme.breakpoints.down('sm')]: {
      height: '180px'
    },
  },
  stripeDividerWrapper: {
    marginTop: `-${stripeHeight * 2}px`,
    height: `${stripeHeight * 2}px`,
    overflow: 'hidden',
  },
  stripeDivider: {
    boxShadow: '0px 3px 10px 5px rgba(0,0,0,0.51)',
    height: `${stripeHeight * 2}px`,
    width: '110%',
    transform: 'translateY(100px) translateX(-5%) rotate(5deg)',
    background: 'white'
  },
  sectionDividerEnd: {
    transform: 'rotate(180deg) translateY(-200px)',
  },
  scrollSection: {
    background: 'transparent',
    visibility: 'hidden',
    transform: 'translateY(-55px)',
  },
  faqSection:{
    transform: 'translateY(55px)',
  },
  whiteScrollSection: {
    background: 'white'
  },
}));