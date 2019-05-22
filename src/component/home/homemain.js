import React, {Component} from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {} from '@material-ui/icons';
import img from '../../img/heatmap.jpg';
import imglogo from '../../img/HRX-LOGO.png';
import {Fade, Zoom} from 'react-reveal';
import imgherc from '../../img/herc.svg';
const myStyle ={
    myy: {
        paddingRight: '15px',
        paddingLeft: '15px',
        margin: '0'
    },
    font: {
        fontSize: '2rem',
    },
    mb: {
        marginBottom: '3rem'
    },
    textCenter: {
        textAlign: 'center'
    },
    justifyCenter: {
        justifyContent: 'center',
        display: 'flex',
        fontSize: '1.2rem'
    },
    img: {
        overflow: 'hidden',
        position: 'relative',
        maxWidth: '70%',
        height: 'auto',
        flex: '0 0 33.333333%',
        boxSizing: 'border-box',
        borderStyle: 'none',
        borderRadius: '6px'
    },
    grid: {
        padding: '0 15px'
    },
    pGreyText: {
        color: '#9e9e9e',
        marginBottom: '1rem'
    },
    p: {
        fontSize: '1.5rem',
        color: '#9e9e9e',
        fontWeight: '300'
    },
    h4: {
        fontSize: '1.5rem',
        fontWeight: 'bolder'
    },
    btnimg: {
        position: 'absolute',
        height: '7rem',
        width: '7rem',
        borderRadius: '50%'
    },
    heatmap: {
        width: '70%'
    },
    textStyle: {
        letterSpacing: '-0.05562em',
        fontSize: '5.5vw'
    },
    newimg: {
        width: '70%'
    },
    gvb: {
        fontSize: '1.3rem',
        color: '#110505c0'
    },
    icon: {
        marginRight: '10px'
    },
    logo: {
       
    },
    footertext: {
        letterSpacing: '-0.05562em'
    },
    goverimg: {
        maxWidth: '100%'
    },
    img6: {
        maxWidth: '50%'
    },
    overflow: {
        overflow: 'hidden'
    },
    govbgc: {
        backgroundColor: '#e9e7e2'
    },
    natgov: {
        MaxWidth: '100%'
    }
}

class Strategic extends Component {
    render(){
        return(
            <section id={`Strategic`} style={{...myStyle.textCenter, ...myStyle.my}}>
                {/* <Fade left cascade> */}
                    <Typography variant="h2" align="center" style={myStyle.font} className={`mb-5`}>
                        <strong>Strategic Ally, Loyal Partner</strong>
                    </Typography>
                {/* </Fade> */}
                <div style={myStyle.overflow}>
                    {/* <Fade right cascade> */}
                        <div style={myStyle.justifyCenter}>
                            <Grid item lg={8} sm={12} md={8} xs={12} style={myStyle.justifyCenter}>
                                <Typography component="p" style={myStyle.justifyCenter}>
                                    Get the level of care you give to your customers.
                                    Hercules Pharmaceuticals is a pharmaceutical wholesaler 
                                    dedicated to providing Independent Pharmacies with a better level of service.
                                </Typography>
                            </Grid>
                        </div>
                    {/* </Fade> */}
                </div>
                <hr className={`my-5`}/>
                {/* <Fade top cascade> */}
                    <div className="row">
                        <Grid item lg={4} md={12} sm={12} xs={12} alignContent="flex-start" style={myStyle.grid}>
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" style={myStyle.img} className="forimg"/>
                            <Typography variant="h4" align="center" className={`my-4`}>
                                Community Pharmacy
                            </Typography>
                            <Typography component="p" align="center" style={myStyle.pGreyText}>
                                Hercules Pharmaceuticals is an Authorized Distributor of Record (ADR) for all of the 
                                medicines that we carry. We only sell medicines that are manufacturer direct.
                            </Typography>
                            <Typography component="p" align="center" style={myStyle.pGreyText}>
                                Community Pharmacy has been and always will be the bedrock of our business. 
                                We provide quality medicine with a fast, efficient and cost-effective model
                            </Typography>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12} alignContent="flex-start" style={myStyle.grid}>
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={myStyle.img} className="forimg"/>
                            <Typography variant="h4" align="center" className={`my-4`}>
                                Specialty Pharmacy
                            </Typography>
                            <Typography component="p" align="center" style={myStyle.pGreyText}>
                                Hercules Pharmaceuticals recognizes the importance of specialty pharmacy in healthcare. 
                                We are here to support the growth of this industry and become 
                                the go-to source for leading specialty generics.
                            </Typography>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12} alignContent="flex-start" style={myStyle.grid}>
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/50.jpg" style={myStyle.img} className="forimg"/>
                            <Typography variant="h4" align="center" className={`my-4`}>
                                Manufacturer
                            </Typography>
                            <Typography component="p" align="center" style={myStyle.pGreyText}>
                                Hercules Pharmaceuticals is a VAWD Accredited Wholesaler 
                                providing manufacturers a high quality, 
                                highly compliant network to reach specialty and community pharmacies.
                            </Typography>
                        </Grid>
                    </div>
                {/* </Fade> */}
            </section>
        );
    }
}

