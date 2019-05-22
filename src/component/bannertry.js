import React from 'react';
import { Typography } from '@material-ui/core';

const myStyle = {
    fontSize: {
        // fontSize: '2vw',
        justifyContent: 'center',
    },
    marg: {
        
    },
}

const Banner = (props) =>{
    console.log(props)
    return(
        <div className="banner" style={myStyle.marg}>
            {/* <Typography component="p" align='left' color='inherit' style={myStyle.fontSize} className="font-md"> */}
                {props.children}
                
            {/* </Typography> */}
            
        </div>
    );
}

export default Banner;