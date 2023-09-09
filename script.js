const showInstructionsButton = document.querySelector(
  '.button--show-instructions'
);
const playGameButton = document.querySelector('.button--play-game');
const exitInstructionsButton = document.querySelector(
  '.button--exit-instructions'
);

// - Shows instructions to user.
const showInstructions = () => {
  console.log('Instructions are shown!');
};

// - Exits out of instructions.
const exitInstructions = () => {
  console.log('Instructions are exited!');
};

// - Progresses user to main game.
// - Exits title-screen and tilts environment forward to display the top
//   of the box (where the cards are laying).
const playGame = () => {
  console.log('Envionment tilts forward, and main game scene is shown!');
};

const loadEventListeners = () => {
  console.log('loadEventListeners ran');
  showInstructionsButton.addEventListener('click', showInstructions);
  exitInstructionsButton.addEventListener('click', exitInstructions);
  playGameButton.addEventListener('click', playGame);
};

loadEventListeners();
