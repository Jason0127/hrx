import React, {Component} from 'react';
import {Typography, Grid} from '@material-ui/core';
import ProductDetail from './product_container/product_detail';

class Product extends Component{

    constructor(props){
        super(props)
        this.state = {
            productItem: [
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
                },
                {
                    id: 4, 
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
                    id: 5, 
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
                    id: 6, 
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
                    id: 7, 
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
                    id: 8, 
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
                    id: 9, 
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
                    id: 10, 
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
                    id: 11, 
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
                    id: 12, 
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
            ]
        }
    }

    itemDescription = (item)=>{
        console.log(item)
        return(
            <React.Fragment>
                <div>
                    <img src={item.imgsrc} alt="productimg" style={{width: '100%', height: 'auto'}}/>
                </div>
                <div id="desc" className="ml-3">
                    <Typography component="p" style={{display: 'inline-block'}}>
                        Price: {item.price}
                    </Typography>
                    <ProductDetail {...item}/>
                </div>
            </React.Fragment>
        )
    }

    loadItems = (items)=>{
        return items.length >= 1 ?
            items.map((item)=>{
                return(
                    <Grid item md={3} key={item.id} className="mb-5">
                        {this.itemDescription(item)}
                    </Grid>
                )
            })
        : null
    }

    render(){
        return(
            <React.Fragment>
                <section className="row ml-3 my-5">
                    {this.loadItems(this.state.productItem)}
                </section>
            </React.Fragment>
        )
    }
}

export default Product;