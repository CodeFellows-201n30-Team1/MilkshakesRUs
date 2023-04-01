'use strict';
//window to the dom
let quiz = document.getElementById('questions');
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');
let op4 = document.getElementById('op4');

//global state array store the everything
const state = {
  array:[],
};

//How are we displaying the questions?
function questions {
  let questionOne = `What base do you like?`;
  quiz.appendChild(questionOne);
}

//constructor function
function Options (name,fileExtension = 'jpg'){
  this.name = name;
  this.image = `assets/${name}.${fileExtension}`;
  
  state.array.push(this);
}
console.log(state.array);
//new instances
let allBerries = new Options('allBerries');

//JSON to save the data

//render function - show the images
function render (){
  let imgOne = state.array[0];
};

//add eventhandler
function handleClick(event){
  let imgClicked = event.target
  //push the clicked image to the state.array
  state.array.push(imgClicked);
}
//add eventlistener

//show the result
