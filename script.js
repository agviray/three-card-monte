const cardContainers = Array.from(document.querySelectorAll('.card-container'));
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
  const titleScreen = document.querySelector('.title-screen');
  const dialogue = document.querySelector('.dialogue');
  const environment = document.querySelector('.environment');
  const boxFaceFront = document.querySelector('.box__face--front');

  titleScreen.classList.add('inactive');
  environment.classList.add('tilt-forward');
  boxFaceFront.classList.add('box-shade');

  setTimeout(function () {
    dialogue.classList.add('active');
  }, 1350);
};

// - Rearrange/mix the three cards
const rearrangeCards = () => {
  console.log('Cards are rearranged!');
};

// - Decides which card will be the winning card, and assigns a specific image to serve as that card's character (face-side).
const assignCardTypes = () => {
  // - Generate winning card index.
  const winnerIndex = Math.floor(Math.random() * 3);
  const cardTypes = [];
  let type;

  for (let i = 0; i < 3; i++) {
    if (i === winnerIndex) {
      type = 'target-card';
    } else {
      type = 'support-card';
    }
    cardTypes.push(type);
  }
  return cardTypes;
};

// - Creates and loads "original" cards into DOM
const loadCards = (cardsArray) => {
  let cardTypes;

  if (cardsArray.length === undefined) {
    cardIds = ['card-1', 'card-2', 'card-3'];
    cardTypes = assignCardTypes();
  }
  console.log(cardTypes);
};

const loadEventListeners = () => {
  console.log('loadEventListeners ran');
  document.addEventListener('DOMContentLoaded', loadCards);
  showInstructionsButtons.forEach((button) =>
    button.addEventListener('click', showInstructions)
  );
  exitInstructionsButton.addEventListener('click', exitInstructions);
  playGameButton.addEventListener('click', playGame);
  rearrangeCardsButton.addEventListener('click', rearrangeCards);
};

loadEventListeners();
