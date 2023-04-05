'use strict';

// window to the DOM
let quiz = document.getElementById('questions');
let imgOne = document.getElementById('op1');
let imgTwo = document.getElementById('op2');
let imgThree = document.getElementById('op3');
let imgFour = document.getElementById('op4');
let questionLi = document.getElementById('questionList');



// global state object to store everything
const state = {
  currentQuestion: 0,
  questions: [],
  totalCalories: 0,
  totalPrice: 0,
  selections: [],
};

// constructor function for option objects
function Option(name, imageSrc, calories, price) {
  this.name = name;
  this.imageSrc = imageSrc;
  this.calories = calories;
  this.price = price;
}

// constructor function for question objects
function Question(question, options) {
  this.question = question;
  this.options = options;
}

// create question objects
const question1 = new Question('What base do you like?', [
  new Option('Whole Milk', 'wholeMilk.jpg', 150, 2.5),
  new Option('Low Fat', 'lowFat.jpg', 100, 3),
  new Option('Oat Milk', 'nonDairy.jpg', 120, 3.5),
  new Option('Almond Milk', 'almondMilk.jpg', 80, 4),
]);

const question2 = new Question('What flavor do you prefer?', [

  new Option('Vanila','vanila.jpg', 200, 2),
  new Option('Chocolate','chocolate.jpg', 250, 2.5),
  new Option('Strawberry','strawberry.jpg', 180, 3),
  new Option('Matcha','matcha.jpg', 220, 4),

]);

const question3 = new Question('What size do you want?', [
  new Option('Small', 'small.jpg', 150, 2.5),
  new Option('Medium', 'medium.jpg', 200, 3),
  new Option('Large', 'large.jpg', 250, 3.5),
  new Option('Extra Large', 'xlarge.jpg', 300, 4),
]);

const question4 = new Question('What toppings do you like?', [
  new Option('Whipped Cream', 'whippedCream.jpg', 50, 0.5),
  new Option('Sprinkles', 'sprinkle.jpg', 30, 0.25),
  new Option('All Berries', 'allBerries.jpg', 80, 0.75),
  new Option('Caramel Syrup', 'caramelSyrup.jpg', 70, 1),
]);

// add questions to the state
state.questions.push(question1, question2, question3, question4);

function handleClick(event) {
  let imgClicked = event.target.alt;
  state.selections.push(imgClicked);
  state.currentQuestion++;
  console.log(imgClicked);



  for (let i = 0; i < state.questions.length; i++) {
    let options = state.questions[i].options;
    for (let j = 0; j < options.length; j++) {
      if (imgClicked === options[j].name) {
        state.totalCalories += options[j].calories;
        state.totalPrice += options[j].price;
      }
    }
  }
  //longer array access to see if the loop is calling the right name
  // for (let i=0; i<state.questions.length; i++){
  //   // const options = state.questions[i];
  //   console.log(state.questions[i].options[i].name);

  //   if (imgClicked === state.questions[i].options[i].name){
  //     console.log('inside if statement ');
  //     state.totalCalories += state.questions[i].options[i].calories;
  //     state.totalPrice += state.questions[i].options[i].price;
  //   } console.log(state.totalCalories);
  // }

  console.log(state);


  if (state.selections.length >= 4){
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close');
    const calculatedCalorie = document.getElementById('modal-text');

    calculatedCalorie.textContent = `According to the ingredients you chose, we recommend this Milkshake for you! Hope you enjoy it! The total calories for this milkshake is ${state.totalCalories}, and the price is $${state.totalPrice}`;
    console.log(state.totalCalories);
    // Add the calorie display to the modal

    let imageSource = '';
    if (state.selections.includes('Chocolate')){
      imageSource = 'assets/chocolatemilkshake.jpg';
    } else if (state.selections.includes('Strawberry')){
      imageSource = 'assets/strawberryMilkshake.jpg';
    } else if (state.selections.includes('Vanila')){
      imageSource = 'assets/vanillamilkshake.jpg';
    }else if (state.selections.includes('Matcha')){
      imageSource = 'assets/matchaMilkshake.jpg';
    }

    const imageAlt = 'Image description';
    modalImage.src = imageSource;
    modalImage.alt = imageAlt;

    // Show the modal when the image is clicked
    modal.style.display = 'block';

    console.log(state.totalCalories);
    // Hide the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    // Hide the modal when the user clicks outside of it
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

  } else {
    render();
  }
}

