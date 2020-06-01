// Setting up requires
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const path = require("path");
const axios = require("axios");

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

function writeToFile(filename, answers) {
    return fs.writeFileSync(path.join(process.cwd(), filename), answers);
}

function api(answers) {
    const queryUrl = `https://api.github.com/users/${answers.userName}/repos?per_page=100`;

    axios
        .get(queryUrl)
        .then(function (res) {

            generateProfile(res);
        }).then(({ data }) => {
            writeToFile("profile.pdf", generateProfile({ ...data }))

        })

    function generateProfile(res, answers) {
        return `<img src="${res.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />
        Followers

    ${res.followers_url}
    <background-color${answers.color}>
    `
    }
};
