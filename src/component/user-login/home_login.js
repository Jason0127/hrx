import React, {Component} from 'react'
import img from '../../img/community_oncology_pharmacy_banner_5.jpg'
import adds from '../../img/ads.svg'
import order from '../../img/order-history.png'
import track from '../../img/trak-shipments-icon.png'
import allimg from '../../img/terms.png'
import invoice from '../../img/invoice-icon.png';
import vawd from '../../img/VAWD-LOGO.png';
import shop from '../../img/SHOP-01.png';
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
    },
    menuIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    menuItem: {
        width: '76px', 
        height: '87px', 
        marginTop: '1rem', 
        marginBottom: '1rem',
        marginRight: '10rem'
    }
}

class Login extends Component{

    shop = ()=>{
        this.props.history.push('/portal')
    }

    cart = ()=>{
        this.props.history.push('/cart')
    }

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
                            <img src={adds} style={myStyle.addStyle} alt="img"/>
                        </Grid>
                        <Grid item lg={2}>
                            <div style={{display: 'inline-block', cursor: 'pointer'}} onClick={()=>this.cart()}>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
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
                        <Grid item lg={12} style={{backgroundColor: '#3cc4c9', ...myStyle.menuIcon}}>
                            <div style={myStyle.menuItem}>
                                <img src={order} style={{width: '100%', height: '100%'}}/>
                            </div>
                            <div style={myStyle.menuItem}> 
                                <img src={invoice} style={{width: '100%', height: '90%'}}/>
                            </div>
                            <div style={myStyle.menuItem}>
                                <img src={track} style={{width: '100%', height: '90%'}}/>
                            </div>
                            <div style={{...myStyle.menuItem, marginRight: '0px', cursor: 'pointer'}} onClick={()=>this.shop()}>
                                <img src={shop} style={{width: '100%', height: '100%'}}/>
                            </div>
                        </Grid>

                        <Grid item lg={12} align="center">
                            <img src={allimg} alt=""/>
                        </Grid>
                        <Grid item lg={12} style={{marginLeft: '50px', marginTop: '20px'}}>
                            <div style={{width: '200px', display: 'inline-block'}}>
                                <img src={vawd} alt="" style={{width: '100%', height: 'auto'}}/>
                            </div>
                            <a href="#?" style={{display: 'inline-block'}}>
                                    Hercules Pharmaceuticals <br />
                                    Has been awarded VAWD Accreditation
                                </a>
                        </Grid>
                    </section>
                </main>
            </div>
        )
    }
}

export default Login
