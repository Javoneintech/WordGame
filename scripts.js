const randomWord = ["Gojo", "Kekashi", "killua", "ban", "shoto"]; //random word Array
const genRandomWord = Math.floor(Math.random() * randomWord.length); //Generates a random index to pick from the array
const wordChoice = randomWord[genRandomWord]; //selects the random word
console.log(wordChoice);

const hints = {
  //create hints OBJECT mapping words to their hints
  Gojo: "Hint: Jujutsu Kaisen",
  Kekashi: "Hint: Naruto",
  killua: "Hint: Hunter x Hunter",
  ban: "Hint: Seven Deadly Sins",
  shoto: "Hint: My Hero Academia",
};

const hintTextElement = document.getElementById("hint-text");
hintTextElement.textContent = hints[wordChoice]; //set the text to the assigned hint text

let displayedWord = Array(wordChoice.length).fill("_"); //an array with underscores
document.getElementById("correct-word").innerHTML = displayedWord.join(" "); //display array with underscores and adds spaces

let lives = 6; //sets lives to 6

function guess() {
  //guess function
  const buttonValue = this.value.toLowerCase(); //lowercases the value of the clicked button
  console.log(`Button clicked: ${buttonValue}`);
  console.log(`Word choice: ${wordChoice.toLowerCase()}`);

  // Check if the guessed letter is in the wordChoice
  if (wordChoice.toLowerCase().includes(buttonValue)) {
    console.log(`The letter ${buttonValue} is in the word!`);
    // Update the displayed word to reveal the correctly guessed letters
    updateDisplayedWord(buttonValue);
  } else {
    console.log(`The letter ${buttonValue} is not in the word.`);
    // Decrease the number of lives or handle incorrect guesses
    lives--;
    document.getElementById("lives-container").textContent = `Lives ${lives}/6`;

    //change the color of the button to black when incorrectly guessed
    this.style.backgroundColor = "black";
    const imageContainer = document.querySelector("#image-container img");

    if (lives === 6) {
      imageContainer.src = "assets/word game images/ultra instinct goku.jpeg";
    } else if (lives === 5) {
      imageContainer.src = "assets/word game images/ss blue goku.jpeg";
    } else if (lives === 4) {
      imageContainer.src = "assets/word game images/ss 3 goku.jpeg";
    } else if (lives === 3) {
      imageContainer.src = "assets/word game images/ss 2 goku.jpeg"; //updating the image based on the number of lives
    } else if (lives === 2) {
      imageContainer.src = "assets/word game images/ss1 goku.jpeg";
    } else if (lives === 1) {
      imageContainer.src = "assets/word game images/goku base.webp";
    } else if (lives === 0) {
      imageContainer.src = "assets/word game images/yamcha defeated.png";

      setTimeout(function () {
        alert("`oh no!! you lost! refresh and try again!`"); //sets timer to delay the alert
      }, 100);
    }
  }
}

//This will display the letter if the letter is correctly guessed
function updateDisplayedWord(guessedLetter) {
  wordChoice.split("").forEach((letter, index) => {
    if (letter.toLowerCase() === guessedLetter) {
      displayedWord[index] = letter;
    }
  });

  //Check to see if the player guessed the correct word
  document.getElementById("correct-word").innerHTML = displayedWord.join(" ");
  if (displayedWord.join("") === wordChoice) {
    setTimeout(function () {
      alert("Winner Winner, Chicken Dinner!!");
    }, 100);
  }
}
