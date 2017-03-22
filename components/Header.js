import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="logo fl"><Link to="/"></Link></div>
				<ul className="nav">
					<li><Link to="/code">实战</Link></li>
					<li><Link to="/program">路径</Link></li>
					<li><Link to="/wenda">猿问</Link></li>
					<li><Link to="/article">手记</Link></li>
				</ul>
				<ul className="login-area">
					<li>
						<Link to="/"><i className="iconfont icon-phone"></i></Link>
					</li>
					<li>
						<Link to="/"><i className="iconfont icon-lingsheng"></i></Link>
					</li>
					<li>
						<Link to="/"><i className="iconfont icon-youjian"></i></Link>
					</li>
					<li>
						<Link to="/"><img src="images/user.png" /></Link>
					</li>
				</ul>
				<div className="search">
					<input type="text" name="" className="sea-ipt" />
					<input type="button" name="" className="sea-btn" />
					<i className="sea-icon iconfont icon-sousuo"></i>
				</div>
			</div>
		);
	}
}
