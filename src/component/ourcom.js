import React from 'react';
import NavTabs from './nav';
import Mask from '../hoc/mask';
import { Grid, Typography } from '@material-ui/core';
import Main from './ourcom/ourmain';
import ourimg from '../img/our_company.jpg'
import Banner from './bannertry';

const myStyle ={
    fontSize: {
        fontSize: '1.65rem'
    },
    marg: {
        margin: 'auto',
        marginLeft: '2rem',
        marginTop: '10em',
        color: 'white',
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
        color: 'white'
    }

}

const Ourcom = (props) => {
    console.log(props)
    return (
    <div>
        <div className="ourcomp">
            {/* <Mask> */}
                <NavTabs />
               <div className="positions">
                    <Banner>
                        <p className="font-md" style={myStyle.colors}>Our integrity, responsibility, and respect guide our mission to be a leader in healthcare.</p>
                        
                    </Banner>
               </div>
                <img src={ourimg} style={myStyle.imgstyles}/>
            {/* </Mask> */}
        </div>
        <main className="mt-5" style={myStyle.my}>
            <Main/>
        </main>
    </div>
    );
};

export default Ourcom;