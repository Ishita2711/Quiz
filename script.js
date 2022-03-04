let type = window.location.href;
//Question bank
if (type.includes("type=html")) {
    var questionBank= [
        {
            question:"HTML stands for -",
            option :["HighText Machine Language","HyperText and links Markup Language","HyperText Markup Language","None of these",],
            answer : "HyperText Markup Language"
        },
        {
            question :"The correct sequence of HTML tags for starting a webpage is -",
            option : ["Head, Title, HTML, body","HTML, Body, Title, Head","HTML, Head, Title, Body","HTML, Head, Title, Body"],
            answer : "HTML, Head, Title, Body"
        },
        {
            question : "Which of the following element is responsible for making the text bold in HTML?",
            option : ["<pre>","<a>","<b>","<br>"],
            answer : "<b>"
        },
        {
            question : "Which of the following tag is used for inserting the largest heading in HTML?",
            option : ["<h3>","<h1>","<h5>","<h6>"],
            answer : "<h1>"
        },
        {
            question : "Which of the following tag is used to insert a line-break in HTML?",
            option : ["<pre>","<a>","<b>","<br>"],
            answer : "<br>"
        },
        {
            question : "How to create an unordered list (a list with the list items in bullets) in HTML?",
            option : ["<ul>","<ol>","<li>","<i>"],
            answer : "<ul>"
        },
        {
            question : "Which character is used to represent the closing of a tag in HTML?",
            option : ["\\","!","/","."],
            answer : "/"
        },
        {
            question : "How to create an ordered list (a list with the list items in numbers) in HTML?",
            option : ["<ul>","<ol>","<li>","<i>"],
            answer : "<ol>"
        },
        {
            question : "Which of the following element is responsible for making the text italic in HTML?",
            option : ["<i>","<italic>","<it>","<pre>"],
            answer : "<i>"
        },
        {
            question : "How to add a background color in HTML?",
            option : ["<marquee bg color: \"red\">","<marquee bg-color = \"red\">","<marquee bgcolor = \"red \">","<marquee color = \" red \" >"],
            answer :  "<marquee bgcolor = \"red \">"
        }
    ]
} else if(type.includes("type=css")) {
    var questionBank= [
        {
            question:"CSS stands for -",
            option :["Casio Spread Style","Cascading Style Sheet","Cascading Style Sheets","None of these"],
            answer : "Cascading Style Sheets"
        },
        {
            question :"Which of the following is the correct syntax for referring the external style sheet?",
            option : ["<style src = example.css>","<style src = \"example.css\" >","<stylesheet> example.css </stylesheet>"," <link rel=\"stylesheet\" type=\"text/css\" href=\"example.css\">\" "],
            answer : "<link rel=\"stylesheet\" type=\"text/css\" href=\"example.css\">"
        },
        {
            question : "The property in CSS used to change the background color of an element is -",
            option : ["bgcolor","color","background-color","All of the above"],
            answer : "background-color"
        },
        {
            question : "The property in CSS used to change the text color of an element is -",
            option : ["bgcolor","color","background-color","All of the above"],
            answer : "color"
        },
        {
            question : "The CSS property used to control the element's font-size is -",
            option : ["text-style","text-size","font-size","None of the above"],
            answer : "font-size"
        },
        {
            question : "The HTML attribute used to define the inline styles is -",
            option : ["style","styles","class","None of the above"],
            answer : "style"
        },
        {
            question : "The HTML attribute used to define the internal stylesheet is -",
            option : ["<style>","style","<link>","<script>"],
            answer : "<style>"
        },
        {
            question : "Which of the following CSS property is used to set the background image of an element?",
            option : ["background-attachment","background-image","background-color","None of the above"],
            answer : "background-image"
        },
        {
            question : "Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
            option : ["p {background-color : yellow;}","p {background-color : #yellow;}","all {background-color : yellow;}","all p {background-color : #yellow;}"],
            answer : "p {background-color : yellow;}"
        },
        {
            question : "Which of the following is the correct syntax to display the hyperlinks without any underline?",
            option : ["a {text-decoration : underline;}","a {decoration : no-underline;}","a {text-decoration : none;}","None of the above"],
            answer :  " a {text-decoration : none;}"
        }
    ]
} else if(type.includes("type=js")) {
    var questionBank= [
        {
            question:"JS stands for -",
            option :["Jacobies Sheet","J-Language Script","JavaScript","None of these",],
            answer : "JavaScript"
        },
        {
            question :"Which type of JavaScript language is ___",
            option : ["Object-Oriented","Object-Based","Assembly-language","High-level"],
            answer : "Object-Based"
        },
        {
            question : "Which one of the following also known as Conditional Expression:",
            option : ["Alternative to if-else","Switch statement","If-then-else statement","immediate if"],
            answer : "immediate if"
        },
        {
            question : "In JavaScript, what is a block of statement?",
            option : ["Conditional block","block that combines a number of statements into a single compound statement","both conditional block and a single statement","block that contains a single statement"],
            answer : "block that combines a number of statements into a single compound statement"
        },
        {
            question : "When interpreter encounters an empty statements, what it will do:",
            option : ["Shows a warning","Prompts to complete the statement","Throws an error","Ignores the statements"],
            answer : "Ignores the statements"
        },
        {
            question : "The \"function\" and \" var\" are known as:",
            option : ["Keywords","Data types","Declaration statements","Prototypes"],
            answer : "Declaration statements"
        },
        {
            question : "Which of the following option is used as hexadecimal literal beginning?",
            option : ["00","0x","0X","Both 0x and 0X"],
            answer : "Both 0x and 0X"
        },
        {
            question : "Which of the following variables takes precedence over the others if the names are the same?",
            option : ["Global variable","The local element","The two of the above","None of the above"],
            answer : "The local element"
        },
        {
            question : "Which one of the following is the correct way for calling the JavaScript code?",
            option : ["Preprocessor","Triggering Event","RMI","Function/Method"],
            answer : "Function/Method"
        },
        {
            question : "Which of the following type of a variable is volatile?",
            option : ["Mutable variable","Dynamic variable","Volatile variable","Immutable variable"],
            answer :  "Mutable variable"
        }
    ]
} else {
    var questionBank= [
        {
            question:"oops! Wrong Quiz -",
            option :["-","-","-","-",],
            answer : "-"
        }
    ]
}

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerText= questionBank[i].option[0];
    option1.innerText= questionBank[i].option[1];
    option2.innerText= questionBank[i].option[2];
    option3.innerText= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerText===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'rgb(72, 255, 102)';
    }
    else{
        document.getElementById(e.id).style.background= 'rgb(255, 80, 80)';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location = "index.html";
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerText= questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();