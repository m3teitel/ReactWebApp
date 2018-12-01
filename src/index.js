import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class List1 extends React.Component {
	render() {
		return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li><Link to="/page1.js">Page1</Link></li>
        </ul>
      </div>
    );
	}
}

// ========================================

ReactDOM.render(
  <List1 name="CPS530" />,
  document.getElementById('root')
);
