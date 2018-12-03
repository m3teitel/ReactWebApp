import React from 'react';
import './index.css';
import './Credits.css'
import m from './m.png';
import d from './d.png';
import e from './e.png';

class Credits extends React.Component {
	render() {
		return (
			
      <div className="gradient">
			<div className="backgtext">
        <h1>Credits Page</h1>
				<br/>
				<body>
					<p>
<h1>Team members:</h1>
</p>

<p>
<img src={m} alt="m" width="25" height="30"/> Michael Teitelbaum:  HAVE TO WRITE CREDS!!!!!!
</p>
<p>
<img src={d} alt="d" width="25" height="30"/> Dennis Frolov:
</p>
<p>
<img src={e} alt="e" width="25" height="30"/> Elena Zubko:
</p>
<p>
<h2>References:</h2> 
</p>
<p>
https://hackernoon.com/react-js-a-better-introduction-to-the-most-powerful-ui-library-ever-created-ecd96e8f4621
</p>
<p>
https://reactjs.org/
</p>
<p>
https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-reactjs-and-react-native/#pros%20of%20reactjs
</p>
<p>
https://apiko.com/blog/express-mobile-app-development/
</p>
					
				</body>
      </div>
			</div>
    );
	}
}

export default Credits
