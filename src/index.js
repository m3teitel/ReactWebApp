import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Summary from './Summary'
import './index.css';

class List1 extends React.Component{
	render() {
		return (
			<Router>
				<div>
						<Link to="/Summary">
							<button className="nav-button">Summary</button>
						</Link>
						<Link to="/List">
							<button className="nav-button">Installation</button>
						</Link>
						<Link to="/List">
							<button className="nav-button">Tutorial</button>
						</Link>
						<Link to="/List">
							<button className="nav-button">Web Page</button>
						</Link>
						<Link to="/List">
							<button className="nav-button">Conclusion</button>
						</Link>
						<Link to="/List">
							<button className="nav-button">Credits</button>
						</Link>
						<Route path="/Summary" component={Summary} />
					</div>
			</Router>
    );
	}
}

ReactDOM.render(
  <List1 name="CPS530" />,
  document.getElementById('root')
);
