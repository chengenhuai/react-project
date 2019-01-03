import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import RouterView from "./router/RouterView"
import config from "./router/Router.config"

import store from "./redux/store"
import {Provider} from "react-redux"

document.documentElement.style.fontSize = window.innerWidth/750*100+'px'

ReactDOM.render( 
<Provider store={store}>
    <Router>
        <RouterView routes={config.routes}></RouterView>
    </Router>
</Provider>, document.getElementById('root'));