class Advocacy extends Component {
    render(){
        return(
            <section id="advocacy" className={`text-center p-5`}>
                {/* <Zoom cascade> */}
                    <div className="row">
                        <Grid item lg={4} md={12} sm={12} xs={12} style={myStyle.grid}>
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/50.jpg" style={{...myStyle.img, ...myStyle.goverimg}} />
                        </Grid>
                        <Grid item lg={8} md={12} sm={12} xs={12} style={myStyle.grid} className={`text-left mddown-text-center`}>
                            <Typography variant="h4" className={`mt-2 mb-3`} style={myStyle.h4}>
                                <strong>Government Advocacy</strong>
                            </Typography>
                            <Typography component="p" style={myStyle.p} className={`mb-3`}>
                                Community and Specialty pharmacies deliver the best care to their patient population. 
                                Hercules Pharmaceuticals directly lobbies on behalf of community and specialty pharmacies. 
                                Additionally, we are a corporate member of the National Association of Specialty Pharmacy (NASP), 
                                National Community Pharmacists Association (NCPA) and active at the state level as well.
                            </Typography>
                            <Button variant="raised" color="primary"><i className="fab fa-readme" style={myStyle.icon}></i>Read More</Button>
                        </Grid>
                    </div>
                {/* </Zoom> */}
            </section>
        );
    }
}

class Ourreach extends Component {
    render(){
        return(
            // <Zoom left cascade>
                <section id="ourreach" style={myStyle.my}>
                    <div className="row px-5">
                        <Grid item lg={8} md={12} sm={12} xs={12} style={myStyle.grid} className={`text-center`}>
                            <Button variant="raised" color="secondary" style={myStyle.btnimg} className={`mt-5`}>Our Reach</Button>
                            <img src={img} style={myStyle.heatmap} className={`ml-5`}/>
                        </Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12} style={myStyle.grid} className={'mddown-text-center'}>
                            <Typography component="p" className={`mt-5`} color="primary" style={{...myStyle.textStyle, ...myStyle.natgov}}>
                                98%<br />
                                National<br />
                                Coverage
                            </Typography>
                        </Grid>
                    </div>
                </section>
            // </Zoom>
        );
    }
}

class Ourdis extends Component {
    render(){
        return(
            // <Fade top cascade>
                <section id="ourdistribution" className={`text-center`} style={myStyle.my}>
                    <div className="row">
                        <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid}>
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={{...myStyle.img, ...myStyle.img6}} className="forimg"/>
                            <Typography variant="h4" align="center" className={`my-4`}>
                                Our Distribution
                            </Typography>
                            <Typography component="p" align="center" className={`px-4`} style={myStyle.pGreyText}>
                                By leveraging our domestic and international infrastructure 
                                and compliance expertise, we are able to capitalize 
                                on the ever-changing healthcare system in the United States.
                            </Typography>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid}>
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/50.jpg" style={{...myStyle.img, ...myStyle.img6}} className="forimg"/>
                            <Typography variant="h4" align="center" className={`my-4`}>
                                Your Gateway
                            </Typography>
                            <Typography component="p" align="center" className={`px-4`} style={myStyle.pGreyText}>
                                Hercules Pharmaceuticals has built a healthcare business 
                                for today’s landscape that will carry us into tomorrow.
                            </Typography>
                        </Grid>
                    </div>
                </section>
            // </Fade>
        );
    }
}

