import React from 'react';
import './index.css';
import './Tutorial.css'
var redditSubModule = "spacePorn";

class Tutorial extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchPics() {
    fetch("https://www.reddit.com/r/" + redditSubModule + "/hot/.json?limit=10")
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
					<h1>How to make your own Website!!1! ( ͡° ͜ʖ ͡°)</h1>
					<br/>
					<body>
						<p align="left">
							All right, so you've installed React and Node.js and you're just itching to get started. Well, now it's time for you to learn how you can make a
              goddamn masterpiece like this website. Create a new file and name it whatever you would like. In this tutorial, we will be referring to the page
              as firstPage.js. This first thing we're going to do is import the actual React framework. We'll also be using a style sheet to modify our page,
              so create a a new file in the same directory as firstPage.js and name it firstSheet.css, and then import it as well into our program.
						</p>
            <pre align="left"><code>
              import React from 'react';<br/>
              import './firstSheet.css';
            </code></pre>
						<p align="left">
              After importing the necessary tools, we are now going to create our first class in React, which will also extend the React framework. Name it after
              the name of the file, so since ours is called firstPage.js, our will look like this:
            </p>
            <pre align="left"><code>{'class firstPage extends React.Component {\n  render() {\n    return (\n\n    );\n  }\n}'}    
            </code></pre>
					</body>
				</div>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
					pics.data.children.map(pic => {
						const { data } = pic;
						return(
							<div key={data.title}>
						<h1>{data.title}</h1>
	          <img src={data.url} className="listimg" alt="Reddit"/>
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
