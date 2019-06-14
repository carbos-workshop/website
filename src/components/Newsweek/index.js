import React from 'react'
import { styles } from './styles'
import Typography from '@material-ui/core/Typography';
import QuoteLeft  from '../../images/quote_left.svg'
import QuoteRight from '../../images/quote_right.svg'
import classNames from 'classnames'

export const Newsweek = props => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>

      <Typography className={classNames([classes.title, classes.blackText])} variant="h4"> 
        What is Carbos?
      </Typography>
      <div className={classes.subtitleWrapper}>
        <Typography className={classNames([classes.subtitle, classes.blackText])} variant="h5"> 
          <img alt="quote-l" src={QuoteLeft} className={classNames([classes.quoteImage, classes.quoteLeft])}/> 
          <span className={classes.subtitleText}>... a platform that empowers normal people that take conservation action by allowing them to create and sell carbon offsets.</span>
          <img alt="quote-r" src={QuoteRight} className={classNames([classes.quoteImage, classes.quoteRight])}/>
        </Typography>
      </div>

      <div className={classes.videoWrapper}>
        <iframe title="newsweek-embed" className={classes.videoFrame} width="560" height="315" src="https://www.youtube.com/embed/21_sk4yRjxs?start=30" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      </div>
    </div>
  )
}