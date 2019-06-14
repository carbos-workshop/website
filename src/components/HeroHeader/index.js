import React , { useReducer, useContext } from 'react';
import { HeaderContext } from '../../shared/contexts/context'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import CarbosText from '../../images/carbos_text_white.svg'
import { styles } from './styles'
import classNames from 'classnames'

export const HeroHeader = props => {
    const classes = styles();
    const { dispatch } = useContext(HeaderContext);
    const [state, setState] = React.useState({
        menuOpen: false,
    });
    const toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, menuOpen: open });
    }

    const links = props.links.map( link => (
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
            duration={500} >
            <Button 
                className={classNames([
                    classes.button,
                    (props.activeLink === link.name
                    ? classes.active 
                    : 'null')
                ])}
                onClick={()=>{dispatch({type: 'SET_ACTIVE_LINK', name: link.name })}}
                disableRipple={true}
                color="primary">
                { link.name }
            </Button>
        </Link>
        )
    );

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                {/* homelink */}
                <Grid item xs={4}>
                    <Button
                        className={classes.button}
                        disableRipple={true}
                        onClick={()=>{
                            dispatch({type: 'SET_ACTIVE_LINK', name: null })
                            scroll.scrollToTop()
                        }}>
                        <img src={CarbosText} alt="carbos"/>
                    </Button>
                </Grid>
                
                <div className={classes.desktopMenu}>
                    <Grid 
                        container 
                        direction="row"
                        justify="flex-end"
                        alignItems="center">
                        {
                            links.map( (link, i) => (
                                <Grid item xs key={i} className={classes.center}>
                                    { link }
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>

                <div className={classes.mobileMenu}>
									<Button color="primary" onClick={toggleDrawer(true)}>
										<MenuIcon fontSize="large"/>
									</Button>

									<SwipeableDrawer
										classes={{paper:classes.sidenav}}
										anchor="right"
										open={state.menuOpen}
										onClose={toggleDrawer(false)}
										onOpen={toggleDrawer(true)}>
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
            </Grid>

        </div>
    )
}