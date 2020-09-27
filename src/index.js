import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import App from './pages/main/App';
import Face from './pages/face/Face';
import Fake from './pages/fake/index';


ReactDOM.render(
  	<React.StrictMode>
  		<BrowserRouter>
  			<Switch>
    			<Route path='/' exact component={App} />
    			<Route path='/facebook' component={Face} />
    			<Route path='/dash' component={Fake} />
     		</Switch>
    	</BrowserRouter>
  	</React.StrictMode>,
  	document.getElementById('root')
);