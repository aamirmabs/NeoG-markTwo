// neoG markTwo ASSIGNMENT

// detailed documentation at https://github.com/aamyear/NeoG-markTwo/blob/main/README.md

// OBJECTIVES - Done
// create a quiz app about something famous and generic which anyone can play
// Keep the features same and it would be good enough for levelOne qualifier.

// ADDITIONS - Done
// introduce levels: answer 5 right you go to level 2, then 10 right you go to level 3.

// BONUS ACTIVITIES - Done
// 1. Explore readlineSync
// Ask for simple YES/NO or do multi options

// 2. Use chalk - Done
// Use CHALK it in your current app

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
// levelOne Question Bank - Javascript
// questions taken from the following sources:
// https://www.geeksforgeeks.org/javascript-quiz-set-1/
// https://www.geeksforgeeks.org/javascript-quiz-set-2/
var lvlOneQB = [
  {
    question: `Which of the following is the correct syntax to display “NeoG” in an alert box using JavaScript?`,
    options: ["alertbox(NeoG);", "msg(NeoG);", "msgbox(NeoG);", "alert(NeoG);"],
    answerPosition: 3,
  },
  {
    question: `Predict the output of the following JavaScript code.

  <script type="text/javascript">
  a = 8 + "8";
  document.write(a);
  </script>
    `,
    options: ["16", "Compilation Error", "88", "Run Time Error"],
    answerPosition: 2,
  },
  {
    question: `Which of the following is not a reserved word in JavaScript?`,
    options: ["interface", "throws", "program", "short"],
    answerPosition: 2,
  },
  {
    question: `What is the syntax for creating a function in JavaScript named as 'neoG'?`,
    options: [
      "function = neoG()",
      "function neoG()",
      "function := neoG()",
      "function : neoG()",
    ],
    answerPosition: 1,
  },
  {
    question: `How is a function named 'neoG' called in JavaScript?`,
    options: [
      "call neoG();",
      "call function neoG();",
      "neoG();",
      "function neoG();",
    ],
    answerPosition: 2,
  },
  {
    question: `How to write an ‘if’ statement for executing some code.
    If “i” is NOT equal to 5?`,
    options: ["if(i<>5) ", "if i<>5", "if(i!=5)", "if i!=5"],
    answerPosition: 2,
  },
  {
    question: `What is the correct syntax for adding comments in JavaScript?`,
    options: [
      "<!–This is a comment–>",
      "//This is a comment",
      "–This is a comment",
      "**This is a comment**",
    ],
    answerPosition: 1,
  },
  {
    question: `What is the JavaScript syntax for printing values in Console?`,
    options: [
      "print(5)",
      "console.log(5);",
      "console.print(5);",
      "print.console(5);",
    ],
    answerPosition: 1,
  },
  {
    question: `What will be the output of: 'typeof(24.49)'?`,
    options: ["float", "number", "integer", "double"],
    answerPosition: 1,
  },
  {
    question: `How will you find the length of the string 'neoG Camp'?`,
    options: [
      "'neoG Camp'.len",
      "sizeof('neoG Camp')",
      "'neoG Camp'.length",
      "lenOf('neoG Camp')",
    ],
    answerPosition: 2,
  },
];

// levelTwo Question Bank - HTML
// Questions taken from:
// https://www.geeksforgeeks.org/html-course-practice-quiz-1/
var lvlTwoQB = [
  {
    question: `What does HTML stands for? `,
    options: [
      "Hypertext Machine language",
      "Hypertext and links markup language",
      "Hightext machine language",
      "Hypertext Markup Language",
    ],
    answerPosition: 3,
  },
  {
    question: `How is document type initialized in HTML5?`,
    options: [
      "</DOCTYPE HTML>",
      "</DOCTYPE>",
      "<!DOCTYPE HTML>",
      "</DOCTYPE html>",
    ],
    answerPosition: 2,
  },
  {
    question: `Which of the following HTML Elements is used for making any text bold?`,
    options: ["<p>", "<i>", "<li>", "<b>"],
    answerPosition: 3,
  },
  {
    question: `Which of the following HTML element is used for creating an unordered list?`,
    options: [
      "<ul>...</ul>",
      "<ulist>...</ulist>",
      "<i>...</i>",
      "<em>...</em>",
    ],
    answerPosition: 0,
  },
  {
    question: `Which of the following characters indicate closing of a tag?`,
    options: [".", "/", "\\", "|"],
    answerPosition: 1,
  },
  {
    question: `What is the font-size of the h1 heading tag?`,
    options: ["3.5em", "2.17em", "2em", "1.5em"],
    answerPosition: 2,
  },
  {
    question: ``,
    options: ["", "", "", ""],
    answerPosition: 3,
  },
  {
    question: `How many heading tags are there in HTML5?`,
    options: ["2", "4", "6", "8"],
    answerPosition: 2,
  },
  {
    question: `Which of the following attributes is used to add link to any element?`,
    options: ["link", "ref", "href", "newref"],
    answerPosition: 2,
  },
  {
    question: `Which of the following is the correct way of creating an hyperlink in HTML?`,
    options: [
      "<a>https://neog.camp/ <neoG Camp /a>",
      "<a href= “https://neog.camp/”>neoG Camp</a>",
      "<a href=“https://neog.camp/” neoG Camp /a> ",
      "<a link=“https://neog.camp/” neoG Camp> </a>",
    ],
    answerPosition: 1,
  },
];

