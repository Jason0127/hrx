import React from 'react';
import {
    Button, Dialog,
    DialogActions, DialogContent,
    DialogTitle,
    Slide, Grid
} from '@material-ui/core';

const Transition = (props)=>{
    console.log(props)
    return(
        <Slide direction="up" {...props} />
    )
}

const ProductDetail = (item)=>{
    console.log(item)

    const aligninfo ={
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

    const alignTextinfo ={
        width: 'calc(15vmin + 35px)'
    }

    const itemsStyle ={
        display: 'inline-block'
    }

    const [open, setOpen] = React.useState(false)

    return(
        <React.Fragment>
            <Button variant="contained" color="primary" style={{display: 'inline-block', marginLeft: '75px'}} onClick={()=>setOpen(true)}>
                Detail
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                fullWidth={true}
                maxWidth="sm"
                onClose={()=>setOpen(false)}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogTitle style={{textAlign: 'center'}}>{item.productName}</DialogTitle>
                <DialogContent>
                    <div className="row">
                        <Grid item md={4}>
                            <img src={item.imgsrc} alt="img" style={{width: '100%', height: 'auto'}}/>
                        </Grid>
                        <Grid item md={8} style={aligninfo}>
                            <div style={{marginLeft: 'calc(3vmin + 10px)'}}>
                                <div className="mb-1">
                                    <div style={{display: 'inline-block', ...alignTextinfo}}>
                                        <label>NDC:</label>
                                    </div>
                                    <div style={itemsStyle}>
                                        <label>{item.NDC}</label>
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <div style={{display: 'inline-block', ...alignTextinfo}}>
                                        <label>Manufacturer:</label>
                                    </div>
                                    <div style={itemsStyle}>
                                        <label>{item.Manufacturer}</label>
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <div style={{display: 'inline-block', ...alignTextinfo}}>
                                        <label>Strength:</label>
                                    </div>
                                    <div style={itemsStyle}>
                                        <label>{item.strength}</label>
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <div style={{display: 'inline-block', ...alignTextinfo}}>
                                        <label>Dosage Form:</label>
                                    </div>
                                    <div style={itemsStyle}>
                                        <label>{item.dosageForm}</label>
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <div style={{display: 'inline-block', ...alignTextinfo}}>
                                        <label>Count:</label>
                                    </div>
                                    <div style={itemsStyle}>
                                        <label>{item.count}</label>
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <div style={{display: 'inline-block', ...alignTextinfo}}>
                                        <label>Route:</label>
                                    </div>
                                    <div style={itemsStyle}>
                                        <label>{item.route}</label>
                                    </div>
                                </div>
                                <div>
                                    <div style={{display: 'inline-block', ...alignTextinfo}}>
                                        <label>Price:</label>
                                    </div>
                                    <div style={itemsStyle}>
                                        <label>{item.price}</label>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={()=>setOpen(false)}>Close</Button>
                    <Button variant="contained" color="primary"><i className="fas fa-cart-plus mr-2"></i>Add To Cart</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default ProductDetail;