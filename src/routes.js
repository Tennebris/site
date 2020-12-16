import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

import App from './pages/main/App';
import Face from './pages/face/Face';
import Fake from './pages/fake/index';
import Adm from './pages/admin/index';

const getToken = (t) => localStorage.getItem(t);

const PrivateFace = ({component: Component, token, ...rest}) => {
	return(
		<Route
			{...rest}
			render={props => 
				getToken(token) ? (
					<Component {...props} />
				):(
					<Redirect to={{pathname: "/", state:{ from: props.location} }} />
				)
			}
		/>
	)
}

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={App} />
			<Route path='/facebook' component={Face} token='code'/>
			<PrivateFace path='/dash' component={Fake} token='status'/>
			<Route path='/admin' component={Adm} />
 		</Switch>
	</BrowserRouter>
)

export default Router;
