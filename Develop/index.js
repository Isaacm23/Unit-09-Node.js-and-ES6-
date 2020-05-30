const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
// const generationPage = require('generateMarkdown.js')
// const appendFileAsync = util.promisify(fs.appendFile);
// const readFileAsync = util.promisify(fs.readFile);


const questions = [
    {
        type: "input",
        message: "What is the name of your repo?:",
        name: "Repo Name"
      },
      {
        type: "input",
        message: "What is your github username?:",
        name: "username"
      },
      {
        type: "input",
        message:"Write a discription of this repo:",
        name: "description"
      }

];

function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md',data,err =>{
            if (err){
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: "New file created"

             });

            });
        });
}

function init() {
    return inquirer.prompt(questions)
};

init()
// .then(initData =>{
//     return generationPage (initData);
// })
.then(pageMarkdown =>{
return writeToFile(pageMarkdown);

});