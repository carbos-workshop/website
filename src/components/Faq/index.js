import React from 'react'
import Typography from '@material-ui/core/Typography';
import { styles } from './styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Faq = props => {
  const classes = styles();

  const questions = [
    {
      ask: 'Questions?',
      answer: 'asdffdsa. asdf.'
    }
  ]
  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.title} variant="h4">
          Frequently Asked Questions
        </Typography>

      {
        questions.map( question => (
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography variant="subtitle2">{question.ask}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body2">
                {question.answer}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))
      }

    </div>
  </div>
  )
}