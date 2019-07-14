import React from 'react';
import {AppBar, Typography, Grid, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Card, CardContent, CardActions} from '@material-ui/core';

const myStyle = {
    appbarSize: {
        height: '70px',
        width: 'auto',
        overflow: 'hidden',
        display: 'flex'
    },
    alignItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 'auto'
    }
}

const Cart = (props)=>{

    const [cart, setCart] = React.useState([
        {
            id: 1,  
            NDC: '60505-3583-07', 
            productName: 'Abacavir', 
            Manufacturer: 'Apotex', 
            strength: '300mg', 
            dosageForm: 'Tablet', 
            count: '60', 
            route: 'Oral', 
            price: 61.85,
            qty: 3
        },
        {
            id: 2,  
            NDC: '60505-3583-07', 
            productName: 'Abacavir', 
            Manufacturer: 'Apotex', 
            strength: '300mg', 
            dosageForm: 'Tablet', 
            count: '60', 
            route: 'Oral', 
            price: 61.85,
            qty: 3
        },
        {
            id: 3,  
            NDC: '60505-3583-07', 
            productName: 'Abacavir', 
            Manufacturer: 'Apotex', 
            strength: '300mg', 
            dosageForm: 'Tablet', 
            count: '60', 
            route: 'Oral', 
            price: 61.85,
            qty: 3
        },
        {
            id: 4,  
            NDC: '60505-3583-07', 
            productName: 'Abacavir', 
            Manufacturer: 'Apotex', 
            strength: '300mg', 
            dosageForm: 'Tablet', 
            count: '60', 
            route: 'Oral', 
            price: 61.85,
            qty: 3
        },
    ]);
    
    const [featProduct, setFeatProduct] = React.useState([
        {
            id: 1, 
            imgsrc: '/images/prodimage.jpg', 
            NDC: '60505-3583-07', 
            productName: 'Abacavir', 
            Manufacturer: 'Apotex', 
            strength: '300mg', 
            dosageForm: 'Tablet', 
            count: '60', 
            route: 'Oral', 
            price: '$ 61.85'
        },
        {
            id: 2, 
            imgsrc: '/images/prodimage.jpg', 
            NDC: '60505-3583-06', 
            productName: 'Abacavir', 
            Manufacturer: 'Apotex', 
            strength: '300mg', 
            dosageForm: 'Tablet', 
            count: '60', 
            route: 'Oral', 
            price: '$ 61.85'
        },
        {
            id: 3, 
            imgsrc: '/images/prodimage.jpg', 
            NDC: '60505-3583-06', 
            productName: 'Abacavir', 
            Manufacturer: 'Apotex', 
            strength: '300mg', 
            dosageForm: 'Tablet', 
            count: '60', 
            route: 'Oral', 
            price: '$ 61.85'
        }
    ])

    const cartitem =(items)=>{
        return items.length >= 1 ? 
            items.map((item)=>{
                return(
                    <TableRow key={item.id}>
                        <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>{item.productName}</TableCell>
                        <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>{item.Manufacturer}</TableCell>
                        <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>{item.strength}</TableCell>
                        <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>{item.dosageForm}</TableCell>
                        <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>{item.count}</TableCell>
                        <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>{item.route}</TableCell>
                        <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>{item.price}</TableCell>
                        <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>{item.qty}</TableCell>
                    </TableRow>
                )
            })
        :
        null
    }

    const allCartPrice =(cart)=>{
        let totalPrice = 0;
        if(cart){
            cart.map(item=>{
                let price = parseFloat(item.price)
                totalPrice += price
            })
            console.log(totalPrice);
            return totalPrice;
        }else{
            return totalPrice;
        }
    }

    const gotoProductPage =()=>{
        props.history.push('/product')
    }

    const loadFeatureItem =(item)=>{
        return item.length >= 1 ?
            item.map((item)=>{
                return(
                    <div style={{display: 'flex'}} className="mb-4">
                        <div style={{display: 'inline-block', width: '30%', height: 'auto'}}>
                            <img style={{width: '100%', height: '80px'}} src={item.imgsrc} alt="img" />
                        </div>
                        <div style={{display: 'inline-block', width: '70%', height: 'auto', paddingLeft: '20px'}}>
                            <Typography variant="h6" style={{color: 'blue'}}>{item.productName}</Typography>
                            <Typography component="p">{item.strength} &nbsp; {item.count} &nbsp; {item.dosageForm}</Typography>
                        </div>
                    </div>
                )
            })
        :
        null
    }

    return(
        <div className="container">
            <AppBar position="static" color="default" style={myStyle.appbarSize}>
                <div className="row">
                    <Grid item md={2} style={{marginTop: '1rem' ,...myStyle.alignItem}}>
                        <Button variant="contained" color="primary">Back</Button>
                    </Grid>
                    <Grid item md={7} style={{marginTop: '0.5rem' ,...myStyle.alignItem}}>
                        <Typography variant="h3" style={{fontWeight: 'bold'}}>Cart Page</Typography>
                    </Grid>
                    <Grid item md={3} style={{marginTop: '1rem' ,...myStyle.alignItem}}>
                        <Button variant="contained" color="primary"><i className="fas fa-home mr-1"></i>Home</Button>
                        <Button variant="contained" color="primary" className="ml-3">Logout</Button>
                    </Grid>
                </div>
            </AppBar>
            <hr className="my-3"/>
            <section className="row" id="cart">
                <Grid item md={8} sm={12}>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>Product Name / NDC</TableCell>
                                    <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>Manufacturer</TableCell>
                                    <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>Strength</TableCell>
                                    <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>Dosage Form</TableCell>
                                    <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>Count</TableCell>
                                    <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>Route</TableCell>
                                    <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>Price</TableCell>
                                    <TableCell align="inherit" padding="none" style={{textAlign: 'center'}}>Quantity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cartitem(cart)}
                            </TableBody>
                        </Table>
                    </Paper>
                    <Button variant="contained" color="inherit" className="mt-5 mb-4" style={{backgroundColor: '#f2cc6e'}} onClick={()=>gotoProductPage()}>Continue Shipping</Button>
                </Grid>
                <Grid item md={4} sm={12} style={{paddingLeft: 'calc(4vmin + 18px)'}}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">
                                Subtotal({cart.length} item): ${allCartPrice(cart)} 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="inherit"  style={{backgroundColor: '#f2cc6e'}}>Proceed To Checkout</Button>
                        </CardActions>
                    </Card>
                    <Card className="mt-5">
                        <Typography variant="h6" className="pt-3 pl-3">Feature Product</Typography>
                        <CardContent>
                            {loadFeatureItem(featProduct)}
                        </CardContent>
                    </Card>
                </Grid>
            </section>
        </div>
    )
}

export default Cart;