class Newsupdates extends Component {
    render(){
        return(
            <section id="news&updates" className="text-center" style={myStyle.my}>
                <Typography variant="h2" className="text-center mb-4" style={myStyle.font}>
                    <strong>News & Updates</strong>
                </Typography>
                {/* <Fade top cascade> */}
                    <div className="row">
                        <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid}>
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={{...myStyle.img, ...myStyle.img6}} className="forimg" />
                            <Typography component="p" className="text-center px-4 mt-4" style={myStyle.pGreyText}>
                                Hercules Pharmaceuticals attends the Annual Convention of the National 
                                Community Pharmacists Association (NCPA) in Kissimmee, Florida October 14-18.
                            </Typography>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid}>
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/50.jpg" style={{...myStyle.img, ...myStyle.img6}} className="forimg"/>
                            <Typography component="p" className="text-center px-4 mt-4" style={myStyle.pGreyText}>
                                Hercules Pharmaceuticals attends the Annual Meeting of the National Association of Specialty 
                                Pharmacy in Washington DC September 18 - 20, 2017. It was great to connect with customers and 
                                other strategic partners to discuss the challenges which we face together 
                                as an industry and problem solve through dialogue and thought-provocative sessions.
                            </Typography>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid}>
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={{...myStyle.img, ...myStyle.img6}} className="forimg"/>
                            <Typography component="p" className="text-center px-4 mt-4" style={myStyle.pGreyText}>
                                Hercules Pharmaceuticals hires Alyssa Mathies as Director, Business Development
                            </Typography>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid}>
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/50.jpg" style={{...myStyle.img, ...myStyle.img6}} className="forimg"/>
                            <Typography component="p" className="text-center px-4 mt-4" style={myStyle.pGreyText}>
                                Hercules Pharmaceuticals is now a registered wholesaler in North Dakota.
                            </Typography>
                        </Grid>
                    </div>
                {/* </Fade> */}
            </section>
        )
    }
}

class Givingback extends Component {
    render(){
        return(
            // <Fade left cascade>
                <section id="givingback" className="text-center" style={myStyle.my}>
                    <Typography variant="h2" className="text-center mb-4" style={myStyle.font}>
                        <strong>Giving Back</strong>
                    </Typography>
                    <Typography component="p" className="text-center mb-4" style={myStyle.gvb}>
                        "Hercules Pharmaceuticals fights for community and specialty pharmacies. 
                        Our Compliance Team extends pro bono work on pharmaceutical government 
                        advocacy, empowering customers to thrive and improve their business by 
                        having healthy and profitable pharmacies."
                    </Typography>
                    <Button variant="raised" color="secondary"><i className="fab fa-readme" style={myStyle.icon}></i>Read More</Button>
                </section>
            // </Fade>
        );
    }
}

class Ourcommitment extends Component {
    render(){
        return(
            <section id="ourcommitment" className="text-center" style={myStyle.my}>
                <div className="row">
                    <Grid item lg={4} md={4} sm={12} xs={12} style={myStyle.grid} className="text-center">
                        <img src={imglogo} style={{...myStyle.img, ...myStyle.tryy}} />
                        <img src={imgherc} style={{...myStyle.img, ...myStyle.logo}} className="px-5"/>
                        <Typography variant="h5" className="text-center" style={{...myStyle.pGreyText, ...myStyle.footertext}}>
                            Call customer hotline 1(800) 815-5800
                        </Typography>
                    </Grid>
                    <Grid item lg={8} md={8} sm={12} xs={12} style={myStyle.grid}>
                        {/* <Fade top cascade> */}
                            <Typography variant="h4" className="text-center" style={myStyle.font} className="my-4">
                                Our Commitment
                            </Typography>
                            <Typography component="p" className="text-center" style={myStyle.p}>
                                We are committed to providing safe and effective 
                                prescription medication and devices to help people 
                                ive healthy lives. Our ability to meet and surpass 
                                both state and federal standards in the United States 
                                gives us a great sense of pride.
                            </Typography>
                        {/* </Fade> */}
                    </Grid>
                </div>
            </section>
        );
    }
}

const Main = () => {
    return (
       <React.Fragment>
            <div className="container">
                <Strategic/>
            </div>
            <div style={{...myStyle.myy, ...myStyle.govbgc}}>
                <Advocacy/>
            </div>
            <div className="container">
                <Ourreach/>
                <hr className="my-5"/>
                <Ourdis/>
                <hr className="my-5"/>
                <Newsupdates/>
                <hr className="my-5"/>
                <Givingback/>
                <hr className="my-5" />
                <Ourcommitment />
            </div>
       </React.Fragment>
    );
};

export default Main;