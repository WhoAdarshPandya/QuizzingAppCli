
const returnAQuestion = (name,index) => {
  const questions = [
    {
      title:`So ${name}, What's my name ? `,
      type:"options",
      options:["Adarsh","Ajay","Tanay","Tanvi"],
      answer : "Adarsh"
    },
    {
      title:`So ${name}, What's my age ? `,
      type:"options",
      options:["18","20","22","21"],
      answer : "21"
    },
    {
      title:`So ${name}, what's my hobby ? `,
      type:"options",
      options:["reading","travelling","eating"],
      answer : "travelling"
    },
    {
      title:`am i anti - social ? `,
      type:"YN",
      answer : "y"
    },
    {
      title:`do i love making memes ? `,
      type:"YN",
      answer : "y"
    },
  ];
  return {length:questions.length,askedQuestion:questions[index]};
}


module.exports = {returnAQuestion};
