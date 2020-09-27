import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

import App from './pages/main/App';
import Face from './pages/face/Face';
import Fake from './pages/fake/index';

const code = localStorage.getItem('code');
const status = localStorage.getItem('status');

const PrivateRouter = ({component: Component, ...rest}) => {
  return(
    <Route 
      render={props =>
        code ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
      }
    />
  )
}

const PrivateFake = ({component: Component, ...rest}) => {
  return(
    <Route 
      render={props =>
        status ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
      }
    />
  )
}

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={App} />
			<PrivateRouter path='/facebook' component={Face} />
			<PrivateFake path='/dash' component={Fake} />
 		</Switch>
	</BrowserRouter>
)

export default Router;