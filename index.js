// neoG markTwo ASSIGNMENT

// OBJECTIVES - Done
// create a quiz app about something famous and generic which anyone can play
// Keep the features same and it would be good enough for levelOne qualifier.

// ADDITIONS - Done
// introduce levels: answer 5 right you go to level 2, then 10 right you go to level 3.

// BONUS ACTIVITIES - Done
// 1. Explore readlineSync
// Ask for simple YES/NO or do multi options

// 2. Use chalk - Done
// Use CHELK it in your current app

// 3. User high score - Done
// You have a data structure created in ex15 which shows high score by players to the current user. Write a piece of function which will check this high score data structure and see if current user's score is a high score or not. if current user has made a high score then congratulate him/her and ask them to send screenshot so that you can update the high score data structure.
// hint
//     you need to access one entry at once
//     check whether the score is < less than or not
//     if not, then the user has broke records

// initializing external libraries
var readlineSync = require("readline-sync");
const chalk = require("chalk");

// initializing a color scheme with chalk
const highlight = chalk.bold.red.bgWhite;
const warning = chalk.keyword("orange");

// START initializing constants and variables
const scoreboard = [
  { player: "Anuj", score: 5 },
  { player: "Bhanu", score: 4 },
  { player: "Chetan", score: 3 },
  { player: "Dilip", score: 2 },
  { player: "Ethan", score: 1 },
];

// points per correct answer per level
const lvlOnePoint = 1;
const lvlTwoPoint = 2;
const lvlThreePoint = 3;

// variables to track score of current player
var correctAnswers = 0;
var wrongAnswers = 0;
var currentLvl = 1;
var currentLvlWrongAnswers = 0;
var currentScore = 0;
var skippedQuestions = 0;

// variables to check state of player
var playerLostGame = false;
var playerLostLvlOne = false;
var playerLostLvlTwo = false;
var playerLostLvlThree = false;

// END initializing constants and variables

