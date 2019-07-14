import React, {Component} from 'react';
import {AppBar, Grid, Button, Card, CardContent, Typography, TextField} from '@material-ui/core';
import iconimg from '../../img/herc.svg';
import orderhis from '../../img/order-history.png';
import invoice from '../../img/invoice-icon.png';
import track from '../../img/trak-shipments-icon.png';
import shop from '../../img/SHOP-01.png';
import Product from './portal_component/product';
import History from './portal_component/history';
import Invoice from './portal_component/invoice';
import Shipment from './portal_component/shipment';

const myStyle= {
    appbarSize: {
        height: '70px',
        width: 'auto',
        overflow: 'hidden',
        display: 'flex'
    },
    iconSize: {
        width: '75%',
        height: 'auto',
        marginLeft: '4vmin'
    },
    cart: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        aligContent: 'center'
    },
    cartInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        boxShadow: '0px 5px 11px 0px rgba(0, 0, 0, 0.4)',
        borderRadius: '12px'
    },
    menuIcon: {
        marginTop: '1.5rem', 
        marginRight: '6rem', 
        width: '80px', 
        height: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

class Portal extends Component{

    constructor(props){
        super(props)
        this.state = {
            product: true,
            history: false,
            invoice: false,
            shipment: false,
            shipmentBorder: 'none',
            invoiceBorder: 'none',
            historyBorder: 'none'
        }
    }

    Actions = ()=>{
        if(this.state.product){
            return(
                <React.Fragment>
                    <div className="mt-3">
                        <TextField label="Search Product: NDC and Manucfacturer" style={{width: '100%'}}/>
                    </div>
                    <div className="mt-5 pl-5">
                        <Button variant="contained" color="primary">
                            Filter Product
                        </Button>
                        <Button variant="contained" color="primary" className="ml-3">
                            Can't Find a product
                        </Button>
                        <Button variant="contained" color="primary" style={{marginLeft: '10rem'}}>
                            <i className="fas fa-cart-plus mr-2"></i>
                            Add to Cart
                        </Button>
                    </div> 
                </React.Fragment>
            )
        }
        if(this.state.history){
            return(
                <div className="mt-3">
                    <TextField label="Search Order ID..." style={{width: '100%'}}/>
                </div>
            )
        }
        if(this.state.invoice){
            return(
                <div className="mt-3">
                    <TextField label="Search Order ID or Invoice Number..." style={{width: '100%'}}/>
                </div>
            )
        }
        if(this.state.shipment){
            return(
                <div className="mt-3">
                    <TextField label="Search Order ID or Invoice Number..." style={{width: '100%'}}/>
                </div>
            )
        }
    }

    cart = ()=>{
        this.props.history.push('/cart')
    }

    home = ()=>{
        this.props.history.push('/home')
    }

    History =()=>{
        this.setState({
            product: false,
            history: true,
            invoice: false,
            shipment: false,
            historyBorder: '2px solid yellow',
            invoiceBorder: 'none',
            shipmentBorder: 'none',
        })
    }

    product = ()=>{
        this.setState({
            product: true,
            history: false,
            invoice: false,
            shipment: false,
            historyBorder: 'none',
            invoiceBorder: 'none',
            shipmentBorder: 'none',
        })
    }

    Invoice = ()=>{
        this.setState({
            product: false,
            history: false,
            invoice: true,
            shipment: false,
            invoiceBorder: '2px solid yellow',
            shipmentBorder: 'none',
            historyBorder: 'none'
        })
    }

    Shipment = ()=>{
        this.setState({
            product: false,
            history: false,
            invoice: false,
            shipment: true,
            shipmentBorder: '2px solid yellow',
            invoiceBorder: 'none',
            historyBorder: 'none'
        })
    }

    container =()=>{
        if(this.state.product){
            return(
                <React.Fragment>
                    <Product />
                </React.Fragment>
            )
        }

        if(this.state.history){
            return(
                <React.Fragment>
                    <History />
                </React.Fragment>
            )
        }

        if(this.state.invoice){
            return(
                <React.Fragment>
                    <Invoice />
                </React.Fragment>
            )
        }

        if(this.state.shipment){
            return(
                <React.Fragment>
                    <Shipment />
                </React.Fragment>
            )
        }
    }

    

    render(){
        return(
            <div className="container" id="sample">
                <AppBar position="static" color="default" style={myStyle.appbarSize}>
                    <div className="row">
                        <Grid item lg={3} md={3} style={{marginTop: '10px'}}>
                            <img src={iconimg} alt="icon" style={myStyle.iconSize}/>
                        </Grid>
                        <Grid item lg={5} md={5} style={{marginTop: '10px'}}>

                        </Grid>
                        <Grid item lg={4} md={4} style={myStyle.cart}>
                            <div>
                                <Button variant="contained" color="default" className="mr-3" onClick={()=>this.cart()}><i className="fas fa-shopping-cart mr-1"></i>Cart</Button>
                                <Button variant="contained" color="default" className="mr-3" onClick={()=>this.home()}><i className="fas fa-home mr-1"></i>Home</Button>
                                <Button variant="contained" color="default">Logout</Button>
                            </div>
                        </Grid>
                    </div>
                </AppBar>
                <section className="row mt-5 ml-3 pr-3">
                    <Grid item lg={4}>
                        <Card>
                            <CardContent>
                                <Typography component="p" className="mb-3">
                                    Welcome
                                </Typography>
                                <Typography variant="h4" className="mb-3">
                                    Mary Smith
                                </Typography>
                                <Typography variant="h5" className="mb-3">
                                    Demo Customer - Main Location 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={8}>
                        <div style={{backgroundColor: '#3cc4c9', height: '100px', ...myStyle.cartInfo}} id="menu">
                            <div style={myStyle.menuIcon}>
                                <img src={orderhis} alt="img" style={{width: '60%', height: '100%', cursor: 'pointer'}} onClick={()=>this.History()}/>
                                <div style={{fontSize: '12px', fontWeight: '600', color: 'white', borderBottom: `${this.state.historyBorder}`}}>
                                    Order History
                                </div>
                            </div>
                            <div style={myStyle.menuIcon}>
                                <img src={invoice} alt="img" style={{width: '65%', height: '100%', cursor: 'pointer'}} onClick={()=>this.Invoice()}/>
                                <div style={{fontSize: '12px', fontWeight: '600', color: 'white', borderBottom: `${this.state.invoiceBorder}`}}>
                                    View invoice
                                </div>
                            </div>
                            <div style={myStyle.menuIcon}>
                                <img src={track} alt="img" style={{width: '70%', height: '100%', cursor: 'pointer'}} onClick={()=>this.Shipment()}/>
                                <div style={{fontSize: '11px', fontWeight: '600', color: 'white', borderBottom: `${this.state.shipmentBorder}`}}>
                                    Track shipment
                                </div>
                            </div>
                            <div style={{marginTop: '1.5rem', width: '60px', height: '50px'}}>
                                <img src={shop} alt="img" style={{width: '100%', height: '100%', cursor: 'pointer'}} onClick={()=>this.product()}/>
                            </div>
                        </div>
                       {this.Actions()}
                    </Grid>
                </section>
                <hr className="my-5"/>
                {this.container()}
            </div>
        )
    }
}

export default Portal;