import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Summary from './Summary.js';
import Installation from './Installation';
import Tutorial from './Tutorial';
import WebPage from './WebPage';
import Conclusion from './Conclusion';
import Credits from './Credits';
import circle from './circle2.gif';


import './index.css';

class List1 extends React.Component{
	render() {
		return (
			<Router>

				<div className="buttons" align="center">
				
<div class="container">
<img src={circle} alt="circle" width="200" height="200"/>
<div class="centered"> <h1 style={{fontSize: "30px",}}>CPS 530</h1> </div>
</div>

						<Link to="/Summary.js">
							<button className="nav-button">Summary</button>
						</Link>
						<Link to="/Installation">
							<button className="nav-button">Installation</button>
						</Link>
						<Link to="/Tutorial">
							<button className="nav-button">Tutorial</button>
						</Link>

&nbsp;


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
