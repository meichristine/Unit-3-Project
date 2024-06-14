// Declare variables below to save the different divs of your story.

let storyOpening = document.querySelector ('.story-opening')
let optionOne = document.querySelector ('.option-one')
let optionTwo = document.querySelector ('.option-two')
let optionOneScreen = document.querySelector ('.option-one-screen')
let optionThree = document.querySelector ('.option-three')
let optionFour = document.querySelector ('.option-four')
let optionTwoScreen = document.querySelector ('.option-two-screen')
let optionFive = document.querySelector ('.option-five')
let optionSix = document.querySelector ('.option-six')
let optionSeven = document.querySelector ('.option-seven')
let optionEight = document.querySelector ('.option-eight')
let optionNine = document.querySelector ('.option-nine')
let optionOneEnd = document.querySelector ('.option-one-end')
let optionTwoEnd = document.querySelector ('.option-two-end')
let optionThreeEnd = document.querySelector ('.option-three-end')

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

optionOne.addEventListener('click', function(){
    storyOpening.style.display = "none";
    optionOneScreen.style.display = "block";
});

optionTwo.addEventListener('click', function(){
    storyOpening.style.display = "none";
    optionTwoScreen.style.display = "block";
});

optionThree.addEventListener('click', function(){
    optionOneScreen.style.display = "none";
    optionThreeEnd.style.display = "block";
});

optionFour.addEventListener('click', function(){
    optionOneScreen.style.display = "none";
    optionTwoEnd.style.display = "block";
});

optionFive.addEventListener('click', function(){
    optionTwoScreen.style.display = "none";
    optionOneEnd.style.display = "block";
});

optionSix.addEventListener('click', function(){
    optionTwoScreen.style.display = "none";
    optionTwoEnd.style.display = "block";
});

optionSeven.addEventListener('click', function(){
    optionOneEnd.style.display = "none";
    storyOpening.style.display = "block";
});

optionEight.addEventListener('click', function(){
    optionTwoEnd.style.display = "none";
    storyOpening.style.display = "block";
});

optionNine.addEventListener('click', function(){
    optionThreeEnd.style.display = "none";
    storyOpening.style.display = "block";
});