const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const ranNumber = document.querySelector('.number');
const again = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0
console.log(typeof guess);

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '⛔⛔ there is no any number';
  } else if (guess == secretNumber) {
    message.textContent = '🎉🎉 correct number ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    ranNumber.textContent = secretNumber;
    document.querySelector('.number').style.width = '32rem';

      
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      message.textContent = '📈📈 too height  ';
    } else {
      message.textContent = '😔😔 you lose the game  ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      message.textContent = '📉📉 to low';
    } else {
      message.textContent = '😔😔 you lose the game  ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

again.addEventListener('click', function () {
    // location.reload()
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = "";
  document.querySelector(".number").textContent = "?"
  document.querySelector("body").style.backgroundColor = "#222"
  document.querySelector(".number").style.width = "15rem";
  document.querySelector('.highscore').textContent = 0;


});
