const cardContainers = Array.from(document.querySelectorAll('.card-container'));
const instructionsTogglers = Array.from(
  document.querySelectorAll('.button--instructions-toggler')
);
const playGameButton = document.querySelector('.button--play-game');
const rearrangeCardsButton = document.querySelector('.button--rearrange-cards');

let cardMovementsLeft = 4;

// - Toggles game instructions
const toggleInstructions = () => {
  const instructions = document.querySelector('.instructions');
  return instructions.classList.contains('active')
    ? instructions.classList.remove('active')
    : instructions.classList.add('active');
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
  // *** Todo ***
  // - 1. Create reference to the current card order. Reference should be array of DOM elements having the 'card' class.
  // - 2. Shuffle array items in current card order reference, and create a reference to the shuffled cards order array.
  // - 3. Create 2 references--one for target card, and another for support cards.
  //      - The target card reference can directly refer to the DOM target card, and the support cards reference can be an array of the DOM support cards.
  // - 4. Create an unchanging "source" of positions to represent the position of a card on the box.
  //      - Maybe an array?
  // - 5. Create references to the target card's placement in both the current cards order and shuffled cards order references.
  //      - We are essentially going to use positions array to track the target card's position in both pre and post shuffle order.
  //      - Use the positions array to associate a position with the target card's initial placement in the current cards order reference.
  //      - Use the positions array to associate a position with the target card's placement in the shuffled cards order reference.
  // - 6. Call some function to check if post shuffle position of target card is acceptable. For example, the target card's post-shuffle position is not acceptable if it was placed in the same position that it was in previously.
};

// - Identify/show target card to user.
const identifyTargetCard = () => {
  const targetCard = document.querySelector('.target-card');
  targetCard.classList.add('flipped', 'identifier');
  targetCard.onanimationend = (event) => {
    event.target.classList.remove('flipped', 'identifier');
  };
  // *** Todo ***
  // - Call rearrangeCards to shuffle cards.
};

// *** Multiple functionality ***
// - 1. "Triggers" start of a game.
// - 2. Updates game dialogue. Game response changes depending on user's response.
const updateGameDialogue = (event, text) => {
  const gameResponse = document.querySelector('.dialogue__game');
  const dialogueUserOptions = document.querySelector('.dialogue__user-options');

  if (event.target.classList.contains('button--rearrange-cards')) {
    if (cardMovementsLeft === 4) {
      dialogueUserOptions.classList.add('removed');
      gameResponse.textContent = text;
      identifyTargetCard();
    } else {
      // *** Todo ***
      // - Update game response if this function is used for reasons other than triggering the start of the game.
    }
  }
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

// - Creates and loads "original" cards into DOM.
const loadCards = (cardsArray) => {
  let cardTypes;

  if (cardsArray.length === undefined) {
    cardIds = ['card-1', 'card-2', 'card-3'];
    cardTypes = assignCardTypes();
  }

  cardContainers.forEach(function (container, index) {
    // - Create card.
    const divCard = document.createElement('div');
    divCard.id = cardIds[index];
    divCard.className = `card card-original ${cardTypes[index]}`;
    // - Create design side of card.
    const divDesign = document.createElement('div');
    divDesign.className = 'card__face card__face--design';
    // - Create design image of card.
    const imgDesign = document.createElement('img');
    imgDesign.src = './images/card-design.png';
    imgDesign.alt = 'Blue colored design';
    imgDesign.className = 'design';
    // - Create character side of card.
    const divCharacter = document.createElement('div');
    divCharacter.className = 'card__face card__face--character';
    // - Create character image of card.
    const imgCharacter = document.createElement('img');
    imgCharacter.className = 'character';
    if (cardTypes[index] === 'target-card') {
      imgCharacter.src = './images/pug.jpeg';
    } else {
      imgCharacter.src = './images/fox.jpeg';
    }
    // - Construct full card using created parts from above.
    divDesign.appendChild(imgDesign);
    divCharacter.appendChild(imgCharacter);
    divCard.appendChild(divDesign);
    divCard.appendChild(divCharacter);
    // - Append constructed card to appropriate parent card-container in DOM.
    container.appendChild(divCard);
  });
};

// - Flips card to reveal character.
const flipCard = (event) => {
  const card = event.target.parentElement.parentElement;
  if (card.classList.contains('card')) {
    card.classList.toggle('flipped');
  }
};

const loadEventListeners = () => {
  console.log('loadEventListeners ran');
  document.addEventListener('DOMContentLoaded', loadCards);
  instructionsTogglers.forEach((toggler) => {
    toggler.addEventListener('click', toggleInstructions);
  });
  playGameButton.addEventListener('click', playGame);
  rearrangeCardsButton.addEventListener('click', function (event) {
    updateGameDialogue(
      event,
      'Loving the confidence! Keep your eyes on this card..'
    );
  });
  document
    .querySelector('.card-collection')
    .addEventListener('click', flipCard);
};

loadEventListeners();
