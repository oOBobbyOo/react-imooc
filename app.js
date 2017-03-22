
import React, { Component } from 'react';
import { render } from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Index from './components/Index';
import Code from './components/Code';
import Program from './components/Program';
import Wenda from './components/Wenda';
import Article from './components/Article';

import './fonts/iconfont.css';
import './css/normalize.css';
import './css/style.scss';

export class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
			  	<Route path="/" component={Index} />
	            <Route path="/code" component={Code} />
	            <Route path="/program" component={Program} />
	            <Route path="/wenda" component={Wenda} />
	            <Route path="/article" component={Article} />
			</Router>
		);
	}
}

render(<App />, document.getElementById('app'));
