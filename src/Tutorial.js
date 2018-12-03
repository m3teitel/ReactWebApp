import React from 'react';
import './index.css';
import './Tutorial.css'
var redditSubModule = "spacePorn";
var json;

class Tutorial extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchPics() {
    fetch("http://www.reddit.com/r/" + redditSubModule + "/hot/.json?limit=10")
      .then(response => response.json())
      .then(data =>
        this.setState({
          pics: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchPics();
  }
  render() {
    const { isLoading, pics, error } = this.state;
    return (
      <React.Fragment>
				<div className="parallax"></div>
				<div className="bg-text">
					<h1>Best tutorial ever fricking made</h1>
					<br/>
					<body>
						<p>
							Y'all ready to learn how to make the best darn website on this side of the galaxy?
						</p>						
						<div id="test"></div>
						<br/>
					</body>
				</div>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
					pics.data.children.map(pic => {
						const { data } = pic;
						return(
							<div key={data.title}>
	          <img src={data.url} />
						</div>
	      );
					})
					  ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}



export default Tutorial
