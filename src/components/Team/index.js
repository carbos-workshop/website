import React from 'react'
import { styles } from './styles'
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames'
import {TeamMember} from './TeamMember'
import Grid from '@material-ui/core/Grid';

// image imports
import NathanImage from '../../images/people/nathan.tutchton.jpg'
import AlekImage from '../../images/people/alek.tutchton.jpg'
import GoCode from '../../images/partners/goCode.png'
import EthDenver from '../../images/partners/ethdenver.png'
import Xi from '../../images/partners/xi.png'

const teamMembers = [
  {
    name: 'Nathan Tutchton',
    title: 'Developer, Founder',
    image:NathanImage,
    position: 'left'
  },
  {
    name: 'Alek Tutchton',
    title: 'Developer, Founder',
    image: AlekImage,
    position: 'center'
  },
]

export const Team = props => {
  const classes = styles();
  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.title} variant="h4">
          Our Team
        </Typography>

        {/* team members */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            {
              teamMembers.map(info => (
              <Grid item sm={4} xs={6} key={info.name}>
                <TeamMember info={info} />
              </Grid>
              ))
            }
          </Grid>
        </Grid>

        <Typography className={classNames([classes.title, classes.otherTitle])} variant="h4">
          Our Partners
        </Typography>
        
        {/* parthnesr */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Grid item sm={2} xs={3}>
              <div className={classes.partnerLogo} style={{
                backgroundImage: `url(${GoCode})`
              }}></div>
            </Grid>
            <Grid item sm={2} xs={3}>
              <div className={classes.partnerLogo} style={{
                backgroundImage: `url(${Xi})`
              }}></div>
            </Grid>
            <Grid item sm={2} xs={3}>
              <div className={classes.partnerLogo} style={{
                backgroundImage: `url(${EthDenver})`
              }}></div>
            </Grid>

          </Grid>
        </Grid>

      </div>
    </div>
  )
}