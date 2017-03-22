import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="container">
					<div className="footer-icon">
						<Link to="/" className="icon iocn-sina"></Link> 
						<Link to="/" className="icon iocn-weixin"></Link> 
						<Link to="/" className="icon iocn-weibo"></Link> 
						<Link to="/" className="icon iocn-qzone"></Link> 
					</div>
					<div className="footer-link">
						<Link to="/">企业合作</Link> 
						<Link to="/">人才招聘</Link> 
						<Link to="/">联系我们</Link> 
						<Link to="/">讲师招募</Link> 
						<Link to="/">常见问题</Link> 
						<Link to="/">意见反馈</Link> 
						<Link to="/">慕课大学</Link> 
						<Link to="/">友情链接</Link> 
					</div>
					<div className="footer-copyright">© 2016 imooc.com  京ICP备13046642号</div>
				</div>
			</div>
		);
	}
}
