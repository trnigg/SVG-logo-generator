// MODULES required for this application
const inquirer = require('inquirer');
 
// Object for console text colours.
class CLI {
    constructor() {
        this.cliColours = {
            red: '\x1b[31m',
            green: '\x1b[32m',
            yellow: '\x1b[33m',
            grey: '\x1b[90m',
            end: '\x1b[0m',
        };

        // Variable to be printed to consoles + object of corresponding question
        this.instructions = 'You will be asked a number of questions to help generate your personalised SVG Logo.\nAll questions must be answered.';

        this.confirmInstructions = {
            type: 'confirm',
            name: 'confirmedInstructions',
            message: 'Please confirm that you understand and wish to continue:',
            default: false, 
        };

        this.svgQuestions = [
            {
                type: 'input',
                name: 'chosenText',
                message: 'Please enter up to 3 characters/initials for your logo:',
                validate: (chosenText) => (chosenText.length <= 3 ? true : 'Logo initials cannot be longer than 3 characters. Please try again.'),
            },
            {
                type: 'input',
                name: 'chosenTextColour',
                message: 'Please choose a colour for your text:\nColours may be be specified as keywords (e.g. "blue") or a hex. number (e.g. "#cccccc"',
            },
            {
                type: 'list',
                name: 'chosenShape',
                message: 'Please choose a shape for your logo from the list below:',
                choices: ['circle', 'square', 'triangle'],
            },
            {
                type: 'input',
                name: 'chosenShapeColour',
                message: 'Please choose a background colour for your logo shape:\nColours may be be specified as keywords (e.g. "blue") or a hex. number (e.g. "#cccccc"',
            },
        ]
    }
    // FUNCTION To ask the questions above via the console using Inquirer
    // TODO in future: seperate Confirm event and Question event into seperate functions
    run() {
        console.log(this.instructions);
        inquirer
            // Nested Promise first asks uses to confirm instructions
            .prompt(this.confirmInstructions)
            .then((confirmResponse) => {
                // IF Instructions are confirmed/understood, THEN display message and begin asking Questions defined above
                if (confirmResponse.confirmedInstructions) {
                    console.log(`${this.cliColours.green}Thank you.${this.cliColours.end}`);
                    inquirer
                        // Ask questions THEN call function with response data
                        .prompt(this.svgQuestions)
                        .then((responses) => console.log(responses));
                // ELSE Instructions are NOT confirmed/understood, THEN display message and end sequence
            } else {
                    console.log(`${this.cliColours.red}Ending the SVG Logo Generator.${this.cliColours.end}\nTo start again, please enter ${this.cliColours.yellow}node index.js${this.cliColours.end} in your console.`);
                    return;
                }
            });
    }
}

module.exports = CLI;
