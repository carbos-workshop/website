import React from 'react'
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import { styles } from './styles'

function getSteps() {
  return [
    'Q3 2019', 
    'Q4 2019', 
    'Q1 2020',
    // 'Q2 2020'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return ['Pilot Launch', 'Exponential Impact Accelerator' ];
    case 1:
      return ['Beta Launch', 'IPFS Deployment', 'Tree/Shrub Calculator and API' ];
    case 2:
      return ['Application Launch', 'ETH 2.0 Updates', 'Footprint Calculator and API' ];
    // case 3:
    //   return ['Q2 2020 text'];
    default:
      console.error('Unknown step')
      return [];
  }
}


export const Roadmap = props => {
  const classes = styles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState( {0:true} );//first step completed
  const steps = getSteps();

  const handleStep = step => () => {
    setActiveStep(step);
  };

  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.title} variant="h4">
          Our Roadmap
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          A quick look at our upcoming goals and development
        </Typography>

        <Stepper 
          nonLinear 
          activeStep={activeStep} 
          alternativeLabel={true}
          className={classes.stepper}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton 
                  onClick={handleStep(index)} 
                  disableTouchRipple
                  completed={completed[index]}>
                  {label}
                </StepButton>
              </Step>
            ))}
        </Stepper>

        {/* stepper content */}
        <div>
          <ul>
            {
              getStepContent(activeStep).map((text, i) => (
                <li key={i}>
                  <Typography variant="subtitle2">
                    { text }
                  </Typography>
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </div>
  )
}