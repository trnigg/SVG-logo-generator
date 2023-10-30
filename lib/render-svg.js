const fs = require('fs');

const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');


function renderLogo(responses) {
    const chosenShape = responses.chosenShape;

    let chosenFilename = responses.chosenFilename;
    chosenFilename += '.svg';

    let shape = '';

// Switch-Cases: https://www.w3schools.com/js/js_switch.asp
    switch (chosenShape) {
            case 'square':
                shape = new Square(responses.chosenText, responses.chosenTextColour, responses.chosenShape, responses.chosenShapeColour);
                break;
            case 'triangle':
                shape = new Triangle(responses.chosenText, responses.chosenTextColour, responses.chosenShape, responses.chosenShapeColour);
                break;
            case 'circle':
                shape = new Circle(responses.chosenText, responses.chosenTextColour, responses.chosenShape, responses.chosenShapeColour);
                break;
            default:
                console.error('A shape must be specified.');
                return;
        }

    const svg = shape ? shape.renderCore() : null;

    // IF svg not undefined, try write 
    if (svg) {
        fs.writeFile(chosenFilename, svg, (err) => {
            if (err) {
                console.error('Error saving your SVG file:', err);
              } else {
                console.log(`Your SVG was successfully saved as ${chosenFilename}`);
              }
        });
    } else {
        console.error('Failed to render the SVG.');
    }
}

// Syntax?
module.exports = { renderLogo };