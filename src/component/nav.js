import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import {Tab, Drawer, Button} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import img from '../img/herc.svg';
import {Grid, Paper} from '@material-ui/core';
import Media from 'react-media';
import Zoom from 'react-reveal/Zoom';
import Spin from 'react-reveal/Spin';
// import Button from '@material-ui/core/Button';
import AlertDialogSlide from './login'
// import { ENTERED } from 'react-transition-group/Transition';


const myStyle= {
	width: {
		marginTop: '9px',
		width: '100%'
	},
	marg: {
		marginLeft: '10em'
	},
	awidth: {
		minWidth: "10px",
		marginTop: '9px'
	},
	block: {
		display: 'block',
		width: '100%'
	},
	root: {
		flexGrow: '1'
	},
	fontsize: {
		fontSize: '1.5rem'
	},
	shadow: {
		boxShadow: 'none',
		position: 'absolute',
		background: 'linear-gradient(rgb(0, 0, 0, 0.4), rgba(46, 151, 160, 0))'
	},
	justifycenter: {
		display: 'flex',
		justifyContent: 'center'
	},
	justifyflexend:{
		display: 'flex',
		justifyContent: 'flex-end'
	},
	textacolor: {
		color: 'rgb(255, 255, 255)'
	}
}

class NavTabs extends Component {
	constructor(props){
		super(props)
		this.state = {
			openclose: false,
			sampleopen: false
		}
	}
	sample=()=>{
		this.setState({
			openclose: this.state.openclose === false ? true : false,
			sampleopen: this.state.sampleopen === false ? true : false
		})
	}


	render(){
		return (
			<NoSsr>
				<div className={`hersvg`} style={myStyle.root}>
					<AppBar position="static" style={myStyle.shadow}>
						<Media query="(max-width: 1110px)">
							{matches =>
								matches ? (
									<React.Fragment>
										<Tabs>
											<Button onClick={this.sample} className="my-3"><i class="fas fa-bars" style={myStyle.fontsize}></i></Button>
										</Tabs>
										<Drawer
											open={this.state.openclose}
											variant="temporary"
											anchor="left"
										>
											{this.state.sampleopen === false ? null : (
												<React.Fragment>
													<Button onClick={this.sample} className="ml-2 mt-3 text-left py-2 my-2" style={myStyle.block}>
														<Spin duration={200} count={2}>
															<i className="fas fa-bars" style={myStyle.fontsize}></i>
														</Spin>
													</Button>
													<Zoom duration={500} cascade>
														<Button to="/" component={NavLink} className="py-3" style={myStyle.block}>Home</Button>
														<Button to="/ourcompany" component={NavLink} className="py-3" style={myStyle.block}>Our Company</Button>
														<Button to="/product&services" component={NavLink} className="py-3" style={myStyle.block}>Product & Services</Button>
														<Button to="/partnership" component={NavLink} className="py-3" style={myStyle.block}>Partnership</Button>
														<Button to="/responsibility" component={NavLink} className="py-3" style={myStyle.block}>News</Button>
														<Button to="/contact" component={NavLink} className="py-3" style={myStyle.block}>Contact Us</Button>
														<div><AlertDialogSlide {...this.props}/></div>
													</Zoom>
												</React.Fragment>
											)}
										</Drawer>
									</React.Fragment>
								) : (
									<Tabs style={myStyle.textacolor}>
										<Grid item lg={4} md={3} style={myStyle.justifycenter}>
											<Tab to="/" component={NavLink} style={myStyle.awidth} className="icimg"></Tab>
										</Grid>
										<Grid item lg={7} md={8} style={myStyle.justifyflexend} >
											<Tab label="Our Company" to="/ourcompany" component={NavLink} style={myStyle.awidth} className="h-color-blue"></Tab>
											<Tab label="Product & Services" to="/product&services" component={NavLink} style={myStyle.awidth} className="h-color-blue"></Tab>
											<Tab label="Partnership" to="/partnership" component={NavLink} style={myStyle.awidth} className="h-color-blue"></Tab>
											<Tab label="Responsibility" to="/responsibility" component={NavLink} style={myStyle.awidth} className="h-color-blue"></Tab>
											<Tab label="News" to="/news" component={NavLink} style={myStyle.awidth} className="h-color-blue"></Tab>
											<Tab label="Contact Us" to="/contact" component={NavLink} style={myStyle.awidth} className="h-color-blue"></Tab>
										</Grid>
										<Grid item lg={1} md={1}>
											<AlertDialogSlide {...this.props}/>
										</Grid>
									</Tabs>
								)
							}
						</Media>
					</AppBar>
				</div>
			</NoSsr>
		);
	}
}

export default NavTabs;