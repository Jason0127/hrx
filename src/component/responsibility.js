import React from 'react';
import Mask from '../hoc/mask';
import NavTabs from './nav';
import Responsi from './responsibility/responsibilitymain';
import svgimg from '../img/all_logos.svg';
import Banner from './bannertry';
import { Grid } from '@material-ui/core';
import resimg from '../img/responsibility.jpg';

const myStyle = {
    my: {
        paddingRight: '15px',
        paddingLeft: '15px',
        margin: '0 14px'
    },
    imgstyles: {
        display: 'block',
        width: '100%',
        height: 'auto'
    },
    svg:{
        display: 'block',
        marginLeft: '2rem',
        maxWidth: '100%',
        // marginTop: '7em',
        height: 'auto'
    },
    postion: {
        position: 'absolute',
    },
    colors: {
        color: 'black'
    }
}

const Responsibility =()=>{
    return(
        <div>
            <div className="responsibilit">
                {/* <Mask> */}
                    <NavTabs/>
                   <div className="positions">
                        <Banner>
                            <p className="font-md" style={myStyle.colors}>It is rewarding to play such a crucial role in the supply chain - contributing products that present valuable treatment options for patients.</p>
                            
                        </Banner>
                        <div className="svgwidth">
                            <img src={svgimg} style={myStyle.svg}/>
                        </div>
                   </div>
                    <img src={resimg} style={myStyle.imgstyles}/>
                {/* </Mask> */}
            </div>
            <main className="mt-5" style={myStyle.my}>
                <Responsi />
            </main>
        </div>
    );
}

export default Responsibility;