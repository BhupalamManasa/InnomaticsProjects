let selectedCategory = '';
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let score = 0;
let timer = 90;
let gameTimer;

// Define the sounds for different events
const flipSound = new Audio('sounds/flipcard-91468.mp3'); 
const matchSound = new Audio('sounds/open.mp3');
const winSound = new Audio('sounds/win.mp3'); 
const loseSound = new Audio('sounds/lose.wav');  

const categories = {
  fruits: ["🍎", "🍌", "🍒", "🍊", "🍉", "🍇", "🍍", "🍑"],
  emojis: ["😀", "😁", "😂", "🤣", "😎", "😜", "🤪", "🤩"],
  animals: ["🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐼", "🐨"],
  planets: ["🌍", "🌕", "🌑", "☀️", "🌌", "🌠", "🪐", "🌙"],
  flags: ["🇺🇸", "🇬🇧", "🇨🇦", "🇯🇵", "🇫🇷", "🇩🇪", "🇮🇹", "🇨🇳"]
};

function startGame(category) {
  selectedCategory = category;
  cards = generateCards(selectedCategory);
  shuffledCards = shuffle(cards);
  displayGame();
  startTimer();
}

function generateCards(category) {
  const items = categories[category];
  return [...items, ...items];  // Duplicate the array to make pairs
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function displayGame() {
  document.querySelector('.landing-page').classList.add('hidden');
  const gameContainer = document.querySelector('.game-container');
  gameContainer.classList.remove('hidden');

  const grid = document.getElementById('gameGrid');
  grid.innerHTML = '';
  shuffledCards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.index = index;
    cardElement.dataset.value = card;
    cardElement.addEventListener('click', handleCardClick);
    grid.appendChild(cardElement);
  });
}

function handleCardClick(event) {
  const card = event.target;
  if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
    card.classList.add('flipped');
    card.textContent = card.dataset.value;
    flipSound.play();  // Play flip sound when card is flipped
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      setTimeout(checkForMatch, 1000);
    }
  }
}

function checkForMatch() {
  const [firstCard, secondCard] = flippedCards;
  if (firstCard.dataset.value === secondCard.dataset.value) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    score += 10;
    matchedPairs += 1;
    matchSound.play();  // Play sound when cards match
    document.getElementById('score').textContent = score;
  } else {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    firstCard.textContent = '';
    secondCard.textContent = '';
    //mismatchSound.play();  
  }
  flippedCards = [];

  if (matchedPairs === 8) {
    clearInterval(gameTimer);
    winSound.play();  // Play win sound when game is won
    alert("You win!");
    document.querySelector('.restart-button').classList.remove('hidden');
  }
}

function startTimer() {
  gameTimer = setInterval(() => {
    timer--;
    document.getElementById('timer').textContent = timer;
    if (timer === 0) {
      clearInterval(gameTimer);
      loseSound.play();  // Play lose sound when time runs out
      alert("Game Over! Time's up.");
      document.querySelector('.restart-button').classList.remove('hidden');
    }
  }, 1000);
}

function restartGame() {
  score = 0;
  matchedPairs = 0;
  timer = 90;
  document.getElementById('score').textContent = score;
  document.getElementById('timer').textContent = timer;
  startGame(selectedCategory);
}

function goHome() {
  document.querySelector('.game-container').classList.add('hidden');
  document.querySelector('.landing-page').classList.remove('hidden');
}
