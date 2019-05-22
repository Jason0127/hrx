import React from 'react';
import Mask from '../hoc/mask';
import NavTabs from './nav';
import { Grid, Typography } from '@material-ui/core';
import Product from './pdct&srvc/prdcmain';
import Banner from './bannertry';
import prdimg from '../img/pasbanner.jpg';

const myStyle= {
    marg: {
        margin: 'auto',
        marginLeft: '2rem',
        marginTop: '10em',
        color: 'white',
    },
    fontSize: {
        fontSize: '1.65rem'
    },
    imgstyles: {
        display: 'block',
        width: '100%',
        height: 'auto'
    },
    my: {
        paddingRight: '15px',
        paddingLeft: '15px',
        margin: '0 14px'
    },
    colors: {
        color: 'black'
    }
}

const Productsrv =(props)=>{
    console.log(props)
    return(
        <div>
            <div className="productsr">
                {/* <Mask> */}
                    <NavTabs/>
                    <div className="positions">
                        <Banner>
                            <p className="font-md" style={myStyle.colors}>We constantly seek to discover better approaches to all facets of the healthcare supply chain in which we participate.</p>
                            
                        </Banner>
                    </div>
                    <img src={prdimg} style={myStyle.imgstyles}/>
                {/* </Mask> */}
            </div>
            <main className="mt-5" style={myStyle.my}>
                <Product />
            </main>
        </div>
    );
}

export default Productsrv;