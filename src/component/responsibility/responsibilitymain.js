import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const fontvalue = '2.5';

const myStyle ={
    h3Size: {
        fontSize: fontvalue + 'rem',
    },
    grid: {
        padding: '0 15px'
    },
    img: {
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '50%',
        height: 'auto',
        borderSizing: 'border-box',
        borderRadius: '6px',
        borderStyle: 'none'
    },
    pstyle: {
        color: '#9e9e9e',
        marginBottom: '1rem'
    },
    compstyle: {
        fontSize: '1.2rem'
    },
    imgCommitment: {
        paddingTop: '25px',
        height: '200px'
    }
}

const Responsi =()=>{
    return(
        <div className="container">
            <section id="goverment">
                <Typography variant="h3" style={myStyle.h3Size} align="center" className="mb-4">
                    Government Compliance
                </Typography>
                <div className="justify-center">
                   <Grid item lg={10}>
                        <Typography component="p" align="center" style={myStyle.pstyle}>
                            We believe that innovative responsible healthcare businesses 
                            lay at the heart of a healthy robust society. Our products are manufactured 
                            in Food and Drug Administration (FDA) registered facilities that ensure extensive, ongoing 
                            current Good Manufacturing Practices (cGMP) are continually met.
                        </Typography>
                   </Grid>
                </div>
            </section>
            <hr className="my-5" />
            <section id="compliance">
                <div className="row text-center">
                    <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid}>
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" style={myStyle.img} className="forimg"/>
                        <Typography variant="h4" className="my-4">
                            Compliance Expertise
                        </Typography>
                        <Typography component="p" style={myStyle.grid} style={myStyle.pstyle}>
                            We take precautions at every turn to ensure that our products are compliant with all applicable laws and regulations.
                        </Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid}>
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" style={myStyle.img} className="forimg"/>
                        <Typography variant="h4" className="my-4">
                            Moving Forward
                        </Typography>
                        <Typography component="p" style={myStyle.grid} style={myStyle.pstyle}>
                            As the demands on the healthcare supply chain evolve, so does Hercules 
                            Pharmaceutical's commitments to finding solutions to patients’ health needs.
                        </Typography>
                    </Grid>
                </div>
            </section>
            <hr className="my-5" />
            <section id="commitment" className="mb-5">
                <div className="row text-center">
                    <Grid item lg={4} md={4} sm={12} xs={12} style={{...myStyle.grid, ...myStyle.imgCommitment}}>
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" style={myStyle.img} className="forimg"/>
                    </Grid>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Typography variant="h3" className="mb-4" style={myStyle.h3Size}>
                            Commitment to Main Street
                        </Typography>
                        <Typography component="p" style={{...myStyle.pstyle, ...myStyle.compstyle}}>
                            Hercules Pharmaceuticals supports Main Street USA by empowering independent 
                            and community pharmacies. We pride ourselves on the personal care and attention we 
                            provide our customers and are dedicated to fight for the issues that local pharmacies 
                            face. Hercules Pharmaceuticals stands by and looks out for neighborhood pharmacies 
                            that contribute to strengthening Main Street USA.
                        </Typography>
                    </Grid>
                </div>
            </section>
        </div>
    );
}

export default Responsi