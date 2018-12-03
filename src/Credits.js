import React from 'react';
import './index.css';
import './Credits.css'
import m from './m.png';
import d from './d.png';
import e from './e.png';

class Credits extends React.Component {
	render() {
		return (
			<html>
      <div className="gradient3">
			<div className="backgtext">
        <h1>Credits Page</h1>
				<br/>
				<body>
					<p>
<h1>Team members:</h1>
</p>

<p>
<img src={m} alt="m" width="25" height="30"/> Michael Teitelbaum<br/>Developed Installation page and assisted in setting up the Node.js, React, and Firebase packages and installations. Helped with code review and version control.
</p>
<p>
<img src={d} alt="d" width="25" height="30"/> Dennis Frolov<br/> Created the Tutorial and WebPage sections as well as assisted in the graphical design process.
</p>
<p>
<img src={e} alt="e" width="25" height="30"/> Elena Zubko<br/> Researched and developed the Summary and Conclusion pages. Lead graphical designer.
</p>
<p>
<h2>References:</h2>
</p>
<p>
https://reactjs.org/
</p>
<p>
https://nodejs.org/en/
</p>
<p>
	https://www.w3schools.com/
</p>
<p>
	https://firebase.google.com/
</p>
<p>
https://reactjs.org/tutorial/tutorial.html
</p>
<p>
https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-reactjs-and-react-native/#pros%20of%20reactjs
</p>
<p>
	https://hackernoon.com/react-js-a-better-introduction-to-the-most-powerful-ui-library-ever-created-ecd96e8f4621
</p>

				</body>
      </div>
			</div>
			</html>
    );
	}
}

export default Credits
