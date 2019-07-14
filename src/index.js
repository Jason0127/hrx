import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './css/styles.css';
import NavTabs from './component/nav';
import Home from './component/home';
import Ourcom from './component/ourcom';
import Footer from './component/footer';
import Contact from './component/contact';
import PartnerShip from './component/partnershp';
import Responsibility from './component/responsibility';
import News from './component/news';
import Productsrv from './component/pdct&srvc';
import Login from './component/user-login/home_login';
import Portal from './component/user-login/portal';
import Cart from './component/user-login/cart';

class Index extends Component{
    constructor(props){
        super(props)
        this.state = {
            sample: 'sapmle'
        }
    }
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route test="test" path="/ourcompany" component={Ourcom}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/responsibility" component={Responsibility}/>
                        <Route path="/partnership" component={PartnerShip}/>
                        <Route path="/news" component={News}/>
                        <Route path="/product&services" component={Productsrv}/>
                        <Route path="/home" component={Login}/>
                        <Route path="/portal" component={Portal} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </BrowserRouter>
                <Footer />
            </React.Fragment>
        );
    }
}


ReactDOM.render(<Index />, document.querySelector('#root'));