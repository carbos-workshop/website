import React, { useReducer } from 'react';
import { withSnackbar } from 'notistack';

import { styles } from './styles'
import Typography from '@material-ui/core/Typography';
// import classNames from 'classnames';
import Grid from '@material-ui/core/Grid'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const axios = require('axios');

function Register(props) {
    const classes = styles();

      const inputLabel = React.useRef(null);
      const [labelWidth, setLabelWidth] = React.useState(0);
      React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
      }, []);
    

		const initialState = {	
			firstname: '',
			lastname: '',
			email: '',
			interest: 'all',
		}
	
		const reducer = (state, action) => {
			switch (action.type) {
				case 'UPDATE_FIRSTNAME':
					return { 
						...state, 
						firstname: action.value 
					};
				case 'UPDATE_LASTNAME':
					return { 
						...state, 
						lastname: action.value 
					};
				case 'UPDATE_EMAIL':
					return { 
						...state, 
						email: action.value 
					};
				case 'UPDATE_INTEREST':
					return { 
						...state, 
						interest: action.value 
					};
				default:
					throw new Error('Unexpected action');
			}
		}
	
		const [ state, dispatch ] = useReducer(reducer, initialState);
		
		
	function register(){
		axios.post(
			'https://x0edl0f7dc.execute-api.us-east-1.amazonaws.com/carbos/crm',
			{
				firstname: state.firstname,
				lastname: state.lastname,
				email: state.email,
				interest: state.interest
			},
			{
				headers: { 'Content-Type': 'application/json' }
			}
		)
		.then(res => {
			console.log(res)
			if (res.data.statusCode !== 200) {
				props.enqueueSnackbar(JSON.parse(res.data.body).message)
			}
			else {
				props.enqueueSnackbar('Successfully subscribed.')
			}
		})
		.catch(() => props.enqueueSnackbar('Unexpected Failure'));
	}


  return (
    <div className={classes.root}>
    <div className={classes.container}>
        <Typography className={classes.title} variant="h4">
              Register
        </Typography>

        <Typography variant="body1" className={classes.message}>
            Sign up to get important updates from our team!
        </Typography>

        <Grid container className={classes.registerRow}>

        <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField
						required
								label="First Name"
								name="firstname"
                className={classes.textField}
                value={state.firstname}
                onChange={(e)=>{dispatch({type: 'UPDATE_FIRSTNAME', value: e.target.value})}}
                margin="normal"
                variant="outlined"/>
            </Grid>
            <Grid item xs={6}>
                <TextField
								required
										label="Last Name"
										name="lastname"
                    className={classes.textField}
                    value={state.lastname}
									onChange={(e)=>{dispatch({type: 'UPDATE_LASTNAME', value: e.target.value})}}
                    margin="normal"
                    variant="outlined"/>
            </Grid>
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
						label="Email"
						name="email"
            className={classes.textField}
            value={state.email}
									onChange={(e)=>{dispatch({type: 'UPDATE_EMAIL', value: e.target.value})}}
            margin="normal"
            variant="outlined"/>
        </Grid>
        <Grid item xs={12} className={classes.registerRow}> 
            <FormControl variant="outlined" className={classes.formControl}>
							<InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
							I'm interested in...
							</InputLabel>
							<Select
							value={state.interest}
									onChange={(e)=>{dispatch({type: 'UPDATE_INTEREST', value: e.target.value})}}
							input={<OutlinedInput labelWidth={labelWidth} name="interest" />}
							>
							<MenuItem value={'all'}>Everything</MenuItem>
							<MenuItem value={'buyer'}>Buying Offsets</MenuItem>
							<MenuItem value={'landowner'}>Creating Offsets</MenuItem>
							</Select>
            </FormControl>
        </Grid>

        <Grid item xs={12}>
					<Button 
						variant="contained" 
						color="primary" 
						disabled={
							!Boolean(
								state.email
								&& state.firstname
								&& state.lastname
							)
						}
						className={classes.button} 
						onClick={register}>
							Submit
					</Button>     
        </Grid>

        </Grid>
       
    </div>
    </div>
    );
}

export default withSnackbar(Register)