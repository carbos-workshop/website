import React, { useContext } from 'react'
import { HeaderContext } from '../../shared/contexts/context'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { styles } from './styles'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CarbosText from '../../images/carbos_text_black.svg'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames'

let lastScrollY = 0;
let ticking = false;

class Header extends React.Component {
  static contextType = HeaderContext
  constructor(props) {
    super(props);
    this.headerElement = React.createRef()
    this.state = {
      scroll: 0,
      ticking: false,
      menuOpen: false,
      elementTop: 1000, //temp element top,
      // showHeader: false,
    }
  }

  componentWillMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidMount(){
    let bodyRect = document.getElementById('root').getBoundingClientRect();
    let elemRect = this.headerElement.current.getBoundingClientRect();

    //negative page margins mean this elements top is only relavent in relative to the document body
    let trueElementTop = elemRect.top - bodyRect.top
    this.setState({
      elementTop: trueElementTop,
      showHeader: (window.scrollY >= trueElementTop)
    })
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        //is header hidden and window has past breakpoint
        if ((this.state.scroll >= this.state.elementTop) && !this.state.showHeader) {
          this.setState({
            scroll: lastScrollY,
            showHeader: true
          })
        }

        //is header shown but window is under the breakpoint 
        else if ((this.state.scroll <= this.state.elementTop) && this.state.showHeader){
          this.setState({
            scroll: lastScrollY,
            showHeader: false
          })
        }

        else {
          this.setState({
            scroll: lastScrollY
          })
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ menuOpen: open });
  }

  render(){
    const { classes } = this.props;

    const links = this.props.links.map( link => (
      link.disabled 
      ?
        <Button 
          className={classNames([
            classes.button,
            classes.disabled
          ])}
          disableRipple={true}
          key={link.name}
          disabled={true}>
          { link.name }
        </Button>
      :
      <Link 
          key={link.name}
          activeClass="active" 
          to={ link.name } 
          spy={true} 
          smooth={true} 
          offset={50} 
          onSetActive={()=>{this.context.dispatch({type: 'SET_ACTIVE_LINK', name: link.name })}}
          duration={500} >
          <Button 
              className={classNames([
                  classes.button,
                  (this.props.activeLink === link.name
                  ? classes.active 
                  : 'null')
              ])}
              onClick={()=>{this.context.dispatch({type: 'SET_ACTIVE_LINK', name: link.name })}}
              disableRipple={true}
              color="primary">
              { link.name }
          </Button>
      </Link>
      )
  );

    return(
      <div ref={this.headerElement} className={classNames([
        classes.root,
        (this.state.showHeader ? classes.showHeader : classes.hideHeader)
      ])}>
        <AppBar position="fixed" classes={{
          positionFixed: classes.headerRoot
        }}> 
          <Toolbar>
          <Button
            className={classes.button}
            disableRipple={true}
            onClick={()=>{
              this.context.dispatch({type: 'SET_ACTIVE_LINK', name: null })
              scroll.scrollToTop()
            }}>
            <img className={classes.homelink} src={CarbosText} alt="carbos"/>
          </Button>

          <div className={classes.desktopMenu}>
            <Grid 
              container 
              direction="row"
              justify="flex-end"
              alignItems="center">
                {
                  links.map( (link, i) => (
                    <Grid item xs key={i} className={classes.flexEnd}>
                      { link }
                    </Grid>
                  ))
                }
            </Grid>
          </div>

          <div className={classes.mobileMenu}>
            <Button color="primary" onClick={this.toggleDrawer(true)}>
              <MenuIcon fontSize="large"/>
            </Button>

            <SwipeableDrawer
              classes={{paper:classes.sidenav}}
              anchor="right"
              open={this.state.menuOpen}
              onClose={this.toggleDrawer(false)}
              onOpen={this.toggleDrawer(true)}>
              {
                links.map( (link, i) => (
                  <List key={i}>														
                    <ListItem>
                      { link }
                    </ListItem>
                  </List>
                ))
              }
            </SwipeableDrawer>

          </div>

          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
