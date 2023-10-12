const showInstructionsButtons = Array.from(
  document.querySelectorAll('.button--show-instructions')
);
const playGameButton = document.querySelector('.button--play-game');
const exitInstructionsButton = document.querySelector(
  '.button--exit-instructions'
);
const rearrangeCardsButton = document.querySelector('.button--rearrange-cards');

// - Shows instructions to user.
const showInstructions = () => {
  const instructions = document.querySelector('.instructions');
  if (!instructions.classList.contains('active')) {
    instructions.classList.add('active');
  }
};

// - Exits out of instructions.
const exitInstructions = () => {
  const instructions = document.querySelector('.instructions');
  if (instructions.classList.contains('active')) {
    instructions.classList.remove('active');
  }
};

// - Progresses user to main game.
// - Exits title-screen and tilts environment forward to display the top
//   of the box (where the cards are laying).
const playGame = () => {
  // *** TODO ****
  // 2. Smoothly display game dialoge container (identified by .dialogue class)
  // 3. Tilt game "camera" forward to show top of box.
  const titleScreen = document.querySelector('.title-screen');
  const dialogue = document.querySelector('.dialogue');

  titleScreen.classList.add('inactive');
  dialogue.classList.add('active');
};

// - Rearrange/mix the three cards
const rearrangeCards = () => {
  console.log('Cards are rearranged!');
};

const loadEventListeners = () => {
  console.log('loadEventListeners ran');
  showInstructionsButtons.forEach((button) =>
    button.addEventListener('click', showInstructions)
  );
  exitInstructionsButton.addEventListener('click', exitInstructions);
  playGameButton.addEventListener('click', playGame);
  rearrangeCardsButton.addEventListener('click', rearrangeCards);
};

loadEventListeners();
