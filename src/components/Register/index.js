import React from 'react';
import { styles } from './styles'
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const axios = require('axios');
const hubspotURL = 'https://api.hubapi.com/contacts/v1/contact/?hapikey=cd6049fe-4a4f-4387-8351-c4ee796f38b1';

export default function Register() {
    const classes = styles();
    const [state, setValues] = React.useState({
      firstName: '',
      lastName: '',
      email: ''
    });

const handleChange = name => event => {
    setValues({ ...state, [name]: event.target.value });
  };

const registerButton = (firstName, lastName, email) => {
    //Send POST to hubspot to add to CRM

    //TEMP 
let user = {
    properties: [
        {
            property: 'firstname',
            value: 'asdf'
        },
        {
            property: 'lastname',
            value: 'asdf'
        },
        {
            property: 'email',
            value: 'dog@food.com'
        }
    ]
}

var headers = {
    'Content-Type': 'application/json'
}

// axios({
//     method: 'post',
//     url: hubspotURL,
//     headers: {  'Content-Type': 'application/json' },
//     data: JSON.stringify(user),
//   });

    axios.post(
        hubspotURL, JSON.stringify(user), {  headers: headers }
    )
    .then(console.log)
    .catch(console.log)

}

  return (
    <div className={classes.root}>
    <div className={classes.container}>
        <Typography className={classes.title} variant="h4">
              Register
        </Typography>

        <p className={classes.message}>Sign up to recive emails about our progress and how to join!</p>

        <form className={classes.container} noValidate autoComplete="off">
        <TextField
            id="firstName"
            label="First Name"
            className={classes.textField}
            value={state.firstName}
            onChange={handleChange('firstName')}
            margin="normal"
            variant="outlined"
        />
        <TextField
            id="lastName"
            label="Last Name"
            className={classes.textField}
            value={state.lastName}
            onChange={handleChange('lastName')}
            margin="normal"
            variant="outlined"
        />
        <TextField
            required
            id="email"
            label="email"
            className={classes.textField}
            value={state.email}
            onChange={handleChange('email')}
            margin="normal"
            variant="outlined"
        />
        <Button variant="contained" color="primary" className={classes.button} onClick={() => {
            registerButton(state.firstName, state.lastName, state.email)}}>
            Submit
        </Button>     
        </form>
    </div>
    </div>
    );
}