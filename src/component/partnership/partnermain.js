import React from 'react';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import img from '../../img/all_logo.svg';


const myStyle = {
    font: {
        fontSize: '2rem'
    },
    grid: {
        padding: '0 15px'
    },
    img: {
        overflow: 'hidden',
        position: 'realative',
        maxWidth: '100%',
        height: 'auto',
        boxSizing: 'border-box'
    },
    iconsize: {
        marginTop: '22px',
        marginRight: '10px', 
        fontSize: '2em'
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
    box: {
        width: '35em',
        height: 'auto',

    },
    btnicon: {
        marginRight: '10px'
    },
    pstyle: {
        color: '#9e9e9e',
        marginBottom: '1rem'
    }
}

const Partnermaint =()=>{
    return(
        <div className="container">
            <section id="strategicpartners" className="text-center">
                <Typography variant="h3" align="center" style={myStyle.font} className="mb-5">
                    Strategic Partners
                </Typography>
                <div className="justify-center">
                    <Grid item lg={10} style={myStyle.grid}>
                        <img src={img} style={myStyle.img}/>
                    </Grid>
                </div>
            </section>
            <hr className="my-5" />
            <section id="partnerinquiries" className="text-center">
                <Typography variant="h3" align="center" style={myStyle.font} className="mb-4">
                    Partner Inquiries
                </Typography>
                 <div className="justify-center">
                    <Grid item lg={10} style={myStyle.grid}>
                        <Typography component="p" style={myStyle.pstyle}>
                            Our Business Development team works to identify opportunities to support companies’ goals of getting their products into 
                            the market. Hercules Pharmaceuticals has a long established record of successfully working with domestic and international 
                            business partners and looks to continue this trend moving forward. If you are interested in utilizing Hercules 
                            Pharmaceuticals distribution expertise and services, please fill out this form so we can better understand your needs.
                        </Typography>
                    </Grid>
                 </div>
            </section>
            <hr className="my-5" />
            <section id="contactus" className="text-center">
                <Typography variant="h3" align="center" style={myStyle.font} className="mb-4">
                    Contact Us
                </Typography>
                <div className="justify-center" style={myStyle.margintext}>
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
               
            </section>
        </div>
    );
}

export default Partnermaint