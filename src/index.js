import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Summary from './Summary.js';
import Installation from './Installation';
import Tutorial from './Tutorial';
import WebPage from './WebPage';
import Conclusion from './Conclusion';
import Credits from './Credits';
import fireball from './ballsoffire.jpg';
import './index.css';

class List1 extends React.Component{
	render() {
		return (
			<Router>
				<div align="center">
						<Link to="/Summary.js">
							<button className="nav-button">Summary2121</button>
						</Link>
						<Link to="/Installation">
							<button className="nav-button">Installation</button>
						</Link>
						<Link to="/Tutorial">
							<button className="nav-button">Tutorial</button>
						</Link>
						<img src={fireball} height="100"/>
						<Link to="/WebPage">
							<button className="nav-button">Web Page</button>
						</Link>
						<Link to="/Conclusion">
							<button className="nav-button">Conclusion</button>
						</Link>
						<Link to="/Credits">
							<button className="nav-button">Credits</button>
						</Link>
						<Route path="/Summary.js" component={Summary} />
						<Route path="/Installation" component={Installation} />
						<Route path="/Tutorial" component={Tutorial} />
						<Route path="/WebPage" component={WebPage} />
						<Route path="/Conclusion" component={Conclusion} />
						<Route path="/Credits" component={Credits} />
					</div>
			</Router>
    );
	}
}

ReactDOM.render(
  <List1 name="CPS530" />,
  document.getElementById('root')
);
