//answerLogger Exercise

//takes function as input
//runs function that was passed in
//puts return value in div#answerLogger

// Example
// var runner = function(fn) {
// console.log('Invoking a new function');
// fn();
// }

// var answerLogger = function (fn) {
//   var answer = fn();
//   $('#answer').text(answer);
// }
//
// answerLogger(function(){
//   return ('I should appear in a div#answer!');
// })

// var funcArray = [function(){return "thing 1"}, function(){return"thing 2"}, function(){return "thing 3"}];
// var answerLogger = function(arr) {
// $('#answer').html('<ol></ol>');
//
// arr.forEach(function(fn) {
//   var answer = fn();
//   $("#answer > ol").append("<li>" + answer + "</li>");
// })
// }
// answerLogger(funcArray);


//EXample Three

//secretKeeper
//defines var secret
//takes two strings as args
//appen strings with secret in between


// var secretKeeper = function(string1, string2) {
//   var secret = "You can't find me";
//
//   var publicPhrase = string1 + " " + secret + " " + string2;
//
//   $("#answer").append(publicPhrase);
// }
// secretKeeper("This is param 1", "This is param 2");


// Example Four
//1 output array of numbers multiplied by 5
//2 output array of strings reversed .reverse()

var numbers = [5, 10, 15, 20, 25];
var multi5 = numbers.map(function(num){
  return num * 5;
});

var stringArr = ['string1', 'string2', 'string3'];
var newStrings = stringArr.map(function(str){
  return str.split("").reverse().join("");
});

var stringReverse = strings.reverse(function(string){
  return stringReverse;
});

//Example For Filter
//function called on each item in array
//returns array of elements that pass test in function

//3 input: array of numbers, output: array of even numbers

var myArray = [1, 2, 3, 4, 5, 6, 7];

var myEvenArray = myArray.filter(function (num) {
    return num % 2 === 0;
});

//4 input:  array of strings, output: array of strings longer than 4 characters
var myArray = ['one','two','three','four'];
var myFourLongs = myArray.
