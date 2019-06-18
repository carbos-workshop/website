import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = makeStyles(theme => ({
  // root: {
  //   textAlign: 'left',
  //   padding:  '0 10%',
  //   display: 'flex',
  //   marginBottom: '10%',
  // },
  card: {
    flex:'1',
    margin: '5px',
  },
  avatarImageWrapper: {
    marginBottom: '1em',
  },
  avatarImage: {
    borderRadius: '50%',
    margin: '0 auto',
    background: '#DDD',
    height: '150px',
    width: '150px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      height: '100px',
      width: '100px',
     },
  },
  name: {
    margin: '0 5%',
    textAlign: 'center'
  },
  position: {
    margin: '0 5%',
    textAlign: 'center'
  },
}))

export const TeamMember = props => {
  const classes = styles()
  return (
    <div>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.avatarImageWrapper}>
              <div className={classes.avatarImage} style={
                {backgroundImage: `url(${props.info.image})`,
                backgroundPosition: props.info.position
              }}>
              </div>
            </div>
            <Typography className={classes.name} variant="body1" component="h2">
              { props.info.name }
            </Typography>
            <Typography className={classes.position} color="textSecondary">
              { props.info.title}
            </Typography>
          </CardContent>
        </Card>
    </div>
  )
}

// export default withStyles(styles)(TeamMember)