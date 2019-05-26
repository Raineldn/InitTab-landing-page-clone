const title = document.querySelector('.title');
const author = document.querySelector('.author');
const score = document.querySelector('.score');

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

popularPosts.forEach(function(p){
	title.innerHTML += `
	<p>${p.title}</p>
	<p class="author">Posted by: <span class="redditor">${p.author}</span></p>
	<p class="score">Reddit Score: ${p.score}</p>
	<a href="#" class="reddit-link">Link to Comments</a>
	`;
})

