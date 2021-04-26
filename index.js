const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function newMember() {   
    const promptArray = [
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name.',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email address.',
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter employee office number.',
        },
        {
            type: 'list',
            name: 'title',
            choices: ["Engineer", "Intern"],
            message: 'What is the employees position?',
        },
    ];
}