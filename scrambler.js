// create a while loop that passes it through five times.

var stringPrinter = function(starterString) {
  $('#output').text(starterString);
  }
 //stringPrinter is a function with a value of starterString that will put our starterString in text form in out output divider

var funnySentence = function(noun, adjective, verb, adverb) {
  var sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";

  stringPrinter(sentence);
  }
//funnySentence is a funtion that holds four values to a sentence
//sentence is concatonating the values from FunnySentence with the values from sentence

var doThis = function(){
  var n = 0;
  while(n<5){
    funnySentence("black", "dog", "runs", "quickly");
    n++;
  }
}
// We can do this...
// document.querySelector('#target').addEventListener('click', doThis);
// Or this...
// document.querySelector('#target').addEventListener('click', function() {
//   console.log('same deal');
// });
// or in jquery we could do this
// $('#target').on('click', function(){
//   console.log('You clicked a div with the id target');
// })
// //or this
// $('div').click(function() {
//   console.log('You clicked a dive with the id target')
// })
//or this
$('div').click(function(){
  $('div p').show().css('color', 'red').text('booyah');
})
