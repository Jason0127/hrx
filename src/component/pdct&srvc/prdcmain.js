import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import img from '../../img/our_reach.svg';

const myStyle= {
    font :{
        fontSize: '2rem'
    },
    justifycenter: {
        justifyContent: 'center',
        display: 'flex'
    },
    fontsize: {
        fontSize: '1.2rem',
    },
    grid: {
        padding: '0 15px'
    },
    img: {
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '70%',
        flex: '0 0 33.333333%',
        height: '200px',
        borderStyle: 'none',
        borderRadius: '6px',
        boxSizing: 'border-box'
    },
    listStyle: {
        // listStylePosition: 'inside'
        paddingLeft: '160px'
    },
    mwidth: {
        maxWidth: '100%',
        flex: '100%',
        height: 'auto'
    },
    dBlock: {
        display: 'block'
    },
    p: {
        color: '#9e9e9e',
        fontWeight: '300'
    },
    imgPadding: {
        paddingTop: '25px'
    }
}


const Product =()=>{
    return(
        <div className="container">
            <section id="ourservice text-center">
                <Typography variant="h3" align="center" className="mb-5" style={myStyle.font}>
                    Our Service Offering
                </Typography>
                <div style={myStyle.justifycenter} className="mb-5">
                    <Typography component="p" align="center" style={myStyle.fontsize}>
                        Our mission, to establish new relationships with quality partners, has been and continues to be our priority.
                    </Typography>
                </div>
                <div className="row mb-4">
                    <Grid item lg={4} md={4} sm={12} xs={12} style={{...myStyle.grid, ...myStyle.imgPadding}} className="text-right smdown-text-center">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={myStyle.img} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={12} xs={12}  style={myStyle.grid} className="text-left">
                        <Typography variant="h5" align="left">
                            Community Pharmacy
                        </Typography>
                        <ul style={myStyle.p}>
                            <li>Community Pharmacy has been and always will be the bedrock of our business</li>
                            <li>We provide quality medicine in a fast, efficient and cost-effective mode</li>
                            <li>Live customer support is available where community pharmacies can get quick solutions to their needs</li>
                            <li>Our online portal allows for easy purchasing</li>
                            <li>We accept credit cards for all orders made directly through our portal</li>
                            <li>
                                We empower pharmacies because Hercules Pharmaceuticals invests a portion of profits into fighting for 
                                independent pharmacies politically on the state and national level
                            </li>
                            <li>Hercules Pharmaceuticals is a corporate member of the National Community Pharmacists Association (NCPA)</li>
                        </ul>
                    </Grid>
                </div>
                <div className="row mb-4">
                    <Grid item lg={4} md={4} sm={12} xs={12} style={{...myStyle.grid, ...myStyle.imgPadding}} className="text-right smdown-text-center">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={myStyle.img} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={12} xs={12} style={myStyle.grid} className="text-left">
                        <Typography variant="h5" align="left" >
                                Specialty Pharmacy
                        </Typography>
                        <ul style={{...myStyle.p}}>
                            <li>Hercules Pharmaceuticals believes in the importance of specialty pharmacy in the Healthcare industry</li>
                            <li>We are your go-to source for leading specialty generic</li>
                            <li>At Hercules Pharmaceuticals, pharmacies get high quality specialty products at great prices</li>
                            <li>Pharmacies are able to place orders as late as 8:00 pm for next-day delivery</li>
                            <li>We invest back into our pharmacies through a strong government relations initiative aiming to protect their interests</li>
                            <li>Hercules Pharmaceuticals serves on the government relations committee of the National Association of Specialty Pharmacy (NASP)</li>
                        </ul>
                    </Grid>
                    {/* <Grid item lg={4} md={4} sm={12} xs={12} style={myStyle.grid} className="text-left">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={myStyle.img} />
                    </Grid> */}
                </div>
                <div className="row mb-4">
                    <Grid item lg={4} md={4} sm={12} xs={12} style={{...myStyle.grid, ...myStyle.imgPadding}} className="text-right smdown-text-center">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" style={myStyle.img} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={12} xs={12} style={myStyle.grid} className="text-left">
                        <Typography variant="h5">
                            Manufacturers
                        </Typography>
                        <ul style={myStyle.p}>
                            <li>We are a VAWD Accredited Wholesaler</li>
                            <li>
                                Hercules Pharmaceuticals strictly complies with the Drug Supply Chain Security Act and we are proactive 
                                in ensuring the safety of drugs that are offered to consumers
                            </li>
                            <li>Hercules Pharmaceuticals provides high quality, highly compliant network to reach specialty and community pharmacies</li>
                            <li>We do not sell or purchase from other wholesalers, thus, protecting the supply chain integrity of drug products in the stream of commerce.</li>
                            <li>Specialty manufacturers use our network of specialty pharmacies to strategically maximize market access</li>
                            <li>Hercules Pharmaceuticals has a strategic sales force with direct access to independent, community and specialty pharmacies.</li>
                        </ul>
                    </Grid>
                </div>
            </section>
            <hr className="my-5"/>
            <section id="ourreach">
                <Typography variant="h3" align="center" style={myStyle.font} className="mb-4">
                    Our Reach
                </Typography>
                <div style={{...myStyle.justifycenter}} className="mb-4">
                    <Grid item lg={10}>
                        <Typography component="p" align="center" style={myStyle.p}>
                            Hercules Pharmaceuticals has a strategic and efficient distribution network 
                            to enable quality medical products to penetrate the United States market, and our 
                            distribution centers are staffed by qualified personnel who coordinate 
                            targeted shipments across the nation. Our commitment 
                            to excellence in the healthcare industry drives the perpetual optimization of our distribution network, 
                            which in turn enables us to provide exceptional service to all of our business partners.
                        </Typography>
                        <div style={myStyle.justifycenter}>                       
                            <img src={img} style={{...myStyle.img, ...myStyle.mwidth}}/>
                        </div>
                    </Grid>
                </div>
            </section>
        </div>
    );
}

export default Product;