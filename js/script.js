// 🎱 Select necessary elements
const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

// 🎱 Array of possible answers
const answerArr = [
  "Tak!",
  "Nie.",
  "Może.",
  "Ciężko powiedzieć...",
  "Nie chcesz znać odpowiedzi na to pytanie...",
];

// 🎱 Function to animate the ball and process input
const shakeBall = () => {
  ball.classList.add("shake-animation"); // Add animation class
  setTimeout(checkInput, 1000); // Wait before checking input
};

// 🎱 Function to validate input
const checkInput = () => {
  if (input.value !== "" && input.value.slice(-1) === "?") {
    generateAnswer();
    error.textContent = "";
  } else if (input.value !== "" && input.value.slice(-1) !== "?") {
    error.textContent = 'Pytanie musi być zakończone znakiem "?".';
    answer.textContent = "";
  } else {
    error.textContent = "Musisz zadać jakieś pytanie!";
    answer.textContent = "";
  }
  ball.classList.remove("shake-animation"); // Remove animation class after validation
};

// 🎱 Function to generate a random answer
const generateAnswer = () => {
  const number = Math.floor(Math.random() * answerArr.length);
  answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`;
};

// 🎱 Event listener for ball click
ball.addEventListener("click", shakeBall);
