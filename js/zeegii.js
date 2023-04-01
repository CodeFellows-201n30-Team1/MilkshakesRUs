'use strict';
//window to the dom
let quiz = document.getElementById('questions');
let containerElem = document.getElementById('container');
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');
let op4 = document.getElementById('op4');

//global state array store the everything
const state = {
  array:[],
};



function Options (name,fileExtension = 'jpg'){
  this.name = name;
  this.image = `assets/${name}.${fileExtension}`;
  state.array.push(this);
}
console.log(state.array);

//new instances
let wholeMilk = new Options('wholeMilk');
let nonDairy = new Options('nonDairy');

let allBerries = new Options('allBerries');
let blackberry = new Options('blackberry');

let nuts = new Options ('nuts');
let banana = new Options('banana');

let lemon = new Options('lemon');
let orange = new Options('orange');

let sprinkle = new Options('sprinkle');
let ube = new Options('ube');
let whippedCream = new Options('whippedCream');
let blueberry = new Options('blueberry');

let none = new Options('no');

let clickedOptions = [];



function showQuestion1() {
  op1.src = state.array[0].image;
  op2.src = state.array[1].image;
  op1.addEventListener('click', function() {
    clickedOptions.push(op1.alt); // add op1 to the clickedOptions array when it is clicked
    showQuestion2();
  });
  op2.addEventListener('click', function() {
    clickedOptions.push(op2); // add op1 to the clickedOptions array when it is clicked
    showQuestion3()});
}

function showQuestion2() {
  op1.src = state.array[2].image;
  op2.src = state.array[3].image;
  op3.src = state.array[4].image;
  op4.src = state.array[12].image;
  // add event listeners for next questions
}

function showQuestion3() {
  op1.src = state.array[6].image;
  op2.src = state.array[7].image;
  op3.src = state.array[8].image;
  op4.src = state.array[12].image;
  // add event listeners for next questions
}

// call the first question function to start the game
showQuestion1();



// function secondQuestion(){
 
// }

// firstQuestions();

// function firstQuestions(){
//   op1.src = state.array[0].image;
//   op2.src = state.array[1].image;
//   op1.onclick = function secondQuestion(){
//     op1.src = state.array[2].image;
//     op2.src = state.array[3].image;
//     op2.onclick = function thirdQuestion(){
//       op1.src = state.array[4].image;
//       op2.src = state.array[5].image;
//       op1.onclick = function fourthQuestion(){
//         op1.src = state.array[6].image;
//         op2.src = state.array[7].image;
//       }
//     };
//   };
// }