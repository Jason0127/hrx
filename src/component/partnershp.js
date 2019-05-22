import React from 'react';
import Mask from '../hoc/mask';
import NavTabs from './nav';
import Partnermaint from './partnership/partnermain';
import { Typography, Grid } from '@material-ui/core';
import Banner from './bannertry';
import partimg from '../img/partnership.jpg'

const myStyle= {
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

const PartnerShip =()=>{
    return(
        <div>
            <div className="partnershi">
                {/* <Mask> */}
                    <NavTabs/>

                    <div className="positions">
                        <Banner>
                            <p className="font-md" style={myStyle.colors}>We pride ourselves on the personal care and attention we give our Partners. Contact us today.</p>
                            
                        </Banner>
                    </div>
                    
                    <img src={partimg} style={myStyle.imgstyles}/>
                {/* </Mask> */}
            </div>
            <main className="my-5" style={myStyle.my}>
                <Partnermaint />
            </main>
        </div>
    );
}

export default PartnerShip