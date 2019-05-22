import React from 'react';
import {Typography, Grid} from '@material-ui/core'
import img from '../../img/tim-01_19.jpg'
import img1 from '../../img/IMAGE_APRIL-01.jpg';

const myStyle= {
    fontsize: {
        fontSize: '2rem',
    },
    img: {
        position: 'relative',
        overflow: 'hidden',
        flex: '0 0 33.333333%',
        boxSizing: 'border-box',
        maxWidth: '100%',
        height: '550px',
        borderStyle: 'none'

    },
    grid: {
        // padding: '0 15px'
    },
    recentimg: {
        height: '67px',
        width: '80px'
    },
    recenttitle: {
        fontWeight: 'bolder',
        fontSize: '15px',
        color: '#535353',
        // lineHeight: '1.5rem',
        margin: '0 0'
    },
    recenttext: {
        color: '#535353',
        margin: '0',
        height: '3rem'
    },
    float: {
        float: 'left'
    }
    
}

const NewsMain =()=>{
    return(
        <div className="container">
            <section id="Hercules">
                <Typography variant="h3" align="center" style={myStyle.fontsize}>
                    Hercules Pharmaceuticals Presents At New York State Bar Association Annual Meeting on Biosimiliars
                </Typography>
            </section>
            <hr className="my-5" />
            <section id="news">
                <div className="row">
                    <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid} className="text-center">
                        <img src={img} alt="" style={myStyle.img} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} style={myStyle.grid} className="mt-5">
                        <div class="row">
                            <Grid item lg={2} md={2} sm={2} xs={2} style={{...myStyle.float, ...myStyle.grid}}>
                                <img src={img1} style={{...myStyle.img, ...myStyle.recentimg}} />
                            </Grid>
                            <Grid item lg={10} md={10} sm={10} xs={10} style={{...myStyle.float, ...myStyle.grid}}>
                                <p style={myStyle.recenttitle}>Hercules Pharmaceuticals Attends 2018 Community Oncology Alliance Conference</p>
                                <p style={myStyle.recenttext}>Hercules Pharmaceuticals, Inc. Hercules Pharmaceuticals, Inc.  (Hercules Pharmaceuticals)</p>
                            </Grid>
                        </div>
                        <hr className="my-3" />
                        <div class="row">
                            <Grid item lg={2} md={2} sm={2} xs={2} style={{...myStyle.float, ...myStyle.grid}}>
                                <img src={img1} style={{...myStyle.img, ...myStyle.recentimg}} />
                            </Grid>
                            <Grid item lg={10} md={10} sm={10} xs={10} style={{...myStyle.float, ...myStyle.grid}}>
                                <p style={myStyle.recenttitle}>Hercules Pharmaceuticals Attends 2018 Community Oncology Alliance Conference</p>
                                <p style={myStyle.recenttext}>Hercules Pharmaceuticals, Inc. Hercules Pharmaceuticals, Inc.  (Hercules Pharmaceuticals)</p>
                                <p style={myStyle.recenttext}>Hercules Pharmaceuticals, Inc. Hercules Pharmaceuticals, Inc.  (Hercules Pharmaceuticals)</p>
                            </Grid>
                        </div>
                        <hr className="my-3" />
                        <div class="row">
                            <Grid item lg={2} md={2} sm={2} xs={2} style={{...myStyle.float, ...myStyle.grid}}>
                                <img src={img1} style={{...myStyle.img, ...myStyle.recentimg}} />
                            </Grid>
                            <Grid item lg={10} md={10} sm={10} xs={10} style={{...myStyle.float, ...myStyle.grid}}>
                                <p style={myStyle.recenttitle}>Hercules Pharmaceuticals Attends 2018 Community Oncology Alliance Conference</p>
                                <p style={myStyle.recenttext}>Hercules Pharmaceuticals, Inc. Hercules Pharmaceuticals, Inc.  (Hercules Pharmaceuticals)</p>
                            </Grid>
                        </div>
                        <hr className="my-3" />
                        <div class="row">
                            <Grid item lg={2} md={2} sm={2} xs={2} style={{...myStyle.float, ...myStyle.grid}}>
                                <img src={img1} style={{...myStyle.img, ...myStyle.recentimg}} />
                            </Grid>
                            <Grid item lg={10} md={10} sm={10} xs={10} style={{...myStyle.float, ...myStyle.grid}}>
                                <p style={myStyle.recenttitle}>Hercules Pharmaceuticals Attends 2018 Community Oncology Alliance Conference</p>
                                <p style={myStyle.recenttext}>Hercules Pharmaceuticals, Inc. Hercules Pharmaceuticals, Inc.  (Hercules Pharmaceuticals)</p>
                            </Grid>
                        </div>
                    </Grid>
                </div>
            </section>
        </div>
    )
}

export default NewsMain