import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Slide, MenuItem} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
	container: {
	  display: 'flex',
	  flexWrap: 'wrap',
	},
	// textField: {
	// 	marginLeft: theme.spacing.unit,
	// 	marginRight: theme.spacing.unit,
	// 	width: 200
	//   }
  }));

function Transition(props) {
	return <Slide direction="down" {...props} />;
}

const AlertDialogSlide =()=> {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		name: '',
		password: 'asd'
	});

	const myStyle ={
		marg: {
			margin: '0 2.2em',
			marginTop: '16px'
		}
	}

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
		console.log(event.target.value)
		console.log(name)
		console.log(values)
	};
	const handleChange1 =(password) => event => {
		setValues({...values, [password]: event.target.value});
	}
	const [open, setOpen] = React.useState(false);
	const handleClickOpen=()=> {
		setOpen(true);
	}

	const handleClose =()=> {
		setOpen(false);
	}
	const handleLogin =()=>{

	}

	return (
		<div >
			<Button color="secondary" onClick={handleClickOpen} style={myStyle.marg}>
				Login
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
				conten
			>
				
				<DialogContent>
					<form noValidate autoComplete="off">
						<Grid item xs={12} sm={12}>
							<TextField
								error={true}
								id="standard-name"
								label="Name"
								value={values.name}
								onChange={handleChange('name')}
								margin="normal"
								defaultValue=''
								placeholder="asdasdasd"
								required={true}
								multiline={23}
								variant='filled'
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField
								id="standard-password-input"
								label="Password"
								type="password"
								value={values.password}
								onChange={handleChange1('password')}
								margin="normal"
							/>
						</Grid>
					</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={handleClose} color="primary">
							Login
						</Button>
					</DialogActions>
				
			</Dialog>
		</div>
	);
}

export default AlertDialogSlide;