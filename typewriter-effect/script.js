const texts = ['Developer', 'Designer', 'Freelancer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const typeSpeed = 100;
const eraseSpeed = 100;

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('#typing-text').textContent = letter;
  if (letter.length === currentText.length) {
    setTimeout(erase, 1000);
  } else {
    setTimeout(type, typeSpeed);
  }
}

function erase() {
  letter = currentText.slice(0, --index);
  document.querySelector('#typing-text').textContent = letter;
  if (letter.length === 0) {
    count++;
    setTimeout(type, 500);
  } else {
    setTimeout(erase, eraseSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  type();
});
