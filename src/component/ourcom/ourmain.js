import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const myStyle= {
    font :{
        fontSize: '2rem'
    },
    pGreyText: {
        color: '#9e9e9e',
        marginBottom: '1rem'
    },
    justifyCenter: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.2rem'
    },
    grid: {
        padding: '0 15px'
    },
    img: {
        overflow:' hidden',
        position: 'relative',
        maxWidth: '80%',
        height: '200px',
        flex: '0 0 33.333333%',
        boxSizing: 'border-box',
        borderStyle: 'none',
        borderRadius: '6px'
    },
    fonts: {
        fontSize: '1.5rem',
        fontWeight: '200',
    },
    leadershipimg: {
        maxWidth: '70%'
    }
    
}

const Main =()=>{
    return(
        <div className="container">
            <section id="whoweare" className="text-center">
                <Typography variant="h2" align="center" style={myStyle.font} className={`mb-5`}>
                    Who We Are
                </Typography>
                <div style={myStyle.justifyCenter} className="mb-5">
                    <Grid item lg={8} style={myStyle.justifyCenter}>
                        <Typography component="p" style={myStyle.justifyCenter}>
                            We are committed to providing safe and effective prescription medication 
                            and devices to help people live healthy lives. Our ability to meet and surpass 
                            both state and federal standards in the United States gives us a great sense of pride.
                        </Typography>
                    </Grid>
                </div>
                <div className="row text-center">
                    <Grid item lg={3} md={3} sm={6} xs={12} style={myStyle.grid}>
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={myStyle.img}/>
                        <Typography component="p" align="center" style={myStyle.pGreyText} className="mt-4">
                            We are a pharmaceutical and medical device national distributor that 
                            is dedicated to improving product access and efficiency throughout the 
                            healthcare supply chain.
                        </Typography>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12} style={myStyle.grid}>
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={myStyle.img}/>
                        <Typography component="p" align="center" style={myStyle.pGreyText} className="mt-4">
                            Hercules Pharmaceuticals is passionate about empowering the independent segment 
                            of the market to counter the power of big box pharmacy and its negative impact on healthcare.
                        </Typography>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12} style={myStyle.grid}>
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={myStyle.img}/>
                        <Typography component="p" align="center" style={myStyle.pGreyText} className="mt-4">
                            With a long history of compliance and distribution excellence, Hercules Pharmaceuticals 
                            provides great service, support and value to all our customers.
                        </Typography>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12} style={myStyle.grid}>
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={myStyle.img}/>
                        <Typography component="p" align="center" style={myStyle.pGreyText} className="mt-4">
                            Our integrity, responsibility, and respect guide our mission to be a leader in healthcare.
                        </Typography>
                    </Grid>
                </div>
            </section>
            <hr className="my-5"/>
            <section id="companyvision">
                <Typography variant="h2" align="center" style={myStyle.font} className="mb-5">
                    Company Vision
                </Typography>
                <div style={myStyle.justifyCenter}>
                    <Grid item lg={10} align="center" className="text-center">
                        <Typography component="p" style={{...myStyle.fonts, ...myStyle.pGreyText}} align="center">
                            " Hercules Pharmaceuticals is a forward-looking healthcare company 
                            that holds itself to the highest standards. 
                            We envision a world where people are able to live longer, fuller lives and we 
                            bring safe and effective products to market to make this vision a reality. "
                        </Typography>
                    </Grid>
                </div>
            </section>
            <hr className="my-5"/>
            <section id="leadership">   
                <Typography variant="h2" style={myStyle.font} align="center" className="mb-5">
                    Leadership
                </Typography>
                <div className="row mb-5">
                    <Grid item lg={4} md={4} sm={12} xs={12} align="center" style={myStyle.grid} className="mb-5">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={{...myStyle.img, ...myStyle.leadershipimg}} className="mb-4"/>
                        <Typography variant="h4" align="center">
                            Sara Amani
                        </Typography>
                        <Typography variant="h5" align="center">
                            Chief Executive Officer
                        </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}  align="center" style={myStyle.grid} className="mb-5">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={{...myStyle.img, ...myStyle.leadershipimg}} className="mb-4"/>
                        <Typography variant="h4" align="center">
                            Timothy Ward
                        </Typography>
                        <Typography variant="h5" align="center">
                            President
                        </Typography>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} align="center" style={myStyle.grid}>
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={{...myStyle.img, ...myStyle.leadershipimg}} className="mb-4"/>
                        <Typography variant="h4" align="center">
                            Alvin Sarabanchong
                        </Typography>
                        <Typography variant="h5" align="center">
                            Chief Financial and Strategy Officer
                        </Typography>
                    </Grid>
                </div>
            </section>
        </div>
    );
}

export default Main