// levelThree Question Bank - CSS
// Sources:
// https://www.wscubetech.com/quiz-test-css
// https://www.tutorialspoint.com/css/css_online_quiz.htm
var lvlThreeQB = [
  {
    question: `Which of the following is a component of CSS style rule?`,
    options: ["selector", "property", "value", "All of the above"],
    answerPosition: 3,
  },
  {
    question: `How can you created rounded corners using CSS3?`,
    options: [
      "border[round]: 30px; ",
      "corner-effect: round; ",
      "border-radius: 30px; ",
      "alpha-effect: round-corner; ",
    ],
    answerPosition: 2,
  },
  {
    question: `How to resize a background image using CSS3? `,
    options: [
      "background-size: 80px 60px; ",
      "bg-dimensions: 80px 60px; ",
      "background-proportion: 80px 60px; ",
      "alpha-effect: bg-resize 80px 60px; ",
    ],
    answerPosition: 0,
  },
  {
    question: `How to add text shadow using CSS3? `,
    options: [
      "font: shadowed 5px 5px 5px grey; ",
      "font-shadow: 5px 5px 5px grey; ",
      "text-shadow: 5px 5px 5px grey; ",
      "shadow: text 5px 5px 5px grey; ",
    ],
    answerPosition: 2,
  },
  {
    question: `Which of the following property is used to set the background image of an element?`,
    options: [
      "background-color",
      "background-image",
      "background-repeat",
      "background-position",
    ],
    answerPosition: 0,
  },
  {
    question: `Which of the following property is used to increase or decrease how bold or light a font appears?`,
    options: ["font-family", "font-style", "font-variant", "font-weight"],
    answerPosition: 3,
  },
  {
    question: `Which of the following property is used to set the width of an image?`,
    options: ["border", "height", "width", "-moz-opacity"],
    answerPosition: 2,
  },
  {
    question: `Which of the following property specifies the right padding of an element?`,
    options: ["padding-right", "padding-r", "right-padding", "rt-padding"],
    answerPosition: 0,
  },
  {
    question: `How to rotate objects using CSS3? `,
    options: [
      "object-rotation: 30deg; ",
      "transform: rotate(30deg); ",
      "rotate-object: 30deg; ",
      "transform: rotate-30deg-clockwise; ",
    ],
    answerPosition: 3,
  },
  {
    question: `What does RGBa mean? `,
    options: [
      "Red Green Blue alpha ",
      "Red Gray Brown alpha ",
      "Red Gold Black alpha ",
      "Review Get assistance Back-up your information Acquire proof ",
    ],
    answerPosition: 0,
  },
];

// START initializing core functions
// Global Quiz Parameters
var noOfQuePerLvl = 5;
var maxWrongAnswersPerLvl = 3;
var maxSkipsPerLvl = 2;
var maxSkipsPerSession = 5;
var totalQuizLevels = 3;

