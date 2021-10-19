# Wheel of Time Quiz 
Click [here](https://craigthomasson.github.io/project-2-wheel-of-time-quiz/) to view the live web site 

### responsive design 
![Am I responsive](documentation/images/am-I-responsive.PNG)
<hr>

## UX

## Strategy
<br>

## Goals
* Create fun interactive quiz that fans of the wheel of time book series will enjoy playing
* To make the quiz repayable through the use of 3 sets of question with increasing levels of difficult  questions to answer
* To make the quiz intuitive to use and provide satisfying feedback for the user
* Design a quiz that is aesthetically pleasing
* To make the quiz responsive


##### To achieve these goals I will need to:
* Use JavaScript to create a fictional quiz
* Use CSS and HTML for the content and to make it look good
* Use relative and accurate source material for the quiz
* Test the quiz with fans of the book series 


## Wireframe for Original Concept

<img src="documentation/images/quiz-app.PNG" width="450" height="300" alt="wire frame of load page">

<br>

## Functionality/UserStory

## Load Screen

<img src="documentation/images/load-page.PNG" width="450" height="250" alt="image of lode page">

* On the load screen the user will see the title and wheel of time logo and see clearly the intentions the page. There are instructed to select their role to begin the quiz. The original color scheme was red black and gold but the red on black was not accessible for all user so the color scheme is now black and gold. This scheme matches a set of book covers in a more recent addition of the books so should have a good wheel of time feel to it. 
* The user will see the instruction for who to begin and the buttons to progress are clear to see.
* The user is present with 3 options novice, apprentice and aes sedai these are position with in the white tower in the will of time series and book fans will understand there meaning and feel a little more immersed in the quiz. This also gives a sense of progression moving through the roles. 


## questions and answers

<img src="documentation/images/q-and-a.PNG" width="450" height="250" alt="image of sample section of the web site">


* When the user begins the quiz a question with 4 possible answers are generated as well as an image that is related to the question but not the answer. 
* The questions are each in their own button. When clicked they will generate a correct or incorrect box depending on if they click the right or wrong answer. 
 

## response box

<img src="documentation/images/response.PNG" width="450" height="250" alt="image of contact section of the web site">

* Once the user selects an answer they will see a correct or incorrect answer box
* The correct answer box confirms the answer is correct and display a button to move to the next question
* The incorrect answer box tell the user the answer was wrong and also displays the correct answer. There is also a button to move on to the next question. 
* Once a question in answer the user will also see the question counter move up as well as the correct and incorrect answer counter. This helps the user keep track of their progress. 


## Footer

* The Footer is styled to match the header and to close off the page in an aesthetically pleasing way.
* It contains links to socials and also copyright info.


## Deployment

This project was deployed to git hub pages.
* In your repository on git hub click settings.
* click the pages tab
* on the drop down under source select your main branch.
* click save

### Clone to Run Locally
* In the repository on github click the Code dropdown button next to the green Gitpod button.
* Download ZIP file and unpackage locally and open with IDE. 


### Fork the Repo
* On GitHub, navigate to the repository you want to fork.
* In the top-right corner of the page, click Fork.

## Testing

* The site was tested in [google chrome](documentation/images/load-page.PNG), [Firefox](documentation/firefox-testing.PNG), [Microsoft edge](documentation/edge-testing.PNG) and [safari](documentation/safari-test.png).
* It was also tested on [android](documentation/android-test.jpg) and [IOS](documentation/ios-testing.jpg) phones
* As evidenced above i also tested on multiple view ports
* Links in nav bar where all tested to ensure they link to the correct page sections

## Validation

* CSS was ran through (Jigsaw) validator and has no errors: results [here](documentation/css-validation.PNG)
* HTML was ran through W3C validator with no issues: results <a href="http://validator.w3.org/check?uri=https://craigthomasson.github.io/project-one-repo">here</a>

## Lighthouse Scores

<img src="documentation/light-house-scores.PNG" width="450" height="auto" alt="image of lighthouse results">

## Technologies used
HTML, CSS and JavaScript.

## credits 

### Sources and References
* google fonts where used in this project https://fonts.google.com/
* font awesome was used in the footer www.fontawesome.com
* Images souced from unsplash.com and www.pexels.com
    * https://www.pexels.com/photo/black-corded-headphones-with-colorful-books-in-between-5939401/
    * https://www.pexels.com/photo/woman-in-gray-tank-top-lying-on-bed-3807729/
    * https://unsplash.com/photos/ZDNyhmgkZlQ
    * https://unsplash.com/photos/Dz4iJ3v4-X4


## acknowledgements

* I would like to thank my mentor Chriss Quinn for firstly Introducing me to Grids in CSS and second for being an outstanding mentor. He made sure I always pushed my self and tested my abilities during this project. 
* A big thanks to the Retro Space Cowbells team for the suport and posative vibes. 





### source
* This helped me understand how to randomise my questions: https://stackoverflow.com/questions/43847375/creating-random-questions-and-answers-javascript

* used these answers as inspiration for clearselected function- https://stackoverflow.com/questions/40153194/how-to-remove-class-from-siblings-of-an-element-without-jquery

sean young_lead from CI slack comunity pointed me to the fisher-yates shuffle to help me with issues with my random question genrator.  

* used code from love maths project to incremnt scores 

#### images 
* https://otakukart.com/561823/amazons-epic-the-wheel-of-time-is-finally-set-for-a-2021-release/