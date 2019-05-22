import React from 'react';
import Mask from '../hoc/mask';
import NavTabs from './nav';
import NewsMain from './news/newsmain';
import newsimg from '../img/press_01.jpg'



const myStyle = {
    imgstyles: {
        display: 'block',
        width: '100%',
        height: 'auto'
    },
    my: {
        paddingRight: '15px',
        paddingLeft: '15px',
        margin: '0 14px'
    }
}

const News =()=>{
    return(
        <div>
            <div className="new">
                {/* <Mask> */}
                    <NavTabs/>

                    <img src={newsimg} style={myStyle.imgstyles}/>
                {/* </Mask> */}
            </div>
            <main className="my-5" style={myStyle.my}>
                <NewsMain />
            </main>
        </div>
    );
}

export default News;