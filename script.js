const howToPlayButton = document.querySelector(
  '.title-screen__button-options__instructions'
);
const playGameButton = document.querySelector(
  '.title-screen__button-options__play'
);

// - Shows instructions to user.
const showInstructions = () => {
  console.log('Instructions are shown!');
};

// - Progresses user to main game.
// - Exits title-screen and tilts environment forward to display the top
//   of the box (where the cards are laying).
const playGame = () => {
  console.log('Envionment tilts forward, and main game scene is shown!');
};

const loadEventListeners = () => {
  console.log('loadEventListeners ran');
  howToPlayButton.addEventListener('click', showInstructions);
  playGameButton.addEventListener('click', playGame);
};

loadEventListeners();
