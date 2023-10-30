// MODULES required for this application
const inquirer = require('inquirer');
const slugify = require('slugify');

const cliColours = require('./cliColours.js');
const { renderLogo } = require('./render-svg.js');
 
// Object for console text colours.
class CLI {
    constructor() {

        // Variable to be printed to consoles + object of corresponding question
        this.instructions = 'You will be asked a number of questions to help generate your personalised SVG Logo.\nAll questions must be answered.';

        this.confirmInstructions = {
            type: 'confirm',
            name: 'confirmedInstructions',
            message: 'Please confirm that you understand and wish to continue:',
            default: false, 
        };

        // NOTE re FONT styles: Choices were created based on following guidelines: https://www.w3schools.com/cssref/css_fonts_fallbacks.php
        this.svgQuestions = [
            {
                type: 'input',
                name: 'chosenText',
                message: 'Please enter up to 3 characters/initials for your logo:',
                validate: (chosenText) => (chosenText.length <= 3 ? true : 'Logo initials cannot be longer than 3 characters. Please try again.'),
            },
            {
                type: 'list',
                name: 'chosenFont',
                message: 'Please choose a FONT style for your text from the list below:',
                choices: ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy'],
            },
            {
                type: 'input',
                name: 'chosenTextColour',
                message: 'Please choose a COLOUR for your TEXT:\nColours may be be specified as keywords (e.g. "blue") or as Hex (e.g. "#C0C0C0").',
            },
            {
                type: 'list',
                name: 'chosenShape',
                message: 'Please choose a SHAPE for your logo from the list below:',
                choices: ['circle', 'square', 'triangle'],
            },
            {
                type: 'input',
                name: 'chosenShapeColour',
                message: 'Please choose a background COLOUR for your logo SHAPE:\nColours may be be specified as keywords (e.g. "blue") or as Hex (e.g. "#C0C0C0").',
            },
            {
                type: 'input',
                name: 'chosenFilename',
                message: 'Please provide a name for your logo:\n(This will be used as the filename for your generated SVG)',
                validate: (chosenFilename) => (chosenFilename.trim().length ? true : 'Cannot be left blank. Please enter a name for your SVG file.'),
                default: 'logo',
            },
        ]
    }


    //
    prepareResponses(responses) {
        // Remove the spaces in simple colour names (e.g. "light blue" becomes "lightblue")
        responses.chosenTextColour = responses.chosenTextColour.replace(/\s/g, '');
        responses.chosenShapeColour = responses.chosenShapeColour.replace(/\s/g, '');
        // Use slugify + regex to create a desired file name format (in kebab-case) as found here: 
        //https://stackoverflow.com/questions/8485027/javascript-url-safe-filename-safe-string
        responses.chosenFilename = slugify(responses.chosenFilename, { remove: /[^a-zA-Z0-9\s]/g });
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
                    console.log(`${cliColours.green}Thank you.${cliColours.end}`);
                    inquirer
                        // Ask questions THEN call function with response data
                        .prompt(this.svgQuestions)
                        .then((responses) => {
                            this.prepareResponses(responses);
                            renderLogo(responses);
                        });
                // ELSE Instructions are NOT confirmed/understood, THEN display message and end sequence
            } else {
                    console.log(`${cliColours.red}Ending the SVG Logo Generator.${cliColours.end}\nTo start again, please enter ${cliColours.yellow}node index.js${cliColours.end} in your console.`);
                    return;
                }
            });
    }
}

module.exports = CLI;
