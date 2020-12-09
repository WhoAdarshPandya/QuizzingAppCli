
const returnAQuestion = (name,index) => {
  const questions = [
    {
      title:`So ${name}, What's my name ? `,
      type:"options",
      options:["Adarsh","Ajay","Tanay","Tanvi"],
      answer : "Adarsh"
    },
  ];
  return {length:questions.length,askedQuestion:questions[index]};
}


module.exports = {returnAQuestion};
