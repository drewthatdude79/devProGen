// Setting up requires
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const path = require("path");
const axios = require("axios");
// const writeFileAsync = util.promisify(fs.writeFile);

function userInput() {
    return inquirer.prompt([
        {
            type: "input",
            name: "userName",
            message: "User name?"
        },
        {
            type: "input",
            name: "color",
            message: "What is your favorite color?",
            choices: [
                {
                    name: "Red",
                    value: "red"
                },
                {
                    name: "Blue",
                    value: "blue"
                },
                {
                    name: "Green",
                    value: "green"
                },
                {
                    name: "Purple",
                    value: "purple"
                },
                {
                    name: "Orange",
                    value: "orange"
                },
            ]
        }
    ])
    // .then(answers => {
    //     console.log("answer: ", answer.input);
    // })
}

async function generator() {
    const { userName, color } = await userInput();
    console.log(userName, color);
}

generator();

// function writeToFile(filename, answers) {
//     return fs.writeFileSync(path.join(process.cwd(), filename), answers);
// }

// function api(answers) {
//     const queryUrl = `https://api.github.com/users/${answers.userName}/repos?per_page=100`;

//     axios
//         .get(queryUrl)
//         .then(function (res) {

//             generateProfile(res);
//         }).then(({ data }) => {
//             writeToFile("profile.pdf", generateProfile({ ...data }))

//         })

//     function generateProfile(res, answers) {
//         return `<img src="${res.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />
//         Followers

//     ${res.followers_url}
//     <background-color${answers.color}>
//     `
//     }
// };

    // HTML section

    function generateHTML(answers) {
        return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
      </head>
      <body>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Hi! My name is ${answers.name}</h1>
          <p class="lead">I am from ${answers.location}.</p>
          <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
          <ul class="list-group">
            <li class="list-group-item">My GitHub username is ${answers.github}</li>
            <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
          </ul>
        </div>
      </div>
      </body>
      </html>`;
      }

      generateHTML();