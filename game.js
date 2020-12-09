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

let currentScore = 0;

const increaseScore = score => score+1;

const decreaseScore = score => score-1;


const play = (name) => {
  const {length} = returnAQuestion(name,0);
  
  for(let i = 0; i < length ; i++)
  {
    let {askedQuestion} = returnAQuestion(name,i);
    console.log("-----------------------------------------------");
    if(askedQuestion.type === "options")
    {
      let currentAnswer = readlineSync.keyInSelect(askedQuestion.title,["1","2","three"])
      console.log(currentAnswer)
    }
  }
}

module.exports = {initGame}