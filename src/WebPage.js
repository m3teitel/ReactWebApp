import React from 'react';
import './index.css';
import './WebPage.css';
import saturn from './Saturn.jpg';
import uranus from './Uranus.jpg';
import venus from './Venus.jpg';
import neptune from './Neptune.jpg';
import mercury from './Mercury.jpg';


class WebPage extends React.Component {
	render() {
		return (
			<html class="gradient">
				<title>My First React Page</title>
				<body class="bg-textwebpage">
				
					<h1 align="center">Best Planets Around</h1>
					<ol>
						<li>Saturn<br/><img class="move" src={saturn} alt="Saturn" height="50px"/></li>
						<li>Uranus<br/><img class="move" src={uranus} alt="Uranus" height="50px"/></li>
						<li>Venus<br/><img class="move" src={venus} alt="Venus" height="50px"/></li>
						<li>Neptune<br/><img class="move" src={neptune} alt="Neptune" height="50px"/></li>
						<li>Mercury<br/><img class="move" src={mercury} alt="Mercury" height="50px"/></li>
					</ol>
				</body>
			</html>
    	);
	}
}

export default WebPage
