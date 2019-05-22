import React from 'react';

const mask ={
    styles:{
        background: 'linear-gradient(rgba(0, 0, 0, 0.356),rgba(20, 20, 20, 0.74))',
        height: '100vh'
    }
}

const Mask = (props) => {
    return (
        <div style={mask.styles}>
            {props.children}
        </div>
    );
};

export default Mask;