import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Banner extends Component {
	render() {
		return (
			<div className="banner container">
				<div className="mask"></div>
				<ul className="item">
					<li><Link to="/">前端开发 <i className="iconfont icon-zuojiantou"></i></Link></li>
					<li><Link to="/">后端开发 <i className="iconfont icon-zuojiantou"></i></Link></li>
					<li><Link to="/">移动开发 <i className="iconfont icon-zuojiantou"></i></Link></li>
					<li><Link to="/">数据库 <i className="iconfont icon-zuojiantou"></i></Link></li>
					<li><Link to="/">云计算&大数据 <i className="iconfont icon-zuojiantou"></i></Link></li>
					<li><Link to="/">运维&测试 <i className="iconfont icon-zuojiantou"></i></Link></li>
					<li><Link to="/">视觉设计 <i className="iconfont icon-zuojiantou"></i></Link></li>
				</ul>
				<div className="ban">
					<ul>
						<li><img src="images/ban1.jpg" /></li>
					</ul>
				</div>
			</div>
		);
	}
}
