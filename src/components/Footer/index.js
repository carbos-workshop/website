import React from 'react'
import { styles } from './styles'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CarbosLogo from '../../images/logo.svg'
import TwitterSvg from '../../shared/logos/TwitterSvg.js'
import EmailSvg from '../../shared/logos/EmailSvg.js'
import GithubSvg from '../../shared/logos/GithubSvg.js'
import Grid from '@material-ui/core/Grid';

const ReturnToTop = props => (
  <svg width={`${props.size}px`} height={`${props.size}px`} viewBox="0 0 19 17" version="1.1">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="return-top" transform="translate(-3.000000, -3.000000)">
            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
            <path d="M13,18 L21.17,18 L21.17,20 L3,20 L3,18 L11,18 L11,6.83 L5.41,12.41 L4,11 L12,3 L20,11 L18.58,12.42 L13,6.83 L13,18 Z" id="Combined-Shape" fill={props.color}></path>
        </g>
    </g>
  </svg>
)
export const Footer = props => {
  const classes = styles();

  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  return(
    <div className={classes.root}>
      <div className={classes.logo} style={{
        backgroundImage: `url(${CarbosLogo})`
      }}></div>
      <div className={classes.contact}>

        <Grid container spacing={3} justify="center">
          <Grid item >
            <a href="https://twitter.com/carbosproject" target="_blank" rel="noopener noreferrer"><TwitterSvg fill={''}/></a>
          </Grid>
          <Grid item >
            <a href="mailto:team@carbos.co"><EmailSvg fill={''} /></a>
          </Grid>
          <Grid item >
            <a href="https://github.com/carbos-workshop" target="_blank" rel="noopener noreferrer"><GithubSvg fill={''}/></a>
          </Grid>
        </Grid>
        
      </div>
      <div className={classes.return}>
        <Button className={classes.returnWrapperButton} onClick={()=> {scrollToTop()}}>
          <ReturnToTop size={18} color="#fff"/>
        </Button>
      </div>
    </div>
  )
}

