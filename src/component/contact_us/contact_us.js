import React from 'react';
import { Typography, TextField, Button, Grid } from '@material-ui/core';

const myStyle = {
    fontsize: {
        fontSize: '2rem',
    },
    p: {
        fontSize: '1.5rem',
        color: '#9e9e9e',
        fontWeight: '300'
    },
    iconsize: {
        marginTop: '22px',
        marginRight: '10px', 
        fontSize: '2em'
    },
    grid: {
        padding: '0 15px'
    },
    textsize: {
        width: '90%'
    },
    block: {
        display: 'block'
    },
    margintext: {
        margin: '0 5em'
    },
    btnicon: {
        marginRight: '10px'
    },
    pstyle: {
        color: '#9e9e9e',
        marginBottom: '1rem'
    },
    icon: {
        marginRight: '10px'
    },
    ptitle: {
        color: '#1B1453',
        textShadow: 'none'
    }
}


const Contactmain = () =>{

    return(
       <div className="container">
            <section id="cotact">
                <Typography variant="h3" align="center" style={myStyle.fontsize} className="mb-5" >Contact us today</Typography>
                <div>
                    <Typography component="p" align="center" style={myStyle.p}>
                        Hercules Pharmaceuticals is committed to bringing the finest medical products 
                        to patients. We are ready to share our expertise and experience of the global market place.
                    </Typography>
                </div>
            </section>
            <hr className="my-5" />
            <section id="contactus" className="text-center">
                    
                <div className="row">
                    <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid} className="mb-4">
                        <Typography variant="h3" align="center" style={myStyle.fontsize} className="mb-4">
                            Email
                        </Typography>
                        <div className="justify-center">
                            <div style={myStyle.box}>
                                <i class="far fa-user" style={myStyle.iconsize}></i>
                                <TextField 
                                    label="Your Name"
                                    margin="dense"
                                    style={myStyle.textsize}
                                    className="mb-4"
                                />
                                <i class="far fa-envelope" style={myStyle.iconsize}></i>
                                <TextField 
                                    label="Email"
                                    margin="dense"
                                    style={myStyle.textsize}
                                    className="mb-4"
                                />
                                <i class="far fa-building" style={myStyle.iconsize}></i>
                                <TextField 
                                    label="Company"
                                    margin="dense"
                                    style={myStyle.textsize}
                                    className="mb-4"
                                />
                                <i class="fas fa-pencil-alt" style={myStyle.iconsize}></i>
                                <TextField 
                                    label="Message"
                                    margin="dense"
                                    multiline={true}
                                    rows="5"
                                    style={myStyle.textsize}
                                    className="mb-4"
                                />
                                <Button variant="raised" color="secondary"><i class="far fa-paper-plane" style={myStyle.btnicon}></i>Send</Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12} style={myStyle.grid} className="mb-4">
                        <Typography variant="h3" align="center" style={myStyle.fontsize} className="mb-4" align="center">
                            Location
                        </Typography>
                        <Typography component="p" style={myStyle.ptitle} align="center" className="mb-3">
                            <strong>Corporate Headquarters</strong> <br />
                            27 Seaview Boulevard <br/>
                            Port Washington, NY 11050
                        </Typography>
                        <Typography component="p" style={myStyle.ptitle} align="center">
                            350 Portwall Street<br/>
                            Houston, TX 77571
                        </Typography>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12} style={myStyle.grid} >
                        <Typography variant="h3" align="center" style={myStyle.fontsize} className="mb-4" align="center">
                            Call Us
                        </Typography>
                        <Typography component="p" style={myStyle.ptitle} align="center" className="mb-3">
                            <strong>Corporate HQ:</strong> <br />
                            1 (212) 390-8577 
                        </Typography>
                        <Typography component="p" style={myStyle.ptitle} align="center" className="mb-3">
                            <strong>Corporate Fax:</strong> <br />
                            1 (212) 390-8578   
                        </Typography>
                        <Typography component="p" style={myStyle.ptitle} align="center" className="mb-3">
                            <strong>Sales Contact:</strong> <br />
                            1 (800) 815-5800
                        </Typography>
                        <Typography component="p" style={myStyle.ptitle} align="center">
                            <strong>Hours of Operation:</strong> <br />
                            Mon to Fri 9:00 AM to 8:00 PM EST <br />
                            Sat and Sun 9:00 AM to 6:00 PM EST
                        </Typography>
                    </Grid>
                </div>

            </section>
            <hr className="my-5" />

            <section id="careers" className="text-center">
                <Typography variant="h3" align="center" style={myStyle.fontsize} className="mb-4" align="center">
                    Careers
                </Typography>

                <Typography variant="h3" align="center" style={myStyle.fontsize} className="mb-4" align="center">
                    Interested in joining the Hercules Pharmaceuticals team?
                </Typography>
                <Button variant="raised" color="secondary"><i className="fab fa-readme" style={myStyle.icon}></i>Read More</Button>
            </section>
        </div>
    );

}

export default Contactmain