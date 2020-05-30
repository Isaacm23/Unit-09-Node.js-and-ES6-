// const questions = ["Whats the name of repo?",
// "Whats your Github UserName?"

// ];
function init() {
inquirer
  .prompt([
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
      name: "confirm"
    }
  ])

appendFileAsync("README.md", type + "\n").then(function() {
    readFileAsync("README.md", "utf8").then(function(data) {
      console.log("Saved dad jokes:");
      console.log(data);

    });
})};

      //     fs.writeFile('README.md', function (err) {
//         if (err) throw err;
//         console.log('It\'s saved!');
//       });
      
      
    // fs.appendFileSync("README.md", (name))


    
// }

init();

