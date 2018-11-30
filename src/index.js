import React from 'react';
import ReactDOM from 'react-dom';
class List extends React.Component {
	render() {
		return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li><a href="page1.js">Page1</a></li>
        </ul>
      </div>
    );
	}
}

// ========================================

ReactDOM.render(
  <List name="CPS530" />,
  document.getElementById('root')
);
