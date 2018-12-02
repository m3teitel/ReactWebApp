import React from 'react';
import './index.css';
import './WebPage.css'

class WebPage extends React.Component {
	render() {
		return (
			<html>
      <div className="parallax"></div>
			<div className="bg-text">
        <h1>WebPage Page</h1>
				<br/>
				<body>
					<p>
						This is a WebPage of React and Node.js.
					</p>
				</body>
      </div>
			</html>
    );
	}
}

export default WebPage
