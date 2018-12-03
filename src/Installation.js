import React from 'react';
import './index.css';
import './Installation.css'

class Installation extends React.Component {
	render() {
		return (
			<html className="gradient">
				<body className="sectionHolder">
					<h1 className="pageH1">
						How to Install and Setup a Node.js and React project hosted on Firebase
					</h1>
					<br/>
					<div>
						<h2 className="sectionText">
							First Download and Install Node.js from here: <a href="https://nodejs.org/en/">Node.js Website</a>.
						</h2>
						<img src={require('./pic1.PNG')} alt="pic1" style={{width: '50%', height: '50%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							Login <a href="https://nodejs.org/en/">here</a> with your google account, then click on "Go to Console" at the top-right.
						</h2>
						<img src={require('./pic2.PNG')} alt="pic2" style={{width: '70%', height: '70%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							Click on "Add Project"
						</h2>
						<img src={require('./pic3.PNG')} alt="pic3" style={{width: '30%', height: '30%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							Name your project, accept the terms, and create your project
						</h2>
						<img src={require('./pic4.PNG')} alt="pic4" style={{width: '20%', height: '20%'}} className="pic"/>
						<img src={require('./pic5.PNG')} alt="pic5" style={{width: '20%', height: '20%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							This is the dashboard for your Firebase project.
						</h2>
						<img src={require('./pic6.PNG')} alt="pic6" style={{width: '30%', height: '30%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							On your computer, browse to a directory for your project<br/>
							Hold shift and right click in your directory, then select “Open PowerShell window here”.<br/>
							The PowerShell window will open.
						</h2>
						<img src={require('./pic7.PNG')} alt="pic3" style={{width: '30%', height: '30%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							In PowerShell use the following commands to install React and Firebase:<br/>
							       	a.	npm install -g create-react-app => To install the react framework<br/>
							      	b.	npm install -g firebase-tools => tools for hosting your project on firebase
						</h2>
						<img src={require('./pic8.PNG')} alt="pic8" style={{width: '40%', height: '40%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
								Create a project by running the command: create-react-app yourAppNameHere<br/>
								This process will download and setup all the required modules for a react project.
							</h2>
						<img src={require('./pic9.PNG')} alt="pic9" style={{width: '40%', height: '40%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							The script will create all the basic files for a react project in the current directory.
							The .js files are in the /src folder.
						</h2>
						<img src={require('./pic10.PNG')} alt="pic10" style={{width: '40%', height: '40%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							To link your firebase project to this web application you must add your api key script<br/>
							from Firebase to the index.html file in the public folder in your web application.<br/>
							Go to your Firebase Console and click on the following icon:
						</h2>
						<img src={require('./pic11.PNG')} alt="pic11" style={{width: '40%', height: '40%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							Copy the script text and add it to the bottom of your index.html file
						</h2>
						<img src={require('./pic12.PNG')} alt="pic12" style={{width: '40%', height: '40%'}} className="pic"/>
						<img src={require('./pic13.PNG')} alt="pic13" style={{width: '40%', height: '40%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							Now open PowerShell in the main directory of your web application and<br/>
							run the command: npm run build<br/>
								This will compile your application
						</h2>
						<img src={require('./pic17.PNG')} alt="pic17" style={{width: '40%', height: '40%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							Now open PowerShell in the main directory of your web application<br/>
							and run the command: firebase login<br/>
							Login with your google account
						</h2>
						<img src={require('./pic14.PNG')} alt="pic14" style={{width: '20%', height: '20%'}} className="pic"/>
						<img src={require('./pic15.PNG')} alt="pic15" style={{width: '20%', height: '20%'}} className="pic"/>
						<img src={require('./pic16.PNG')} alt="pic16" style={{width: '20%', height: '20%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							Next initialize your firebase project by running: firebase init<br/>
							For the prompts will want to select the following:<br/>
									i.	Hosting<br/>
									ii.	Use build as the public directory<br/>
									iii.	Configure as a single-page app? Yes<br/>
									iv.	Overwrite? No<br/>
						</h2>
						<img src={require('./pic18.PNG')} alt="pic18" style={{width: '40%', height: '40%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<h2 className="sectionText">
							Finally, deploy your application by running the command: firebase deploy<br/>
							This will load your project to the firebase server and you will be able to access it at the link provided.
						</h2>
						<img src={require('./pic19.PNG')} alt="pic19" style={{width: '40%', height: '40%'}} className="pic"/>
					</div>
					<br/>
					<div>
						<p className="finalText">
							You are now ready to start modifying the .js and .css files inside<br/>
							of the /src directory to create your web application.<br/>
							When making changes to your application, use the command “npm start”<br/>
							to see a local development copy.<br/>
							When finished making changes run the command “npm run build” followed<br/>
							by “firebase deploy” to compile and deploy your changes to the server.<br/>
					</p>
					</div>
				</body>
			</html>
    );
	}
}

export default Installation
