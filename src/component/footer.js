import React from 'react';
import {Grid} from '@material-ui/core';

const myStyle= {
    footer: {
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: 'rgba(255,255,255,.6)',
        textAlign: 'center'
    },
    backg: {
        backgroundColor: 'rgba(14, 13, 10, 0.2)'
    },
    frstf: {
        backgroundColor: 'rgba(8, 8, 7, 0.3)'
    },
    grid: {
        padding: '0 15px'
    },
    my: {
        margin: '0 5rem'
    },
    font: {
        fontSize: '0.82rem'
    }

}

const Footer =()=>{
    return(
        
        <section id="footer" style={myStyle.backg}>
            <footer>
                <div className="smdown-text-center">
                    <div id="media" style={myStyle.frstf} className="item-center py-3">
                        <div className="row" style={myStyle.my}>
                            <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid} className="smdown-text-center text-left">
                                Get connected with us on social networks!
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid} className="smdown-text-center text-right">
                                {/* FaceBook */}
                                <a><i className="fab fa-facebook-f mr-5"></i></a>
                                {/* Twitter */}
                                <a><i className="fab fa-twitter mr-5"></i></a>
                                {/* Google+ */}
                                <a><i className="fab fa-google-plus-g mr-5"></i></a>
                                {/* Linkedin-in */}
                                <a><i className="fab fa-linkedin-in mr-5"></i></a>
                                {/* Instagram */}
                                <a><i className="fab fa-instagram"></i></a>
                            </Grid>
                        </div>
                    </div>
                    <div id="links" className="py-3 item-center" style={myStyle.font}>
                        <div className="row" style={myStyle.my}>
                            <Grid item lg={4} md={4} sm={6} xs={12} style={myStyle.grid}>
                                <p style={myStyle.font}>
                                    <a>Home</a>
                                </p>
                                <p>
                                    <a>Our Company</a>
                                </p>
                                <p>
                                    <a>Product & Services</a>
                                </p>
                                <p>
                                    <a>Partnership</a>
                                </p>
                                <p>
                                    <a>Responsibility</a>
                                </p>
                                <p>
                                    <a>Contact Us</a>
                                </p>
                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12} style={myStyle.grid}>
                                <p>
                                    <a>Careers</a>
                                </p>
                                <p>
                                    <a>Terms & Conditions</a>
                                </p>
                                <p>
                                    <a>Privacy Policy</a>
                                </p>
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12} style={myStyle.grid}>
                                <p>
                                    <i className="fas fa-home mr-3"></i>
                                    Address
                                </p>
                                <p>
                                    <i className="fas fa-envelope mr-3"></i>
                                    info@gmail.com
                                </p>
                                <p>
                                    <i className="fas fa-phone mr-3"></i>
                                    1(800) 815-5800
                                </p>
                                <p>

                                </p>
                            </Grid>
                        </div>
                    </div>
                </div>
                <div style={myStyle.footer} className={`py-3`}>
                        &copy; 2019:<a>asdasdasd</a>
                    </div>
            </footer>
        </section>
    );
}

export default Footer