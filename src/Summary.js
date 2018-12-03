import React from 'react';
import './index.css';
import './summary.css';


class Summary extends React.Component {
	render() {
		return (
			<div>
      <div className="parallax"/>
			<div className="bg-text">
        <h1>Summary Page</h1>
				<br/>

					<p>
						<h1>Frontend: React</h1>

						<p>
						React is an open-source JavaScript library for building user interfaces for web and mobile applications. 
						It is one of the most popular UI library and framework due to multiple factors including its fast learning curve, functionality, and simplicity. 
						React is mainly used for single page applications with dynamic controls and complex components since both of these can be handled easily. 
						</p>

						<p>
						<b>Strengths</b>
						</p>

						<p>
						Declarative: the coder describes what to render and has no component boilerplate that needs to be generated. 
						</p>

						<p>
						Fast Learning Curve: it is very easy to learn how to code in React if you have a good grasp on JavaScript. 
						React also has very clear and intuitive syntax. This eliminates the need to learn a new language to code in and therefore saves you time. 
						</p>

						<p>
						One-way Data Binding: this makes debugging the code a lot easier as you will always know what caused for a state to change. 
						</p>

						<p>
						Functional: in React you do not have to use classes and instead the whole UI can be implemented through functions.
						</p>


						<p>
						<b>Weaknesses</b>
						</p>

						<p>
						Fast Paced: the React environment is constantly changing thus forcing developers to keep relearning, which could be hard to keep up with the pace. 
						</p>

						<p>
						Set Up: setting up to use React involves downloading a lot of packages and ensuring they are all working properly.
						</p>

						<p>
						Overload: in the long run, components can become unreadable and unmanageable because of the sheer amount of functions there are. 
						</p>

						<p>
						</p>

						<p>
						<h1>Backend: Express</h1>
						</p>

						<p>
						Express is an open-source application framework for Node.js. It has grown in popularity due to its flexibility, simplicity, extensibility, and performance. 
						The best uses of Express are for applications that communicate with third party servers, real-time applications, and ones that monitor the visitor’s actions.
						</p>

						<p>
						<b>Strengths</b>
						</p>

						<p>
						Fast Development: Expresses uses JavaScript on both the backend and frontend which results in the developer not losing time learning a new language. 
						</p>

						<p>
						I/O Handling: handles a lot of concurrent actions with ease and is great for handling input from users.
						</p>

						<p>
						Community: code is always reviewed and improved with its large open-source community.
						</p>

						<p>
						<b>Weaknesses</b>
						</p>

						<p>
						Event-driven: it is a single threaded framework and therefore uses callbacks which can be difficult to understand and can easily entangle the code. 
						</p>

						<p>
						Organization: code organization is hard to maintain in the development process.
						</p>
					</p>
     		 </div>
		</div>
    );
	}
}

export default Summary
