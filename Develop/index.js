const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generationPage = require("./generateMarkdown.js");
// const appendFileAsync = util.promisify(fs.appendFile);
// const readFileAsync = util.promisify(fs.readFile);

const questions = [
  {
    type: "input",
    message: "What is the name of your Project?:",
    name: "repoName",
  },
  {
    type: "input",
    message: "What is your github username?:",
    name: "username",
  },
  {
    type: "input",
    message: "Write a description of this project:",
    name: "description",
  },
  {
    type: "input",
    message: "Any badges you would like to add?",
    name: "badges",
  },
  {
    type: "input",
    message: "Add visuals here using ![]() format",
    name: "visuals",
  },
  {
    type: "input",
    message: "Write installation process if any",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage: what can this be used for?",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Support: where can people go to get help with any issue for this application",
    name: "support",
  },
  {
    type: "input",
    message: "Roadmap: what are your future plans for this application?",
    name: "roadmap",
  },
  {
    type: "input",
    message: "Authors and acknowledgement?",
    name: "authors",
  },
  {
    type: "input",
    message: "License: How is it licensed",
    name: "license",
  },
  {
    type: "input",
    message: "Project Status?",
    name: "status",
  },
];


inquirer.prompt(questions).then((data) => {
  fs.appendFileSync("README.md", "# " + data.repoName + "\n", function (err) {
    if (err) return console.log(err);
  });

  fs.appendFileSync(
    "README.md","# GITHUB USERNAME " +"\n" + data.username + "\n",
    function (err) {
      if (err) return console.log(err);
    });
  fs.appendFileSync("README.md", "# DESCRIPTION" +"\n" + data.description + "\n",
    function (err) {
      if (err) return console.log(err);
    });

  fs.appendFileSync("README.md", "# BADGES "+"\n" + data.badges + "\n", function (
    err
  ) {
    if (err) return console.log(err);
  });
  fs.appendFileSync("README.md", "# VISUALS " +"\n" + + data.visuals + "\n", function (
    err
  ) {
    if (err) return console.log(err);
  });
fs.appendFileSync("README.md", "# INSTALLATION " +"\n" + data.installation + "\n", function (
  err
) {
  if (err) return console.log(err);
});
fs.appendFileSync("README.md", "# USAGE " +"\n" + data.usage + "\n", function (
  err
) {
  if (err) return console.log(err);
});
fs.appendFileSync("README.md", "# SUPPORT " +"\n" + data.support + "\n", function (
  err
) {
  if (err) return console.log(err);
});
fs.appendFileSync("README.md", "# ROADMAP " +"\n" + data.roadmap + "\n", function (
  err
) {
  if (err) return console.log(err);
});
fs.appendFileSync("README.md", "# AUTHORS AND ACKNOWLEDGMENT " +"\n" + data.authors + "\n", function (
  err
) {
  if (err) return console.log(err);
});
fs.appendFileSync("README.md", "# LICENSE " +"\n" + data.license + "\n", function (
  err
) {
  if (err) return console.log(err);
});
fs.appendFileSync("README.md", "# PROJECT STATUS " +"\n" + data.status + "\n", function (
  err
) {
  if (err) return console.log(err);
});

});

// .then(data =>{
//     return generationPage (data);
// })
// generateMarkDown =>{
// return create(generateMarkdown);

// };