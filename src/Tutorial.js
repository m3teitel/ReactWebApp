import React from 'react';
import './index.css';
import './Tutorial.css'

var redditSubModule = "SpacePorn";
			var http = require('http');
			var name = "";
			function getRedditPosts() {
				var url = "http://www.reddit.com/r/" + redditSubModule + "/new/.json?limit=50";
				var request = http.get(url, function(response) {
					var json = '';
					response.on('data', function(chunk) {
						json += chunk;
					});
					response.on('end', function() {
						var redditResponse = JSON.parse(json);
						redditResponse.data.children.forEach(function(child) {
							if(child.data.domain !== 'self.node') {
								this.name += '-------------------------------';
								this.name += 'Author : ' + child.data.author;
								this.name += 'Domain : ' + child.data.domain;
								this.name += 'Title : ' + child.data.title;
								this.name += 'URL : ' + child.data.url;
							}
						});
					})
				});
				request.on('error', function(err) {
					console.log(err);
				});
			}
			getRedditPosts().
class Tutorial extends React.Component {
	render() {
		return (
			<html>
				<div className="parallax"></div>
				<div className="bg-text">
					<h1>Best tutorial ever fricking made</h1>
					<br/>
					<body>
						<p>
							Y'all ready to learn how to make the best darn website on this side of the galaxy?
						</p>
						<div>
							this.name
						</div>
						<br/>
					</body>
				</div>
			</html>
    	);
	}
}

export default Tutorial
