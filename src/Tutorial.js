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
    fetch("https://www.reddit.com/r/" + redditSubModule + "/hot/.json?limit=2")
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
				<html class="gradient">
				<div className="bgtext">
					<h1 class="webHead">How to make your own Website!!1! ( ͡° ͜ʖ ͡°)</h1>
					<br/>
					<body>
						<p class="speaker">
							All right, so you've installed React and Node.js and you're just itching to get started. Well, now it's time for you to learn how you can make a
              goddamn masterpiece like this website. Create a new file and name it whatever you would like. In this tutorial, we will be referring to the page
              as firstPage.js. This first thing we're going to do is import the actual React framework. We'll also be using a style sheet to modify our page,
              so create a a new file in the same directory as firstPage.js and name it firstSheet.css, and then import it as well into our program.
						</p>
            <pre class="code"><code>
              import React from 'react';<br/>
              import './firstSheet.css';
            </code></pre>
						<p class="speaker">
              After importing the necessary tools, we are now going to create our first class in React, which will also extend the React framework. Name it after
              the name of the file, so since ours is called firstPage.js, our will look like this:
            </p>
            <pre class="code"><code>{'class firstPage extends React.Component {\n  render() {\n    return (\n\n    );\n  }\n}\n\nexport default firstPage'}    
            </code></pre>
            <p class="speaker">
              Now, within the return brackets, we can starting writing our html code. Since you have come here to learn React and Node.js, it is presumed that you
              have at least basic knowledge of html. As such, we are going to add our basic skeleton code inside the brackets.
            </p>
            <pre class="code"><code>{'return(\n  <html>\n    <body>\n\n    </body>\n  </html>\n);'}             
            </code></pre>
            <p class="speaker">
              Now, we can customize this however we like! first, let's add a title to our page.
            </p>
            <pre class="code"><code>{'<html>\n  <body>\n    <h1 align="center">Best Planets Around</h1>\n\n  </body>\n</html>'}             
            </code></pre>
            <p class="speaker">
              Let's throw a list onto the page. Here, we are obsessed with space, so it's going to be a list of my favourite planets, but you can do whatever topic you like.
            </p>
            <pre class="code"><code>{'<h1 align="center">Best Planets Around</h1>\n<ol>\n  <li>Saturn<br/><img src={saturn} alt="Saturn" height="50px"/></li>\n  <li>Uranus<br/><img src={uranus} alt="Uranus" height="50px"/></li>\n  <li>Venus<br/><img src={venus} alt="Venus" height="50px"/></li>\n  <li>Neptune<br/><img src={neptune} alt="Neptune" height="50px"/></li>\n  <li>Mercury<br/><img src={mercury} alt="Mercury" height="50px"/></li>\n</ol>'}
            </code></pre>
            <p class="speaker">
              You see we are linking to images here, but where are they you may ask? First, download 5 images and put them in same folder as your firstPage.js. To access these
              images in React, simply add them to your imports at the top of the file like so:
            </p>
            <pre class="code"><code>
              import saturn from './Saturn.jpg';<br/>
              import uranus from './Uranus.jpg';<br/>
              import venus from './Venus.jpg';<br/>
              import neptune from './Neptune.jpg';<br/>
              import mercury from './Mercury.jpg';
            </code></pre>
            <p class="speaker">
              Make sure that the path to the image is correct and that whatever you name the import, it is the same tag that the image field is calling in its src attribute.<br/><br/>
              Let's spice things up a little now. How about we add in a small pop quiz to any visitors to the page? Keeping with the theme of space, let us make some true and false buttons.
            </p>
            <pre class="code"><code>{'<h3 align="center">There are 9 planets in our solar system\n  <br/><br/>\n  <button onClick={this.falseClick}>True</button>\n  <button onClick={this.trueClick}>False</button>\n</h3>'}
            </code></pre>
            <p class="speaker">
              Did you notice the onClick attribute of both buttons? They are linking to methods! Let's add these methods right before our render method at the top of our code.
            </p>
            <pre class="code"><code>{'class WebPage extends React.Component {\n  trueClick(){\n\n  }\n  falseClick(){\n\n  }\n  render() {'}
            </code></pre>
            <p class="speaker">
              Inside these methods you can put any action you would like to be performed whenever the respective button is clicked. We're not going to get too fancy here, so let's just alert the visitor.
            </p>
            <pre class="code"><code>{'trueClick(){\n  alert(\'CORRECT\');\n}\nfalseClick(){\n  alert(\'WRONG\');\n}'}
            </code></pre>
            <p class="speaker">
              Now that our button methods are made, let's add a few more.
            </p>
            <pre class="code"><code>{'<h3 align="center">Mercury is the smallest planet\n  <br/><br/>\n  <button onClick={this.trueClick}>True</button>\n  <button onClick={this.falseClick}>False</button>\n</h3>\n<h3 align="center">Jupiter is the largest planet\n  <br/><br/>\n  <button onClick={this.trueClick}>True</button>\n  <button onClick={this.falseClick}>False</button>\n</h3>'}
            </code></pre>
            <p class="speaker">
              All right! Now this is looking like a webpage!<br/>It is looking a bit barren though, isn't it? Don't worry, we're going to make it beautiful. Remember that firstSheet.css we made all the way
              back at the start? It's time to finally use it. Go ahead and open it up. The first thing we're going to be adding is a little pop to our title so it stands out a bit.
            </p>
            <pre class="code"><code>{'.header {\n  font-size: 40px;\n  font-weight: bold;\n  color: white;\n  text-shadow: 4px 4px 4px rgba(0,0,0, 0.74);\n  text-align: center;\n}'}
            </code></pre>
            <p class="speaker">
              Now to assign this class to our title, simply add a class attribute to it in our firstPage.js file.
            </p>
            <pre class="code"><code>{'<body>\n  <h1 class="header" align="center">Best Planets Around</h1>'}
            </code></pre>
            <p class="speaker">
              That title's looking mighty fine now, thanks to the power of css. You know what, let's spice up a bunch of other items.<br/>
              How about adding some moving text and images when we hover over the page? (Add this to your firstSheet.css):
            </p>
            <pre class="code"><code>{'li {\n  transition: all 0.4s;\n}\n\nhtml:hover li {\n  top: -100%;\n  left: -100%;\n  transform: translate(94%, 0%);\n}\n\n.move {\n  transition: all 0.4s;\n}\n\nhtml:hover .move {\n  top: -100%;\n  left: -100%;\n  transform: translate(-30%, -135%);\n}'}
            </code></pre>
            <p class="speaker">
              Since we are assigning a hover function to the li tag, we do not need to assign a specific class to it. Don't forget to assign the move class to our images, however.
            </p>
            <pre class="code"><code>{'<h1 class="header" align="center">Best Planets Around</h1>\n<ol>\n  <li>Saturn<br/><img class="move" src={saturn} alt="Saturn" height="50px"/></li>\n  <li>Uranus<br/><img class="move" src={uranus} alt="Uranus" height="50px"/></li>\n  <li>Venus<br/><img class="move" src={venus} alt="Venus" height="50px"/></li>\n  <li>Neptune<br/><img class="move" src={neptune} alt="Neptune" height="50px"/></li>\n  <li>Mercury<br/><img class="move" src={mercury} alt="Mercury" height="50px"/></li>\n</ol>'}
            </code></pre>
            <p class="speaker">
              Now that's seriously spiced up! Anybody visiting won't know what hit 'em!<br/>
              Our top half of the page is looking nice now, but those buttons seem so bland. How about we add some colour and depth to them?
            </p>
            <pre class="code"><code>{'.trueBut{\n  opacity: 0.75;\n  background-color: rgb(1, 150, 50);\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  border-radius: 5px;\n  font-family: "Calibri";\n  font-size: 20px;\n}\n\n.falseBut{\n  opacity: 0.75;\n  background-color: rgb(146, 4, 4);\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  border-radius: 5px;\n  font-family: "Calibri";\n  font-size: 20px;\n}\n\n.trueBut:hover {\n  opacity: 1\n}\n\n.falseBut:hover {\n  opacity: 1\n}'}
            </code></pre>
            <p class="speaker">
              If you read through the code, you'll see that we just touched up the buttons' colour and font, gave them more width through padding, rounded edges using border-radius,
              and finally made them slightly transparent so that when you hover over them, they come to full opacity.<br/>
              The buttons are super nice now, but that makes the questions seem lacking. Let's touch them up too.
            </p>
            <pre class="code"><code>{'.questions {\n  text-shadow: 2px 2px 2px rgba(0,0,0, 0.74);\n  font-family: "Calibri";\n  font-size: 25px;\n}'}
            </code></pre>
            <p class="speaker">
              Don't foget to add the classes in your firstProject.js!
            </p>
            <pre class="code"><code>{'<h3 class="questions" align="center">There are 9 planets in our solar system\n  <br/><br/>\n  <button class="trueBut" onClick={this.falseClick}>True</button>\n  <button class="falseBut" onClick={this.trueClick}>False</button>\n</h3>\n<h3 class="questions" align="center">Mercury is the smallest planet\n  <br/><br/>\n  <button class="trueBut" onClick={this.trueClick}>True</button>\n  <button class="falseBut" onClick={this.falseClick}>False</button>\n</h3>\n<h3 class="questions" align="center">Jupiter is the largest planet\n  <br/><br/>\n  <button class="trueBut" onClick={this.trueClick}>True</button>\n  <button class="falseBut" onClick={this.falseClick}>False</button>\n</h3>'}
            </code></pre>
            <p class="speaker">
              Ok we're almost done - let's just make the general area nicer, and maybe add in a background gif? In our example we use 'stars.gif', but download any gif you would like
              and put it in the same folder as your other files, then simply change the name in the following code:
            </p>
            <pre class="code"><code>{'.bg-textwebpage {\n  background-color: rgb(0,0,0); /* Fallback color */\n  color: rgb(255, 255, 255);\n  font-weight: bold;\n  border: 3px solid #8ad1b5;\n  position: relative;\n  width: 80%;\n  padding: 20px;\n  text-align: left;\n  background-image: url(\'stars.gif\');\n  background-size: cover;\n}'}
            </code></pre>
            <p class="speaker">
              Remember to add the class tag:
            </p>
            <pre class="code"><code>{'<html>\n  <body class="bg-textwebpage">\n    <h1 class="header" align="center">Best Planets Around</h1>'}
            </code></pre>
            <p class="speaker">
              And that's it! Pretty simple huh? Now you know how to utilise React and Node.js effectively, very much so if your webpage is anything to go by. DAMN it looks good.
              Sorry, im getting excited.....<br/>and flustered......<br/>.........<br/>....mmmmmmmm................<br/>.......<br/>............<br/>...............ok I'll leave now.
            </p>
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
        </html>
      </React.Fragment>
    );
  }
}

export default Tutorial