import React from 'react';
import './index.css';
import './Summary.css'

class Summary extends React.Component {
	render() {
		return (
			<html>
      <div className="parallax"></div>
			<div className="bg-text">
        <h1>Summary Page</h1>
				<br/>
				<body>
					<p>
						This is a summary of React and Node.js.
					</p>
				</body>
      </div>
			</html>
    );
	}
}

export default Summary
