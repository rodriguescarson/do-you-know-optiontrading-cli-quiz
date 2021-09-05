var readlineSync = require("readline-sync")
const chalk = require('chalk');

var score = 0

var question = [{
  question: `
The seller of a put option is betting that the market value of the stock will decrease.
	a: True
	b: False\n`,
  answer: "b"
}, {
  question: `
  At expiration a call option will have no value if the stock price is less than exercise price.
	a: True
	b: False\n`,
  answer: "b"
}, {
  question: `
  What is an Option Chain?
	a: A Table with all the relevant Option Information
	b: An Indicator
  c: An Option Strategy\n`,
  answer: "a"
}, {
  question: `
	What are American options?
	a: Options that only can be exercised at the expiration date
	b: Options that always can be exercised
	c: Options available in the US\n`,
  answer: "b"
}, {
  question: `
	What are other terms for an Option Buyer?
	a: Option Keeper
	b: Option Holder
	c: Option Giver\n`,
  answer: "b"
},]

var questionLevelTwo = [{
  question: `
  Stock ABC is trading for $76, which option is ITM (In The Money)?
	a: Put 71
	b: Call 71
  c: Call 76\n`,
  answer: "b"
}, {
  question: `
  Implied Volatility (IV) can also be thought of as?
	a: Actual Volatility
	b: Past Volatility
	c: Expected Volatility\n`,
  answer: "c"
}, {
  question: `
	On which day of the week option expire?
	a: Saturday
	b: Friday
	c: Thursday\n`,
  answer: "c"
}, {
  question: `
  The upfront fee the buyer must pay to the seller is?
	a: discount premium
	b: Call premium
	c: strike premium\n`,
  answer: "b"
}, {
  question: `
	When the price of underlying asset increases the good option is...?
	a: buy the call option
	b: sell the call option
	c: buy the put option\n`,
  answer: "a"
},]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer) {
    console.log(chalk.green("Right!"))
    score++;
  } else {
    console.log(chalk.red("Wrong!"))
  }

  console.log("Current score: " + score)
}

var userName = readlineSync.question("Whats your name?");

console.log(chalk.cyan("Welcome ") + chalk.greenBright(userName) + " to Do you really know option trading?")

for (var i = 0; i < question.length; i++) {
  play(question[i].question, question[i].answer)
}

if (score == question.length) {
  console.log("Your final score is: "+score+"/"+question.length)
  console.log(chalk.bgGreen("Congratulations") + chalk.bgGreen(userName) + chalk.bgGreen(" , You made it to level 2"))

  for (var i = 0; i < questionLevelTwo.length; i++) {
    play(questionLevelTwo[i].question, questionLevelTwo[i].answer)
  }

  if (score == questionLevelTwo.length + question.length) {
      console.log("Your final score is: "+score)
    console.log(chalk.bgBlueBright("Perfect score, you are a expert!!"))
  } else {
    console.log("Your final score is: "+score+"/"+(questionLevelTwo.length+question.length))
    console.log(chalk.bgBlueBright("Keep it up, keep learning"))
  }

} else {
  console.log(chalk.yellow("No problem!") + chalk.cyan(userName) + chalk.yellow(" , you have to brush up your option trading skills buddy. Retake the test to reach level 2"))
}