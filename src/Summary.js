import React from 'react';
import './index.css';
import './summary.css'

class Summary extends React.Component {
	render() {
		return (
			<html>
      <div className="parallax"></div>
			<div>
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