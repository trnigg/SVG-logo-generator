const fs = require('fs');

const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const cliColours = require('./cliColours.js');

function renderLogo(responses) {
    const chosenShape = responses.chosenShape;

    //Get response to file name and prepare with .svg extension (this will be logo.svg by default)
    let chosenFilename = responses.chosenFilename;
    chosenFilename += '.svg';

    let shape = '';

    // Switch-Cases: https://www.w3schools.com/js/js_switch.asp
    // Depending on which shape is chosen from list, instantiate a new shape from the revelvant class
    switch (chosenShape) {
            case 'square':
                shape = new Square(responses.chosenText, responses.chosenFont, responses.chosenTextColour, responses.chosenShape, responses.chosenShapeColour);
                break;
            case 'triangle':
                shape = new Triangle(responses.chosenText, responses.chosenFont, responses.chosenTextColour, responses.chosenShape, responses.chosenShapeColour);
                break;
            case 'circle':
                shape = new Circle(responses.chosenText, responses.chosenFont, responses.chosenTextColour, responses.chosenShape, responses.chosenShapeColour);
                break;
            default:
                console.error('A shape must be specified.');
                return;
        }

    // Using a ternary operator, IF shape is true (not undefined), svg passes the shape.renderCore() function to the code below, ELSE it assigns "NULL"
    const svg = shape ? shape.renderCore() : null;
    // IF svg is truthy (not null or undefined), attempt to writeFIle, ELSE pass a console error to use
    if (svg) {
        fs.writeFile(chosenFilename, svg, (err) => {
            if (err) {
                console.error(`${cliColours.red}Error saving your SVG file:${cliColours.end}`, err);
              } else {
                console.log(`${cliColours.green}Successfully generated${cliColours.end} ${cliColours.yellow}${chosenFilename}${cliColours.end}.`);
              }
        });
    } else {
        console.error(`${cliColours.red}Failed to render the SVG.${cliColours.end}`);
    }
}

module.exports = { renderLogo };