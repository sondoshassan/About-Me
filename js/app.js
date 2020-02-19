'use strict';
var score = 0;
var gistName = prompt ("please, what's your name?");
alert ("welcome " + gistName + " I hope you to enjoy");



var qOne = function(){
var name = prompt("my name is sondos","yes or no");
name = name.toLowerCase();
console.log (name);
if (name === 'yes' || name === 'y'){
    alert ("yes your good guesser my  name is sondos");
    score++;
}
else if (name == "no" || name == "n"){
    alert ("wrong answer");
}}

var qTwo = function(){
var color = prompt ("did you think I like black color?","yes or no");
color = color.toUpperCase();
console.log ("this for color question " + color);
switch (color) {
    case "YES":
    case "Y":
        alert ("Yes I like the black color");
        score++;
        break;
    case "NO":
    case "N":
        alert ("wrong answer!");
            break;
          default:
        break;
}}

var qThree =function(){
var animle = prompt ("do I like dog?","yes or no");
animle = animle.toLowerCase();
console.log ("the animle answer "+ animle);
if (animle === "yes" || animle === "y"){
alert ("no, I hate the dog");

}
else if (animle === "no" || animle === "n"){
    alert ("yes you get it");
    score++;
}}


var qFour =function(){

var subject = prompt ("guess I like a math","yes or no");
subject = subject.toLowerCase ();
console.log("my favorite subject "+ subject);
switch (subject) {
    case "yes":
    case "y":
        alert("yes I hope you also like math");
        score++;
        break;
        case "no":
        case "n":
         alert("no math is my favorite subject");
                break;
    default:
        break;
}}


var qFive= function(){
var hobby = prompt ("did I read at free time?","yes or no");
hobby = hobby.toUpperCase();
console.log ("about my hobby " + hobby);
if (hobby === "YES" || hobby === "Y"){
    alert ("yes the reading is good to get a knowledge");
    score++;
}
else if (hobby === "NO" || hobby === "N"){
    alert ("no my friend it's my favorite hobby");
}
alert (gistName + ", thanks for playing with me");
}
// question sex


var qSix=function(){
var myAge = prompt ('how much am I old?','using number [15,30]');
myAge = Number(myAge);
var i = 0;
if (myAge === 23){
    alert ('yes I\'m in 23');
    score++;
}
while (myAge !== 23 && i<3){
    
if (myAge > 23){
    alert ('is high');     
      }
else if (myAge < 23){
        alert ('is low');     
          }
          i++;
          var myAge = prompt ('how much am I old?','using number');
          myAge = Number(myAge);
if (myAge == 23)
          {
            alert ('yes I\'m in 23');
            score++;  
          }
    }
if (myAge !== 23 && i == 3){
    alert ('I\'m in 23'); 
}
console.log('score at q6 '+score);}

//  question seven
var qSeven =function(){
var langPrograme = ['c++','javascript','java','html','css'];
var ansUser = prompt ('what are my languages programming?','c++, javascript, java, html, css');
ansUser = ansUser.toLowerCase();

var j = 0;
for (var k=0; k < 5;k++){
    var asElse = 0;
for (var l = 0; l < langPrograme.length; l++){
    
if (ansUser === langPrograme[l]){
    alert ('that\'s right');
    score++;
    asElse++;
    break;   
}
}
console.log ('k = ' + k);
if (asElse !== 1){
    alert ('thats wrong');
    var ansUser = prompt ('what are my languages programming?','c++, javascript, java, html, css');
    
}
else if (ansUser === langPrograme[l]) {
    break;
}
}
console.log ('k out loop = '+ k);
if (ansUser !== langPrograme[l] && k === 5){
    alert ('thats wrong');
}
console.log('score at q7 '+score);


alert ('my languages programming are '+langPrograme);}
var allFunction = [qOne(),qTwo(),qThree(),qFour(),qFive(),qSix(),qSeven()];
for (var b = 0; b < allFunction.length;b++){
    allFunction[b];
}


alert ('your score is '+score+' from 7');