// initializing questions
// TODO : Move the quesitons to separate file and then import
// levelOne Question Bank
var lvlOneQB = [
  {
    question: `Q1 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
  {
    question: `Q2 here???`,
    options: ["opA", "opB", "opC", "opDXXX"],
    answerPosition: 3,
  },
  {
    question: `Q3 here???`,
    options: ["opAXXX", "opB", "opC", "opD"],
    answerPosition: 0,
  },
  {
    question: `Q4 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
  {
    question: `Q5 here???`,
    options: ["opA", "opB", "opC", "opDXXX"],
    answerPosition: 3,
  },
  {
    question: `Q6 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
  {
    question: `Q7 here???`,
    options: ["opA", "opB", "opC", "opDXXX"],
    answerPosition: 3,
  },
  {
    question: `Q8 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
  {
    question: `Q9 here???`,
    options: ["opA", "opB", "opC", "opDXXX"],
    answerPosition: 3,
  },
  {
    question: `Q10 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
];

// levelTwo Question Bank
var lvlTwoQB = [
  {
    question: `Q1 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
  {
    question: `Q2 here???`,
    options: ["opA", "opB", "opC", "opDXXX"],
    answerPosition: 3,
  },
  {
    question: `Q3 here???`,
    options: ["opAXXX", "opB", "opC", "opD"],
    answerPosition: 0,
  },
  {
    question: `Q4 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
  {
    question: `Q5 here???`,
    options: ["opA", "opB", "opC", "opDXXX"],
    answerPosition: 3,
  },
  {
    question: `Q6 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
  {
    question: `Q7 here???`,
    options: ["opA", "opB", "opC", "opDXXX"],
    answerPosition: 3,
  },
  {
    question: `Q8 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
  {
    question: `Q9 here???`,
    options: ["opA", "opB", "opC", "opDXXX"],
    answerPosition: 3,
  },
  {
    question: `Q10 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
];

// levelThree Question Bank
var lvlThreeQB = [
  {
    question: `Q1 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
  {
    question: `Q2 here???`,
    options: ["opA", "opB", "opC", "opDXXX"],
    answerPosition: 3,
  },
  {
    question: `Q3 here???`,
    options: ["opAXXX", "opB", "opC", "opD"],
    answerPosition: 0,
  },
  {
    question: `Q4 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
  {
    question: `Q5 here???`,
    options: ["opA", "opB", "opC", "opDXXX"],
    answerPosition: 3,
  },
  {
    question: `Q6 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
  {
    question: `Q7 here???`,
    options: ["opA", "opB", "opC", "opDXXX"],
    answerPosition: 3,
  },
  {
    question: `Q8 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
  {
    question: `Q9 here???`,
    options: ["opA", "opB", "opC", "opDXXX"],
    answerPosition: 3,
  },
  {
    question: `Q10 here???`,
    options: ["opA", "opB", "opCXXX", "opD"],
    answerPosition: 2,
  },
];

// START initializing core functions
// set flag on which level the player lost
function setFailLvl(levelNumber) {
  if (levelNumber == 1) playerLostLvlOne = true;
  else if (levelNumber == 2) playerLostLvlTwo = true;
  else if (levelNumber == 3) playerLostLvlThree = true;
}

function askQuestion(questionObj, levelPoint) {
  console.log("");

  console.log(questionObj.question);

  var choice = readlineSync.keyInSelect(questionObj.options, "Choose ");

  if (choice == questionObj.answerPosition) {
    correctAnswers = correctAnswers + 1;
    currentScore = currentScore + levelPoint;
    printSuccessScore();
    pause();
  } else if (choice == -1) {
    console.log("You Skipped the question!");
    skippedQuestions = skippedQuestions + 1;
    var remaining = 3 - skippedQuestions;

    // end game if user skips 3 questions
    if (skippedQuestions == 3) {
      console.log(
        "You have " +
          chalk.yellow("skipped 3 quesitons") +
          ". This is the end of the road!"
      );
      playerLostGame = true;
      setFailLvl(levelPoint);
    } else {
      console.log(
        chalk.bgYellow(
          "Skipped: " + skippedQuestions + " Remaining: " + remaining
        )
      );
    }
    pause();
  } else {
    wrongAnswers = wrongAnswers + 1;
    currentScore = currentScore - 1;
    currentLvlWrongAnswers = currentLvlWrongAnswers + 1;
    printFailureScore();

    pause();

    if (currentLvlWrongAnswers == 2) {
      console.log(
        "You have " +
          chalk.red("2 wrong answers") +
          " on this level. This is the end of the road!"
      );
      playerLostGame = true;
      setFailLvl(levelPoint);

      pause();
    }
  }
}
// END initializing core functions

// START - initializing helper functions
function pause() {
  // using readlineSync as a workaround to pause execution till enter is pressed
  readlineSync.question("\nPress Enter to proceed...", {
    hideEchoBack: true,
    mask: "",
  });
}

function printLvl() {
  if (currentLvl == 1) {
    console.log(chalk.black.bgGreen.bold("Current Level 1"));
  } else if (currentLvl == 2) {
    console.log(chalk.black.bgYellow.bold("Current Level 2"));
  } else {
    console.log(chalk.black.bgRed.bold("Current Level 3"));
  }
}

function printScoreboard() {
  console.table(scoreboard);
}

// print score on correct answer
function printSuccessScore() {
  console.log("That was a " + chalk.green("correct") + " answer.\n");

  console.log(chalk.green("  ---SCORE---  "));
  console.log("Correct: " + correctAnswers);
  console.log("Wrong: " + wrongAnswers);
  console.log("Score: " + chalk.green(currentScore));
  printLvl();
  console.log(chalk.green("  ---=====---  "));
}

// print score on wrong answer
function printFailureScore() {
  console.log("That was a " + chalk.red("wrong") + " answer.\n");

  console.log(chalk.red("  ---SCORE---  "));
  console.log("Correct: " + correctAnswers);
  console.log("Wrong: " + wrongAnswers);
  console.log("Score: " + chalk.red(currentScore));
  printLvl();
  console.log(chalk.red("  ---=====---  "));
}

// print score on skip question or beginning of level
function printNeutralScore() {
  console.log(chalk.red("  ---SCORE---  "));
  console.log("Correct: " + correctAnswers);
  console.log("Wrong: " + wrongAnswers);
  console.log("Score: " + currentScore);
  printLvl();
  console.log(chalk.red("  ---=====---  "));
}

// print score at end of quiz
function printEndScore() {
  console.clear();

  console.log(chalk.red.bgWhite("     ---===== END GAME =====---     "));

  console.log(
    "Dear " +
      userName +
      ", \nthank you for taking the time to play the NeoG quiz. Here is your performance review:"
  );

  console.log(chalk.black.bgGreen("  ---SCORE---  "));
  console.log(" Name : " + chalk.red(userName));
  console.log(" Score : " + chalk.red(currentScore));
  console.log(chalk.black.bgGreen("  ---=====---  "));

  // check if user beat the highscore
  var beatHighScore = false;
  var highestScore = -1;
  for (var i = 0; i < scoreboard.length; i++) {
    if (highestScore < scoreboard[i].score) {
      highestScore = scoreboard[i].score;
    }
    if (currentScore > highestScore) {
      beatHighScore = true;
    }
  }

  console.log("Previous High Score was " + highestScore);

  if (beatHighScore) {
    console.log(
      "\nYou beat the high score! " + chalk.green("Congratulations! ")
    );
  } else {
    console.log(
      "\nYou didn't beat the high score! " +
        chalk.red("Better luck next time! ")
    );
  }

  console.log("\nWish you the best!");
}
// END - initializing helper functions

// BEGIN QUIZ
// get user name
var userName = readlineSync.question("What is your name?\n");
console.log(
  "\nWell, Hello there " + userName + "! Welcome to the NoeG Quiz. :-)"
);

pause();

// ask them if they want to view instructions
if (
  readlineSync.keyInYN(
    "\nBefore we begin, would you like to " +
      chalk.red("view the rules") +
      " of the game?"
  )
) {
  // 'Y' key was pressed.
  console.log(highlight("\n ---=== RULES ===--- \n"));
  var rules = `
	1. Rule 1
	2. Rule 2
  3. Rule 3
  `;
  console.log(rules);

  // Do something...
} else {
  // Another key was pressed.
  console.log("\nAlright hotshot, lets go...");
}

pause();

// show list of previous scores
console.log("");
if (
  readlineSync.keyInYN(
    "We have had other players play this game before. \nWould you like to " +
      chalk.red("view the highscore") +
      " you need to beat?"
  )
) {
  // 'Y' key was pressed.
  printScoreboard();
  // Do something...
} else {
  // Another key was pressed.
  console.log("\nThat's alright. We're sure you will beat them all...");
}

// BEGIN QUIZ
pause();

console.log("\nAre you ready to begin the quiz?");

pause();

// START levelOne questions
function playLvlOneQuiz() {
  console.clear();

  console.log(highlight("\n     ---=== LEVEL ONE ===---     \n"));

  console.log("Your current score is:");
  printNeutralScore();
  pause();

  console.log(`\nJust a reminder before we begin:
	1. Max 2 wrong answers per level
	2. +1 point for correct answer
	3. -1 point for wrong answer
	4. 0 points for skipping questions
	5. 3 maximum skips in whole game`);

  pause();

  // reset counters
  currentLvlWrongAnswers = 0;

  for (var i = 0; i < 5; i++) {
    if (playerLostGame) {
      printEndScore();
      break;
    }

    askQuestion(lvlOneQB[i], 1);
  }

  if (playerLostGame == false) {
    console.log(
      chalk.black.bgGreen("\n CONGRATULATIONS! ") + " You passed Level ONE..."
    );
    currentLvl = currentLvl + 1;
    pause();
  }
}

// START levelTWO questions
function playLvlTwoQuiz() {
  console.clear();

  console.log(highlight("\n     ---=== LEVEL TWO ===---     \n"));

  console.log("Your current score is:");
  printNeutralScore();
  pause();

  console.log(`\nJust a reminder before we begin:
	1. Max 2 wrong answers per level
	2. +2 point for correct answer
	3. -1 point for wrong answer
	4. 0 points for skipping questions
	5. 3 maximum skips in whole game`);

  pause();

  // reset counters
  currentLvlWrongAnswers = 0;

  for (var i = 0; i < 5; i++) {
    if (playerLostGame) {
      printEndScore();
      break;
    }

    askQuestion(lvlTwoQB[i], 2);
  }

  if (playerLostGame == false) {
    console.log(
      chalk.black.bgGreen("\n CONGRATULATIONS! ") + " You passed Level TWO..."
    );
    currentLvl = currentLvl + 1;
    pause();
  }
}

// START levelTHREE questions
function playLvlThreeQuiz() {
  console.clear();

  console.log(highlight("\n     ---=== LEVEL THREE ===---     \n"));

  console.log("Your current score is:");
  printNeutralScore();
  pause();

  console.log(`\nJust a reminder before we begin:
	1. Max 2 wrong answers per level
	2. +3 point for correct answer
	3. -1 point for wrong answer
	4. 0 points for skipping questions
	5. 3 maximum skips in whole game`);

  pause();

  // reset counters
  currentLvlWrongAnswers = 0;

  for (var i = 0; i < 5; i++) {
    if (playerLostGame) {
      printEndScore();
      break;
    }

    askQuestion(lvlThreeQB[i], 3);
  }

  if (playerLostGame == false) {
    console.log(
      chalk.black.bgGreen("\n CONGRATULATIONS! ") + " You passed Level THREE..."
    );
    pause();
  }
}

function runQuiz() {
  // run levelOne
  playLvlOneQuiz();

  // check if player is eligible and play levelTwo
  if (playerLostGame == false && playerLostLvlOne == false) {
    // console.log("Entering LVL 2");
    playLvlTwoQuiz();
  }

  // check if player is eligible and play levelThree
  if (playerLostGame == false && playerLostLvlTwo == false) {
    // console.log("Entering LVL 3");
    playLvlThreeQuiz();
  }

  // check if player is eligible, that is, not lost and print congratulatory message
  printEndScore();
}

runQuiz();
