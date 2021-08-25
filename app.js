// import functions

// reference needed DOM elements
const catImage = document.getElementById('cat-image');

const catAudio = document.getElementById('cat-audio');

catImage.addEventListener('click', () => {
    catAudio.play();
});

const dogImage = document.getElementById('dog-image');

const dogAudio = document.getElementById('dog-audio');

dogImage.addEventListener('click', () => {
    dogAudio.play();
});

const horseImage = document.getElementById('horse-image');

const horseAudio = document.getElementById('horse-audio');

horseImage.addEventListener('click', () => {
    horseAudio.play();
});
// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
