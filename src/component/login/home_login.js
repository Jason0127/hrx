import React, {Component} from 'react'
import img from '../../img/community_oncology_pharmacy_banner_5.jpg'
import adds from '../../img/ads.svg'
import order from '../../img/order-history.png'
import track from '../../img/trak-shipments-icon.png'
import allimg from '../../img/terms.png'
import invoice from '../../img/invoice-icon.png'
import {
    AppBar, 
    Toolbar, 
    Grid,
    Button,
    Card,
    CardContent,
    Typography
} from '@material-ui/core'

const myStyle = {
    appSize: {
        height: 'calc(5vmin + 50px)',
        backgroundColor: '#b72a2a'
    },
    iconSize: {
        height: '48px'
    },
    addStyle: {
        width: '35vmax'
    },
    imgStyle: {
        display: 'block',
        width: '100%',
        height: 'auto',
    },
    card: {
        width: 'calc(10vmax + 100px)', 
        marginLeft: 'calc(5vmin + 80px)', 
        marginTop: 'calc(3vmin + 50px)',
        position: 'absolute',
        top: '3em'
    }
}

class Login extends Component{
    render(){
        return(
            <div>
                <AppBar position="static">
                    <Toolbar style={myStyle.appSize}>
                        <Grid item lg={3}>
                            <div className="hersvg">
                                <div className="icimg" style={myStyle.iconSize}></div>
                            </div>
                        </Grid>
                        <Grid item lg={7}>
                            <img src={adds} style={myStyle.addStyle}/>
                        </Grid>
                        <Grid item lg={2}>
                            <i class="fas fa-shopping-cart"></i>
                            <Button color="primary" style={{marginLeft: 'calc(8vmin + 10px)'}}>Logout</Button>
                        </Grid>
                    </Toolbar>
                    <img src={img} style={myStyle.imgStyle} alt="img"/>
                    <Card style={myStyle.card}>
                        <CardContent>
                            <Typography color="primary">
                                WELCOME
                            </Typography>
                            <Typography style={{fontWeight: 500, fontSize: 'calc(2vmin + 8px)', margin: 'calc(1vmin + 3px) 0'}}>
                                Demo Customer
                            </Typography>
                            <Typography>
                                Demo Customer - Main Location
                            </Typography>
                            <Typography>
                                27 Seaview Boulevard
                            </Typography>
                            <Typography>
                                New York, NY 45409
                            </Typography>
                        </CardContent>
                    </Card>
        
                </AppBar>

                <main>
                    <section id="button" style={{display: 'flex', justifyContent: 'center'}}>
                        <Button color="primary">FORMULARY</Button>
                        <Button color="primary">SHORT-DATED SPECIALS</Button>
                    </section>

                    <section id="links">
                        <Grid item lg={12} style={{backgroundColor: '#3cc4c9'}}>
                            <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'center'}}>
                                <li style={{display: 'inline-block',}}>
                                    <a href="#">
                                        <img src={order} />
                                    </a>
                                </li>
                                <li style={{display: 'inline-block', marginRight: '20vmax', marginLeft: '20vmax'}}>
                                    <a href="#">
                                        <img src={track} />
                                    </a>
                                </li>
                                <li style={{display: 'inline-block'}}>
                                    <a href="#">
                                        <img src={invoice} />
                                    </a>
                                </li>
                            </ul>
                        </Grid>

                        <Grid item lg={12} align="center">
                            <img src={allimg} />
                        </Grid>
                    </section>
                </main>
            </div>
        )
    }
}

export default Login
