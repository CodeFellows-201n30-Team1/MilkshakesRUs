'use strict';
//window to the dom
let quiz = document.getElementById('questions');
let containerElem = document.getElementById('containerElem');
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');
let op4 = document.getElementById('op4');

//global state array store the everything
const state = {
  array:[],
  currentQuestionIndex: 0,
  selectedOptions: [],
};

//How are we displaying the questions?
// function questions (){
//   let questionOne = `What base do you like?`;
//   quiz.appendChild(questionOne);
// }

//constructor function
function Options (name,fileExtension = 'jpg', questions){
  this.name = name;
  this.image = `assets/${name}.${fileExtension}`;
  this.questions = questions;
  state.array.push(this);
}
console.log(state.array);

//new instances
let wholeMilk = new Options('wholeMilk');
let nonDairy = new Options('nonDairy');

//JSON to save the data

//image array to store

//render function - show the images
function renderImgs (){
  // let imgOne = state.array[0].image;
  // op1.src = imgOne;
  op1.src = state.array[state.currentQuestionIndex].image;
  op1.alt = state.array[state.currentQuestionIndex].name;
  op2.src = state.array[state.currentQuestionIndex + 1].image;
  op2.alt = state.array[state.currentQuestionIndex + 1].name;
}

function render(){
//   let newImages = renderImgs();
//   while (state.array.length<4){
//     if (handliClick()){
//       renderImgs();
//     }
//   }
// };
if (state.currentQuestionIndex < state.array.length - 1) {
  renderImgs();
} else {
  console.log('Quiz finished');
  console.log('Selected options:', state.selectedOptions);
  // Display the result or move to another page.
}
}


//add eventhandler
function handleClick(event){ 
  let imgClicked = event.target.alt;
  state.selectedOptions.push(imgClicked);
   // Increment the current question index by 2 as there are 2 options per question
   state.currentQuestionIndex += 2;
render ();
  // for(let i = 0; i < state.array.length; i++){

}

render();

//add eventlistener

op1.addEventListener('click', handleClick);
op2.addEventListener('click', handleClick);
// containerElem.addEventListener('click', handleClick);
//show the result