// function to set Global Quiz Parameters
function setQuizParameters() {
  // using askAgain(question, min, max, defaultValue)
  var customNoOfQuePerLvl = askAgain(
    "How many quesitons per level? (min:3 max:10 default:5)",
    3,
    10,
    5
  );

  var customMaxWrongAnswersPerLvl = askAgain(
    `How many wrong answers are allowed per level before player fails level? (min:1 max:${customNoOfQuePerLvl} default:3)`,
    1,
    customNoOfQuePerLvl,
    3
  );

  var customMaxSkipsPerLvl = askAgain(
    `How many questions can be skipped per level? (min:1 max:${customNoOfQuePerLvl} default:2)`,
    1,
    customNoOfQuePerLvl,
    2
  );

  var customMaxSkipsPerSession = askAgain(
    `Maximum questions can be skipped per game? (min:1 max:${
      customNoOfQuePerLvl * totalQuizLevels
    } default:5)`,
    1,
    customNoOfQuePerLvl * totalQuizLevels,
    2
  );

  // setting custom values to global values
  noOfQuePerLvl = customNoOfQuePerLvl;
  maxWrongAnswersPerLvl = customMaxWrongAnswersPerLvl;
  maxSkipsPerLvl = customMaxSkipsPerLvl;
  maxSkipsPerSession = customMaxSkipsPerSession;
}

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
        chalk.yellow(
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

function shuffleArray(array) {
  // using Math.random() will pick duplicate index values
  // so the same quesitons might get displayed
  // We will randomize the questions array using Fisher-Yates (aka Knuth) Shuffle
  // read about it here: https://bost.ocks.org/mike/shuffle/

  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
// END initializing core functions

// START - initializing helper functions
function askAgain(question, min, max, defaultValue) {
  var num = readlineSync.questionInt(question, { defaultInput: defaultValue });

  while (num < min || num > max) {
    console.log("\nThat is not a valid input. Try again. please! \n");
    num = readlineSync.questionInt(question, { defaultInput: defaultValue });
  }

  return num;
}

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

  console.log("\n   ---=====---\nPrevious High Score was " + highestScore);

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

// prints each question header with a different background
function questionHeader(level, queIndex, flipState) {
  // saving chalk background variables
  var rBG = chalk.black.bgRedBright;
  var gBG = chalk.black.bgGreenBright;
  var bBG = chalk.black.bgBlueBright;
  var mBG = chalk.black.bgMagentaBright;
  var cBG = chalk.black.bgCyanBright;

  // set heading string
  var heading = `\n   ---=== LEVEL ${level} QUESTION ${
    queIndex + 1
  } ===---   \n`;

  // change background based on state variable
  switch (flipState) {
    case 0:
      console.log(rBG(heading));
      break;
    case 1:
      console.log(gBG(heading));
      break;
    case 2:
      console.log(bBG(heading));
      break;
    case 3:
      console.log(mBG(heading));
      break;
    case 4:
      console.log(cBG(heading));
      break;
  }
}
// END - initializing helper functions

// ********************************
// ********** BEGIN QUIZ **********
// ********************************

// get user name
var userName = readlineSync.question("What is your name?\n");
console.log(
  "\nWell, Hello there " + userName + "! Welcome to the NoeG Quiz. :-)"
);

pause();

// ask user if they want to customize the quiz
if (
  readlineSync.keyInYN(
    "\nWould you like to " + chalk.red("customize") + " the quiz?"
  )
) {
  // 'Y' key was pressed.
  setQuizParameters();
} else {
  // Another key was pressed.
  console.log("\nCool, we will play this session with the default settings...");
}

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
  * The Quiz has three levels: JS, HTML and CSS
  * Get 1 point, 2 points and 3 points for lvl 1, 2 and 3 respectively
  * Get 0 points for skipping question
  * Total ${noOfQuePerLvl} questions per level
  * Max ${maxWrongAnswersPerLvl} wrong answers per level
  * Fail max ${maxSkipsPerLvl} questions per level
  * Fail max ${maxSkipsPerSession} questions in whole game
  `;
  console.log(rules);
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
	1. Max ${maxWrongAnswersPerLvl} wrong answers per level
	2. +1 point for correct answer
	3. -1 point for wrong answer
	`);

  pause();

  // reset counters
  currentLvlWrongAnswers = 0;

  // before we begin asking questions we will shuffle the question set
  // if the user chooses to play again they might be shown a few different questions
  lvlOneQB = shuffleArray(lvlOneQB);

  // change background of question heading when question changes
  var flipState = 1;

  for (var i = 0; i < 5; i++) {
    if (playerLostGame) {
      printEndScore();
      break;
    }

    console.clear();

    questionHeader(1, i, flipState);
    askQuestion(lvlOneQB[i], 1);

    // update flipState to change background in next iteration
    ++flipState;
    if (flipState == 4) flipState = 0;
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
	1. Max ${maxWrongAnswersPerLvl} wrong answers per level
	2. +2 point for correct answer
	3. -1 point for wrong answer
	`);

  pause();

  // reset counters
  currentLvlWrongAnswers = 0;

  // before we begin asking questions we will shuffle the question set
  // if the user chooses to play again they might be shown a few different questions
  lvlTwoQB = shuffleArray(lvlTwoQB);

  // change background of question heading when question changes
  var flipState = 1;

  for (var i = 0; i < 5; i++) {
    if (playerLostGame) {
      printEndScore();
      break;
    }

    console.clear();

    questionHeader(2, i, flipState);
    askQuestion(lvlTwoQB[i], 2);

    // update flipState to change background in next iteration
    ++flipState;
    if (flipState == 4) flipState = 0;
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
	1. Max ${maxWrongAnswersPerLvl} wrong answers per level
	2. +3 point for correct answer
	3. -1 point for wrong answer
	`);

  pause();

  // reset counters
  currentLvlWrongAnswers = 0;

  // before we begin asking questions we will shuffle the question set
  // if the user chooses to play again they might be shown a few different questions
  lvlThreeQB = shuffleArray(lvlThreeQB);

  // change background of question heading when question changes
  var flipState = 1;

  for (var i = 0; i < 5; i++) {
    if (playerLostGame) {
      printEndScore();
      break;
    }

    console.clear();

    questionHeader(3, i, flipState);
    askQuestion(lvlThreeQB[i], 3);

    // update flipState to change background in next iteration
    ++flipState;
    if (flipState == 4) flipState = 0;
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
