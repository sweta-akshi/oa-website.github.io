const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "hobby",
      message: "What is your favorite hobby?"
    },
    {
      type: "input",
      name: "language",
      message: "What is your preferred programming language?"
    }
  ])
  .then(function(answers) {
    console.log(JSON.stringify(answers, null, "  "));
    console.log("Answers is an", typeof answers);
  });