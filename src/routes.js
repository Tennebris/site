import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import App from './pages/main/App';
import Face from './pages/face/Face';
import Fake from './pages/fake/index';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={App} />
			<Route path='/facebook' component={Face} />
			<Route path='/dash' component={Fake} />
 		</Switch>
	</BrowserRouter>
)

export default Router;