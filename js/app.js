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


  if (state.selections.length >= 4){
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close');
    const calculatedCalorie = document.getElementById('modal-text');

    let imageSource = '';
    let shakeName = '';
    if (state.selections.includes('Chocolate')){
      imageSource = 'assets/chocolatemilkshake.jpg';
      shakeName = 'CHOCOLATE MILKSHAKE';
    } else if (state.selections.includes('Strawberry')){
      imageSource = 'assets/strawberryMilkshake.jpg';
      shakeName = 'STRAWBERRY MILKSHAKE';
    } else if (state.selections.includes('Vanila')){
      imageSource = 'assets/vanillamilkshake.jpg';
      shakeName = 'VANILLA MILKSHAKE';
    }else if (state.selections.includes('Matcha')){
      imageSource = 'assets/matchaMilkshake.jpg';
      shakeName = 'MATCHA MILKSHAKE';
    }
    calculatedCalorie.textContent = `According to the ingredients you chose, we recommend ${shakeName} for you! Hope you enjoy it! The total calories for this milkshake is ${state.totalCalories}, and the price is $${state.totalPrice}`;
    console.log(state.totalCalories);
    // Add the calorie display to the modal


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


  while (quiz.firstChild) {
    quiz.removeChild(quiz.firstChild);
  }


  quiz.append(questionLi);

}

render();

