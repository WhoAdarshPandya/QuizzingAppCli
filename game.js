const readlineSync = require('readline-sync');
const chalk = require('chalk')
const {returnAQuestion} = require('./questions')

const initGame = () => {
  const userName = readlineSync.question("hey ! what's your name ? ");
  if(userName !== '' && userName !== null)
  {
    console.log(`Hey ${userName} ! Welcome to the game :)`);
    console.log("------------------------------------");
    play(userName);
  }else{
    console.log("your answers are empty :( ...")
    initGame();
  }
}

let highScores = [
  {
    name:'Sharan',
    score:4
  },
  {
    name :'Aditya',
    score:3
  },
  {
    name: 'Tanvi',
    score:5
  }
]

const findMinimumHighScore = () =>
{
  let arr = highScores.sort((a,b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0))
  highScores = arr;
}

let currentScore = 0;

const play = (name) => {
  const {length} = returnAQuestion(name,0);
  
  for(let i = 0; i < length ; i++)
  {
    let {askedQuestion} = returnAQuestion(name,i);
    console.log("-----------------------------------------------");
    if(askedQuestion.type === "options")
    {
      let currentAnswer = readlineSync.keyInSelect(askedQuestion.options,chalk.green(askedQuestion.title));
      if(askedQuestion.options[currentAnswer].toLowerCase() === askedQuestion.answer.toLowerCase())
      {
       currentScore += 1;
      }
    }
    if(askedQuestion.type === "YN")
    {
      let currentAnswer = readlineSync.keyIn(askedQuestion.title);
      if(currentAnswer.toLowerCase() === askedQuestion.answer.toLowerCase())
      {
        currentScore += 1;
      }
    }
    
  }
   console.log(chalk.bgBlackBright.red("---- GAME OVER ----"));
     console.log(chalk.bgBlackBright.greenBright(`SCORE : ${currentScore}`))
    findMinimumHighScore();
    if(currentScore > +highScores[0].score)
    {
      console.log(chalk.cyan("congrats you're amongst the top scorers"))
      highScores[0] = {name,score:currentScore}
      for(let item of highScores)
      {
        console.log(chalk.redBright(JSON.stringify(item)));
      }
    }else{
      console.log(chalk.cyan("better luck next time, try to be among top scorers"))
      for(let item of highScores)
      {
        console.log(chalk.redBright(JSON.stringify(item)));
      }
    }
}

module.exports = {initGame}