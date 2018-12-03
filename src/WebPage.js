import React from 'react';
import './index.css';
import './WebPage.css';
import saturn from './Saturn.jpg';
import uranus from './Uranus.jpg';
import venus from './Venus.jpg';
import neptune from './Neptune.jpg';
import mercury from './Mercury.jpg';


class WebPage extends React.Component {
	trueClick(){
		alert('CORRECT');
	}
	falseClick(){
		alert('WRONG');
	}
	render() {
		return (
			<html class="gradient">
				<body class="bg-textwebpage">
					<h1 class="header" align="center">Best Planets Around</h1>
					<ol>
						<li>Saturn<br/><img class="move" src={saturn} alt="Saturn" height="50px"/></li>
						<li>Uranus<br/><img class="move" src={uranus} alt="Uranus" height="50px"/></li>
						<li>Venus<br/><img class="move" src={venus} alt="Venus" height="50px"/></li>
						<li>Neptune<br/><img class="move" src={neptune} alt="Neptune" height="50px"/></li>
						<li>Mercury<br/><img class="move" src={mercury} alt="Mercury" height="50px"/></li>
					</ol>
					<h3 class="questions" align="center">There are 9 planets in our solar system
						<br/><br/>
						<button class="trueBut" onClick={this.falseClick}>True</button>
						<button class="falseBut" onClick={this.trueClick}>False</button>
					</h3>
					<h3 class="questions" align="center">Mercury is the smallest planet
						<br/><br/>
						<button class="trueBut" onClick={this.trueClick}>True</button>
						<button class="falseBut" onClick={this.falseClick}>False</button>
					</h3>
					<h3 class="questions" align="center">Jupiter is the largest planet
						<br/><br/>
						<button class="trueBut" onClick={this.trueClick}>True</button>
						<button class="falseBut" onClick={this.falseClick}>False</button>
					</h3>
				</body>
			</html>
    	);
	}
}

export default WebPage