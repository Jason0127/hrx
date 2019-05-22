import React from 'react';
import img from '../img/HOME-01.jpg';
import {Grid, Paper, Typography, Button, CardActions, CardContent} from '@material-ui/core';
import NavTabs from './nav';
import Mask from '../hoc/mask';
import {Fade, Rotate} from 'react-reveal';
import svgimg from '../img/all_logos.svg';
import Main from './home/homemain';
import Banner from './bannertry';
import homeimg from '../img/HOME-01.jpg';
const styles ={
    marg: {
        margin: 'auto',
        marginLeft: '2rem',
        marginTop: '10em',
        color: 'white',
    },
    fontSize: {
        fontSize: '1.65rem',
        justifyContent: 'center'
    },
    svg:{
        display: 'block',
        marginLeft: '2rem',
        maxWidth: '100%',
        // marginTop: '7em',
        height: 'auto'
    },
    mt: {
        marginTop: '3rem'
    },
    icon: {
        marginRight: '10px'
    },
    imgstyles: {
        display: 'block',
        width: '100%',
        height: 'auto'
    },
    postion: {
        position: 'absolute',
    },
    colors: {
        color: 'white'
    }
}

const Home = () => {
    return (
        <div>
            <div className="homep">
                {/* <Mask> */}
                    <NavTabs/>
                    {/* <Fade top cascade> */}
                   
                        <div className="positions">
                            <Banner>
                                <p className="font-md" style={styles.colors}>We are a National Wholesale Distributor 
                                that supplies manufacturer-direct medicines 
                                to specialty pharmacies, institutions, doctor 
                                practices and community pharmacies.</p>
                            </Banner>
                            <div className="svgwidth">
                                <img src={svgimg} style={styles.svg}/>
                            </div>
                        </div>
                        
                    {/* </Fade> */}
                    {/* <Fade top cascade> */}
                        {/* <Grid item lg={5} md={6} xs={12} sm={10} > */}
                       
                        {/* </Grid> */}
                        <img src={homeimg} style={styles.imgstyles}/>
                        
                    {/* </Fade> */}
                {/* </Mask> */}
            </div>
            <main className={`mt-5`}>
                <Main/>
            </main>
        </div>
    );
};

export default Home;