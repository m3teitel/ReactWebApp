import React from 'react';
import './index.css';
import './Conclusion.css'
import us from './tama.png';

class Conclusion extends React.Component {
	render() {
		return (
			<html>
			<div className="gradient2">
			<div className="backgroundtext">
        <h1>Conclusion Page</h1>
				<br/>
					<p>
						Overall, using React and Node was a good experience for us. At first it was pretty tricky to install the correct packages in order to get it to work and host, but the coding was simple to learn as we were pretty familiar with it already.  It was easy to create the pages and in general the frameworks performed to our expectations. In retrospect, it would have been beneficial if we would have planned ahead of time what aspects of the frameworks we needed to use in order to avoid wasting time. We did not regret our choice in frameworks as they proved to be very intuitive and managed to fulfill all our requirements.
					</p>
						<img src={us} alt="us" width="100" height="45"/>
      </div>
			</div>
			</html>
    );
	}
}

export default Conclusion
