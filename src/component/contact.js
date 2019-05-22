import React, {Component} from 'react';
import Mask from '../hoc/mask';
import NavTabs from './nav';
import Contactmain from './contact_us/contact_us';
import { Typography } from '@material-ui/core';
import Banner from './bannertry';
import contactimg  from '../img/contact_us.jpg';

const myStyle = {
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
    fontSize: {
        fontSize: '2rem',
        justifyContent: 'center'
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

const Contact =()=>{
    return(
        <div>

            <div className="contac">
                {/* <Mask> */}
                    <NavTabs />
                    <div className="positions">

                        <Banner>
                            <p className="font-md" style={myStyle.colors}>We pride ourselves on the personal care and attention we give our Partners. Contact us today.</p>
                        </Banner>

                    </div>
                    <img src={contactimg} style={myStyle.imgstyles}/>
                {/* </Mask> */}
            </div>

            <main className="my-5" style={myStyle.my}>
                <Contactmain />
            </main>
        </div>
    );
}

export default Contact;
