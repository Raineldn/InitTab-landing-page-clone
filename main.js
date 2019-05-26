const popularEntries = document.querySelector('.popular-entries');
const relevantHistories = document.querySelector('.relevant-histories');
const githubIssues = document.querySelector('.issues-content');

// Popular On R/JavaScript
const popularPosts = [
{
	"title": "Why I think Chingu is awesome",
	"author": "u/Raine",
	"score": "142"
},
{
	"title": "JavaScript's for loop is surprisingly fast",
	"author": "u/TurnaroundGames",
	"score": "48"
},
{
	"title": "great article to know about async programming in node js",
	"author": "u/h_sa1994",
	"score": "156"
},
{
	"title": "pixi.js - The HTML5 Creation Engine: Create beautiful digital content with the fastest, most flexible 2D WebGL renderer",
	"author": "u/magenta_placenta",
	"score": "62"
},
{
	"title": "I made a version of Gitfolio with vanilla JS",
	"author": "u/weakN0",
	"score": "6"
},
{
	"title": "Feeling the imposter syndrome hard, need advice",
	"author": "u/imanuglyperson",
	"score": "15"
},
{
	"title": "Webpack From Zero to Hero - Chapter 3: Everything is a Module",
	"author": "u/rubenspgcavalcante",
	"score": "110"
},
{
	"title": "Can't understand why generators are usefull besides async operations",
	"author": "u/neutral24",
	"score": "39"
},
{
	"title": "Strict null checking the Visual Studio Code codebase",
	"author": "u/dwaxe",
	"score": "110"
},
{
	"title": "Snake in 100 lines of JS.",
	"author": "u/StuckOnCoboldLevel",
	"score": "36"
}];

popularPosts.forEach(function(li){
	popularEntries.innerHTML += `
	<li class="rjs">
	<h3 class="title">${li.title}</h3>
	<h3 class="author">Posted by: <span class="redditor">${li.author}</span></h3>
	<h3 class="score">Reddit Score: ${li.score}</h3>
	<h3><a href="#" class="reddit-link">Link to Comments</a></h3></li>
	`;
})

const relevantHistory = [
{
	"icon": "github",
	"link": "iamshaunjp/modern-javascript: All lecture files from the...",
	"time": "22 minutes ago"
},
{
	"icon": "bootstrap",
	"link": "JavaScript - Bootstrap",
	"time": "5 hours ago"
},
{
	"icon": "udemy",
	"link": "Modern JavaScript (from Novice to Ninja) | Udemy",
	"time": "a day ago"
},
{
	"icon": "github",
	"link": "getify/You-Dont-Know-JS: A book series on JavaScript. @Y...",
	"time": "4 days ago"
},
{
	"icon": "github",
	"link": "iamshaunjp/modern-javascript at lesson-108",
	"time": "4 days ago"
},
{
	"icon": "github",
	"link": "modern-javascript/weather_app at lesson-108 · iamshaunjp...",
	"time": "4 days ago"
},
{
	"icon": "github",
	"link": "modern-javascript/weather_app/img at lesson-108 · iamsha...",
	"time": "4 days ago"
},
{
	"icon": "github",
	"link": "modern-javascript/weather_app/img/icons at lesson-108 · ...",
	"time": "4 days ago"
},
{
	"icon": "github",
	"link": "modern-javascript/weather_app at lesson-100 · iamshaunjp...",
	"time": "4 days ago"
},
{
	"icon": "github",
	"link": "iamshaunjp/modern-javascript at lesson-100",
	"time": "4 days ago"
},
{
	"icon": "github",
	"link": "modern-javascript/weather_app at lesson-99 · iamshaunjp/...",
	"time": "4 days ago"
},
{
	"icon": "github",
	"link": "modern-javascript/weather_app/scripts at lesson-99 · iam...",
	"time": "4 days ago"
}];

relevantHistory.forEach(function(li){
	relevantHistories.innerHTML += `
	<li class="histories">
	<img src="imgs/${li.icon}-icon.png" height="17px" width="17px"><a href="#" class="link"> ${li.link}</a><span class="time"> ${li.time}</span>
	</li>
	`;
})

const issues = [
{
	"repo": "Repo: rachelandrew/cssgrid-ama",
	"issue": "Issue #85",
	"note": "vertical scrollbar when using css grid"
},
{
	"repo": "Repo: Raineldn/github-upload",
	"issue": "Issue #1",
	"note": "Planning the upload to GitHub"
},
{
	"repo": "Repo: Raineldn/github-slideshow",
	"issue": "Issue #2",
	"note": "Your first contribution"
},
{
	"repo": "Repo: Raineldn/github-slideshow",
	"issue": "Issue #1",
	"note": "Getting started with GitHub"
},
{
	"repo": "Repo: Lorem ipsum dolor sit amet.",
	"issue": "Issue #4",
	"note": "Lorem ipsum dolor sit amet, consectetur."
}];

issues.forEach(function(li){
	githubIssues.innerHTML += `
	<li>
	<div class="repo">${li.repo}</div>
	<div class="issue">${li.issue}</div>
	<div class="note">${li.note}</div>
	</li>
	`;
});