// render function - show the current question and its options
function render() {
  const currentQuestion = state.questions[state.currentQuestion];
  questionLi.textContent = currentQuestion.question;

  // console.log(currentQuestion.question);

  imgOne.src = `assets/${currentQuestion.options[0].imageSrc}`;
  imgOne.alt = currentQuestion.options[0].name.split('.')[0];
  imgOne.addEventListener('click', handleClick);

  imgTwo.src = `assets/${currentQuestion.options[1].imageSrc}`;
  imgTwo.alt = currentQuestion.options[1].name.split('.')[0];
  imgTwo.addEventListener('click', handleClick);

  imgThree.src = `assets/${currentQuestion.options[2].imageSrc}`;
  imgThree.alt = currentQuestion.options[2].name.split('.')[0];
  imgThree.addEventListener('click', handleClick);

  imgFour.src = `assets/${currentQuestion.options[3].imageSrc}`;
  imgFour.alt = currentQuestion.options[3].name.split('.')[0];
  imgFour.addEventListener('click', handleClick);

  console.log(quiz.firstChild);
  while (quiz.firstChild) {
    quiz.removeChild(quiz.firstChild);
  }
  console.log(quiz.firstChild);

  quiz.append(questionLi);

}
/*******************************************************************
 
========= CONFETTI JAVASCRIPT  ========= 
=========      BY TRELLO       =========
 
As seen on https://trello.com/10million
_______________________________________
 
Copyright © Trello. All rights Reserved.
 _______________________________________
 
XXX Use for Educational Purposes only XXX
 
I will not be liable for any damages or legal actions for Using of this material.
 
*******************************************************************/



var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, drawCircle2, drawCircle3, i, range, xpos;
NUM_CONFETTI = 40;
COLORS = [
  [235, 90, 70],
  [97, 189, 79],
  [242, 214, 0],
  [0, 121, 191],
  [195, 119, 224]
];
PI_2 = 2 * Math.PI;
canvas = document.getElementById("confeti");
context = canvas.getContext("2d");
window.w = 0;
window.h = 0;
window.resizeWindow = function () {
  window.w = canvas.width = window.innerWidth;
  return window.h = canvas.height = window.innerHeight
};
window.addEventListener("resize", resizeWindow, !1);
window.onload = function () {
  return setTimeout(resizeWindow, 0)
};
range = function (a, b) {
  return (b - a) * Math.random() + a
};
drawCircle = function (a, b, c, d) {
  context.beginPath();
  context.moveTo(a, b);
  context.bezierCurveTo(a - 17, b + 14, a + 13, b + 5, a - 5, b + 22);
  context.lineWidth = 2;
  context.strokeStyle = d;
  return context.stroke()
};
drawCircle2 = function (a, b, c, d) {
  context.beginPath();
  context.moveTo(a, b);
  context.lineTo(a + 6, b + 9);
  context.lineTo(a + 12, b);
  context.lineTo(a + 6, b - 9);
  context.closePath();
  context.fillStyle = d;
  return context.fill()
};
drawCircle3 = function (a, b, c, d) {
  context.beginPath();
  context.moveTo(a, b);
  context.lineTo(a + 5, b + 5);
  context.lineTo(a + 10, b);
  context.lineTo(a + 5, b - 5);
  context.closePath();
  context.fillStyle = d;
  return context.fill()
};
xpos = 0.9;
document.onmousemove = function (a) {
  return xpos = a.pageX / w
};
window.requestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
    return window.setTimeout(a, 5)
  }
}();
Confetti = function () {
  function a() {
    this.style = COLORS[~~range(0, 5)];
    this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
    this.r = ~~range(2, 6);
    this.r2 = 2 * this.r;
    this.replace()
  }
  a.prototype.replace = function () {
    this.opacity = 0;
    this.dop = 0.03 * range(1, 4);
    this.x = range(-this.r2, w - this.r2);
    this.y = range(-20, h - this.r2);
    this.xmax = w - this.r;
    this.ymax = h - this.r;
    this.vx = range(0, 2) + 8 * xpos - 5;
    return this.vy = 0.7 * this.r + range(-1, 1)
  };
  a.prototype.draw = function () {
    var a;
    this.x += this.vx;
    this.y += this.vy;
    this.opacity +=
      this.dop;
    1 < this.opacity && (this.opacity = 1, this.dop *= -1);
    (0 > this.opacity || this.y > this.ymax) && this.replace();
    if (!(0 < (a = this.x) && a < this.xmax)) this.x = (this.x + this.xmax) % this.xmax;
    drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
    drawCircle3(0.5 * ~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
    return drawCircle2(1.5 * ~~this.x, 1.5 * ~~this.y, this.r, this.rgb + "," + this.opacity + ")")
  };
  return a
}();
confetti = function () {
  var a, b, c;
  c = [];
  i = a = 1;
  for (b = NUM_CONFETTI; 1 <= b ? a <= b : a >= b; i = 1 <= b ? ++a : --a) c.push(new Confetti);
  return c
}();
window.step = function () {
  var a, b, c, d;
  requestAnimationFrame(step);
  context.clearRect(0, 0, w, h);
  d = [];
  b = 0;
  for (c = confetti.length; b < c; b++) a = confetti[b], d.push(a.draw());
  return d
};
step();;


render();
