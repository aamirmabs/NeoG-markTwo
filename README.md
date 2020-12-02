# NeoG Camp - markTwo

[Click for markTwo Repl.it](https://repl.it/@aamyear/NeoG-markTwo)

The NeoG Camp is an initiative taken up by Tanay Pratap to introduce young minds to learn skills that are in-demand in the software industry in structured manner with the end goal of successfully mentoring a handful of motivated individuals and enable them to break into the industry.

The camp takes a bootcamp style approach with weekly coding sessions live streamed on YouTube where core concepts are explained in a practical manner by building something. Participants are required to then build something that demonstrates their understanding of the concepts.

## markTwo

This repository is the second assignment of the camp to be submitted in the first week.

### Requirements

The task to be implemented is as follows:

- create a quiz app about something famous and generic which anyone can play
- Keep the features same and it would be good enough for levelOne qualifier.

#### Additions - DONE

- **Introduce levels**: answer 5 right you go to level 2, then 10 right you go to level 3.

#### Bonus Activities - DONE

1. Explore readlineSync - DONE
   - Ask for simple YES/NO or do multi options
2. Use chalk - DONE
   - Use CHALK it in your current app
3. User high score - DONE
   - You have a data structure created in ex15 which shows high score by players to the current user. Write a piece of function which will check this high score data structure and see if current user's score is a high score or not. if current user has made a high score then congratulate him/her and ask them to send screenshot so that you can update the high score data structure.
   - hint
     - you need to **access** one entry at once
     - check whether the score is < less than or not
     - if not, then the user has broke records

#### Other Additions (Not a part of the requirements)

1. **Customize Quiz**: Player can choose to customize their experience of the game by modifying a few parameters:
   - Number of quesitons per level
   - Maximum wrong answers per level
   - Maximum skipped questions per level
   - Maximum skipped questions for whole game
2. **Randomized Quesitons**: Question sets are shuffled before looping over them. If the player chooses to run the game again, they will be shown a relatively different set of quesitons. The [Fisher-Yates (aka Knuth) Shuffle](https://bost.ocks.org/mike/shuffle/) algorithm is used to implement this.

## Design

### Data Structures and Functions

#### 'Questions' Data Structure

Questions of each of the levels are stored as an array of objects. Each of the sub-object contains the details of the question and its answers.

```javascript
{
   question: `This is a question?`,
   options: [
   "Option A",
   "Option B",
   "Option C",
   "Option C",
   ],
   answerPosition: 2,
}
```

When a question is asked to the player the contents of `question` are displayed along with the `options`. The user response is recorded with `readlineSync` and is compared with the value of `answerPosition`. If the position matches then the user response is deemed to be correct.

### User Interaction

All interaction that the user has is through the terminal. The `readline-sync` library is used to obtain the user inputs.

#### Numerical Answers

If an interaction requires a `yes/no` type interaction then the `readlineSync.questionInt()` function is used that returns the numerical value that the user typed. It also allows us to set a default value by using the `defaultInput` property in case the user does not type in anything.

```javascript
var num = readlineSync.questionInt("Query here...", { defaultInput: 5 });
```

#### Binary Answers

If an interaction requires a `yes/no` type interaction then the `readlineSync.keyInYN()` function is used that returns `Y` or `N`.

#### Selecting Answers to Questions

The user is shown the options in the following format:

```
A. Option A
B. Option B
C. Option C
D. Option D
```

The user types in the character of the option (such as `c`) and the returned value is the numerical value of the position. For example, if the user types in `c` and that is the third option, then the returned value is 3.

## Workflow

## **Credits**

1. The questions populated in the question banks have been taken from the following sources:
   - [Geeks for Geeks Javascript Quiz Set 1](https://www.geeksforgeeks.org/javascript-quiz-set-1/)
   - [Geeks for Geeks Javascript Quiz Set 2](https://www.geeksforgeeks.org/javascript-quiz-set-2/)
   - [Geeks for Geeks HTML Practice Quiz](https://www.geeksforgeeks.org/html-course-practice-quiz-1/)
   - [WSCubeTech CSS Quiz](https://www.wscubetech.com/quiz-test-css)
   - [TutorialsPoint CSS Quiz](https://www.tutorialspoint.com/css/css_online_quiz.htm)
2. The algorithm used to implement the shuffling of question banks is the [Fisher-Yates (aka Knuth) Shuffle](https://bost.ocks.org/mike/shuffle/).
