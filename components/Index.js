import React, { Component } from 'react';
import Header from './Header';
import Bk from './Bk';
import Banner from './Banner';
import Main from './Main';
import Content from './Content';
import Footer from './Footer';

export default class Index extends Component {
	render() {
		return (
			<div>
				<Header />
				<Bk />
				<Banner />
				<Main />
				<Content />
				<Footer />
			</div>
		);
	}
}
