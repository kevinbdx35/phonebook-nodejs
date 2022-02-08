//Saves names and numbers to a csv file
const csv = require("csv");
const inquirer = require("inquirer");
const fs = require("fs");

// //Open and read csv file
// fs.readFile(
//   "phonebook.csv",
//   {
//     encoding: "utf-8",
//     flag: "a",
//   },
//   (err, data) => {
//     if (err) return console.log("ERROR! 💥");

//     console.log(data);
//   }
// );

//Get name and number & Print to file
const questions = [
  {
    type: "input",
    name: "name",
    message: "What's your name?",
  },
  {
    type: "input",
    name: "phonenumber",
    message: "What's your phonenumber?",
  },
];

inquirer.prompt(questions).then((answers) => {
  const data = `${answers["name"]}, ${
    answers["phonenumber"]
  }, ${Date.now()}: new logs\n`;
  fs.writeFile(
    "phonebook.csv",
    data,
    {
      encoding: "utf-8",
      flag: "a",
    },
    () => {
      fs.close;
      console.log("File written! 🚀");
    }
  );
});
