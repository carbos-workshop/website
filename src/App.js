import React , { useReducer } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import darkTheme from './themes/dark.theme.js';

import CarbosLogo from './images/carbos_logo.svg'

//component imports
import { HeroHeader } from './components/HeroHeader'
import Header from './components/Header'
import { HeaderContext } from './shared/contexts/context'

import { styles } from  './App.styles.js'

function App() {
  const classes = styles();

  const ParallaxHeroImage = () => (
    <Parallax y={[100, -20]} tagOuter="figure">
        <img src={CarbosLogo} className={classes.heroParalaxLogo}/>
    </Parallax>
  );

  const initialState = {
    links: [
      { name: 'project', disabled: false },
      { name: 'news', disabled: false },
      { name: 'app', disabled: true },
      { name: 'contact', disabled: false }

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
        <CssBaseline />
       <ParallaxProvider>
        <div className={classes.root}>
          <div>
            <HeaderContext.Provider value={{ state, dispatch }}>
              <HeroHeader 
                activeLink={state.activeLink}
                links={state.links}
                reducer={reducer}
              />
            </HeaderContext.Provider>

            <div className={classes.heroTextWrapper}>
              <Typography className={classes.heroText} variant="h1">
                You are part of the solution to climate change
              </Typography>
            </div>
            <div className={classes.heroParalaxWrapper}>
              <ParallaxHeroImage />
            </div>

            <div className={classes.stripeDividerWrapper}>
              <div className={classes.stripeDivider}></div>
            </div>

            <HeaderContext.Provider value={{ state, dispatch }}>
              <Header
                activeLink={state.activeLink}
                links={state.links}
                reducer={reducer}
              />
            </HeaderContext.Provider>
            
            <div name="project" className={classes.projectSection}>
              <span style={{color: 'black'}}>we want to make sure you get compensated for your contribution</span>
            </div>
          </div>
        </div>
        </ParallaxProvider>
      </MuiThemeProvider>
    </React.Fragment>
  );
}
//<div className={classes.heroTransition}></div>
export default App;
