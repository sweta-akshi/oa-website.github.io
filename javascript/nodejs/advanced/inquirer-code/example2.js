const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      name: "doingWhat",
      message: "What are you doing in my house??",
      choices: [
        "I've come to organize your spices...I'll leave soon",
        "I see you shop at lowes...you know why I'm here.",
        "Uh. This is my house... Who are YOU???"
      ]
    },

    {
      type: "checkbox",
      name: "notJackson5",
      message: "Who is NOT apart of the Jackson 5",
      choices: ["Michael", "Randy", "Chamon", "Tito", "Jackie"],
      validate: function(input) {
        // let done = this.async();
        if (input[0] !== "Chamon") {
          // done("That is incorrect, try again");
          return "That is incorrect, try again";
        } else {
          console.log(input);
          // done(true);
          return true;
        }
      }
    }
  ])
  .then(function(answers) {
    console.log(JSON.stringify(answers, null, "  "));
  });