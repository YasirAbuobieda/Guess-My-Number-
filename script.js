const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const ranNumber = document.querySelector('.number');
const again = document.querySelector('.again');
const body = document.querySelector('body');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // if no Number
  if (!guess) {
    message.textContent = '⛔  no number';
  }
  // if correct
  else if (guess == secretNumber) {
    message.textContent = '🎉 correct number';
    ranNumber.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    ranNumber.style.width = '32rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      message.textContent =
        guess > secretNumber ? '📈 too height' : '📉too low';
    } else {
      message.textContent = '😔 you lose';
      document.querySelector('.score').textContent = 0;
    }
  }
});

again.addEventListener('click', function () {
  location.reload();
});
