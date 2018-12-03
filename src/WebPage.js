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
			<html>
				<title>My First React Page</title>
				<body class="page">
					<h1>Best Planets Around</h1>
					<ol>
						<li>Saturn<br/><img src={saturn} alt="Saturn" height="50px"/></li>
						<li>Uranus<br/><img src={uranus} alt="Uranus" height="50px"/></li>
						<li>Venus<br/><img src={venus} alt="Venus" height="50px"/></li>
						<li>Neptune<br/><img src={neptune} alt="Neptune" height="50px"/></li>
						<li>Mercury<br/><img src={mercury} alt="Mercury" height="50px"/></li>
					</ol>
				</body>
			</html>
    	);
	}
}

export default WebPage
