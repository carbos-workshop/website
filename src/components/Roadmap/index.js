import React from 'react'
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import { styles } from './styles'

function getSteps() {
  return [
    'Select campaign settings', 
    'Create an ad group', 
    'Create an ad',
    'sadf'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1: Select campaign settings...';
    case 1:
      return 'Step 2: What is an ad group anyways?';
    case 2:
      return 'Step 3: This is the bit I really care about!';
    case 3:
      return 'Step 4: This is the bit I really care about!';
    default:
      return 'Unknown step';
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
          <Typography>{getStepContent(activeStep)}</Typography>
        </div>

      </div>
    </div>
  )
}