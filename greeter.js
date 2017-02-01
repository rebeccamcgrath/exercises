// var name = prompt('What is your name?');
// alert('Welcome to my page, ' + name);
//
// var myAge = prompt('How old are you?');
//
// var ageCheck = function() {
//   if(parseInt(myAge) === 24) {
//   alert('You are awesome!');
// }
//   else if(parseInt(myAge) === 21) {
//     alert('Meh, you are ok');
//   }
//   else {
//     alert('Too bad');
//   };
// };
// ageCheck();

// This is commented out

alert('This is a SavvyCoders Student Practice Site. This site is continuously under construction and improvement.');

var name = prompt('Welcome to my page. What is your name?');
alert('Welcome to my page, ' + name);

var howFind = prompt('How did you find my page?');

var getFind = function() {
    if (howFind === 'github') {
    alert('Github, nice!');
  }
    else if( howFind === 'savvycoders') {
      alert('Oh hello! - You must be a student or teacher!');
  }
    else if( howFind === 'facebook') {
    alert('Weird... stalk much?');
  }
    else {
    alert('Your answer should have been Github!');
  }
}
getFind();

// new function

var visitSite = prompt('Have you visited my Github student portfolio?');

var getVisit = function() {
    if (visitSite === 'yes') {
      alert('Great!');
    }
    else {
      alert('No? My Github username is RebeccaMcGrath - go check it out!');
    }
}
getVisit();
