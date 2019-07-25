import React , { useReducer } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import darkTheme from './themes/dark.theme.js';
import classNames from 'classnames'
import CarbosLogo from './images/carbos_logo.svg'

//component imports
import { HeroHeader } from './components/HeroHeader'
import Header from './components/Header'
import { HeaderContext } from './shared/contexts/context'
import { Newsweek } from './components/Newsweek'
import { About } from './components/About'
import { Faq } from './components/Faq'
import  Register  from './components/Register'
// import { Roadmap } from './components/Roadmap'
import { Team } from './components/Team'
// import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


import { styles } from  './App.styles.js'

function App() {
  const classes = styles();

  const ParallaxHeroImage = () => (
    <Parallax y={[100, -20]} tagOuter="figure">
        <img alt="carbos-logo" src={CarbosLogo} className={classes.heroParalaxLogo}/>
    </Parallax>
  );

  const initialState = {
    links: [
      { name: 'about', register: false },
      { name: 'faq', register: false },
      // { name: 'roadmap', disabled: false },
      { name: 'team', register: false },
      // { name: 'contact', disabled: false },
      // { name: 'app', disabled: true },
      { name: 'register', register: true }
    ],
    activeLink: null
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_ACTIVE_LINK':
        return { 
          ...state, 
          activeLink: action.name 
        };
      default:
        throw new Error('Unexpected action');
    }
  }

  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <MuiThemeProvider theme={darkTheme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
       <ParallaxProvider>
        <div className={classes.root}>
          <div>
            {/* hero header */}
            <HeaderContext.Provider value={{ state, dispatch }}>
              <HeroHeader 
                activeLink={state.activeLink}
                links={state.links}
                reducer={reducer}
              />
            </HeaderContext.Provider>

            {/* hero content */}
            <div className={classes.heroTextWrapper}>
              <Typography className={classes.heroText} variant="h2">
                We're a passionate group building 
              </Typography>
              <Typography color="primary" variant="h2"> 
                climate change solutions that work 
              </Typography> 
              <Typography className={classes.heroText} variant="h2">
                for everyday people.
              </Typography>
              <div className={classes.buttonWrapper}>
              <Link 
                activeClass="active" 
                to={ 'register' } 
                spy={true} 
                smooth={true} 
                className={classes.button}
                offset={50} 
                duration={500} >
                  <Button 
                    variant="contained" 
                    color="primary"
                    size="large"
                    onClick={()=>{dispatch({type: 'SET_ACTIVE_LINK', name: 'register' })}}
                    >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className={classes.heroParalaxWrapper}>
              <ParallaxHeroImage />
            </div>

            <div className={classes.stripeDividerWrapper}>
              <div className={classes.stripeDivider}></div>
            </div>

            {/* static header */}
            <HeaderContext.Provider value={{ state, dispatch }}>
              <Header
                activeLink={state.activeLink}
                links={state.links}
                reducer={reducer}
              />
            </HeaderContext.Provider>
            
            {/* newsweek section */}
            <Newsweek />

            <div name="about" className={classNames([classes.scrollSection, classes.whiteScrollSection])}></div>
            <About />

            {/* divider */}
            <div className={classNames([classes.stripeDividerWrapper, classes.sectionDividerEnd])}>
              <div className={classes.stripeDivider}></div>
            </div>

            <div name="faq" className={classes.faqSection}></div>
            <Faq />

            {/* <div name="roadmap" className={classNames([classes.roadmapSection, classes.scrollSection])}></div>
            <Roadmap /> */}

            <div name="team" className={classNames([classes.teamSection, classes.scrollSection])}></div>
            <Team />

            <div name="register" className={classNames([classes.registerSection, classes.scrollSection])}></div>
            <Register />

            <Footer />

          </div>
        </div>
        </ParallaxProvider>
        </SnackbarProvider>
      </MuiThemeProvider>
    </React.Fragment>
  );
}
export default App;
