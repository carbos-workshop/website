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
      ask: 'What are carbon offsets?',
      answer: "Carbon offsets are a way to compensate for greenhouse gas emissions.  When a business or individual is responsible for excessive greenhose gas production, they can compensate by sponsoring the removal of those greenhouse gasses from the atmosphere.  Land conservation is one of many carbon-negative actions that can be used to offset emissions."
    },
    {
      ask: 'What is carbon neutrality?',
      answer: 'When a business or individual sponsors atmospheric greenhouse gas prevention or removal equivolent to the amount of greenhouse gases they are responsible for emitting, that person or business becomes carbon neutral.  They have fully compensated for all harm they have done to the atmosphere.'
    },
    {
      ask: 'What is a carbon footprint?',
      answer: "A 'carbon footprint' is the amount of greenhouse gasses (typically carbon dioxide) that an individual or business is responsible for emitting over a period of time, usually a year."
    },
    {
      ask: 'What are ecosystem services?',
      answer: "'Ecosystem Services' is an umbrella term used to describe the array of benefits provided to humans by the natueral environment.  Water filtration, flood prevention, pest control, and air purification are all examples of ecosystem services derived from local land conservation.  Only by creating localized carbon offsets can businesses and individuals ensure the preservation of ecosystem services– relying on distant or offshore land for conservation deprives the local community of irreplacable ecosystem services. "
    },
    {
      ask: 'What is carbon worth?',
      answer: 'More than 40 governments worldwide have decided to price or tax carbon according to the negative impacts of carbon emission.  Pricing specifics can fluctuate, but on average carbon costs $15-$30 per tonne.'
    },
    {
      ask: "How can Carbos help me or my business become carbon neutral?",
      answer: 'Carbos allows you to source carbon offsets from their local community, providing an avenue to achieve carbon neutrality while preserving local ecosystem services.  Whether you want to build your own offsets through conservation action or sponsor the actions already being untertaken in the community, Carbos provides a platform through which you can help combat climate change at the scale that makes sense for you.'
    },
    {
      ask: "I'm not familiar with Ethereum and Blockchain.  Can I still use Carbos?",
      answer: 'We rely on blockchain to provide transparency and security to the carbon offsetting process.  Our interface makes interacting with the blockchain simple, but you will need an Ethereum wallet in order to create or buy offsets on our platform.',
      link: {
        text: ' We suggest getting started with ',
        link: () => (
          <a className={classes.link} href="https://metamask.io/">Metamask</a>
        )
      }
    },
    {
      ask: 'How do I get started?',
      answer: "We're currently developing our application beta, which we expect to release in early 2020.  Until then stay tuned for updates from our team!"
    },
  ]
  
  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.title} variant="h4">
          Frequently Asked Questions
        </Typography>

      {
        questions.map( (question, i) => (
          <ExpansionPanel key={i}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content">
              <Typography variant="subtitle2">{question.ask}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body2">
                {question.answer}
                {
                  question.link 
                  ? 
                  <span>
                    { question.link.text }
                    < question.link.link  />.
                  </span>
                  : null
                }
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))
      }

    </div>
  </div>
  )
}