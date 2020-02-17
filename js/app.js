'use strict';
var gistName = prompt ("please, what's your name?");
alert ("welcome " + gistName + " I hope you to enjoy");
var name = prompt("my name is sondos","yes or no");
name = name.toLowerCase();
console.log (name);
if (name === "yes" || name === "y"){
    alert ("yes your good guesser my  name is sondos");
}
else if (name == "no" || name == "n"){
    alert ("wrong answer");
}
var color = prompt ("did you think I like black color?","yes or no");
color = color.toUpperCase();
console.log ("this for color question " + color);
switch (color) {
    case "YES":
        alert ("Yes I like the black color");
        break;
    case "Y":
         alert ("Yes I like the black color");
            break;
    case "NO":
        alert ("try again!");
            break;
    case "N":
        alert ("try again!");
          break;
          default:
        break;
}

var animle = prompt ("do I like dog?","yes or no");
animle = animle.toLowerCase();
console.log ("the animle answer "+ animle);
if (animle === "yes" || animle === "y"){
alert ("no, I hate the dog");
}
else if (animle === "no" || animle === "n"){
    alert ("yes you get it");
}
var subject = prompt ("guess I like a math","yes or no");
subject = subject.toLowerCase ();
console.log("my favorite subject "+ subject);
switch (subject) {
    case "yes":
        alert("yes I hope you also like math");
        break;
        case "y":
            alert("yes I hope you also like math");
            break;
        case "no":
         alert("no math is my favorite subject");
                break;
        case "n":
            alert("no math is my favourite subject");
             break;
    default:
        break;
}
var hobby = prompt ("did I read at free time?","yes or no");
hobby = hobby.toUpperCase();
console.log ("about my hobby " + hobby);
if (hobby === "YES" || hobby === "Y"){
    alert ("yes the reading is good to get a knowledge");
}
else if (hobby === "NO" || hobby === "N"){
    alert ("no my friend it's my favorite hobby");
}
alert (gistName + ", thanks for playing with me");