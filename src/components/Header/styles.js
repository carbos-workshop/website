export const styles = theme => ({
  root: {
    transition: 'opacity .33s cubic-bezier(.5,.93,.67,.97)',
  },
  headerRoot: {
    background: 'white',
    color: 'black'
  },
  showHeader: {
    opacity: 1
  },
  hideHeader:{
    opacity: 0,
    transition: 'none',
    transform: 'translateY(-100px)', //hack to get hidden header off screen without dismounting component
  },
  flexEnd: {
    display:'flex',
    justifyContent: 'flex-end',
  },
  homelink:{
    height: '24px',
  },
  desktopMenu:{
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
  button: {
    '&:hover': {
      background: 'transparent'
    },
    textTransform: 'lowercase',
    fontWeight: '300',
    fontSize: '16px',
    color: 'black',
    transition: 'color .33s cubic-bezier(.5,.93,.67,.97)',
  },
  active: {
    color: theme.palette.primary.main,
  },
  disabled: {
    color: 'rgba(0,0,0,.2) !important',
    pointerEvents: 'all !important',
    cursor: 'not-allowed !important'
  }
})