const fs = require('fs');
const slugify = require('slugify');
const Square = require('./square.js')

function renderLogo(responses) {
    const chosenShape = responses.chosenShape;
    const chosenFilename = responses.chosenFilename; // TO DO - add a prompt question

    // Use slugify + regex to create a desired file name format (in kebab-case) as found here: 
    //https://stackoverflow.com/questions/8485027/javascript-url-safe-filename-safe-string
    let safeFilename = slugify(chosenFilename, { remove: /"<>#%\{\}\|\\\^~\[\]`;\?:@=&/g });
    safeFilename += '.svg';
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
        fs.writeFile(safeFilename, svg, (err) => {
            if (err) {
                console.error('Error saving your SVG file:', err);
              } else {
                console.log(`Your SVG was successfully saved as ${safeFilename}`);
              }
        });
    } else {
        console.error('Failed to render the SVG.');
    }
}

// Syntax?
module.exports = { renderLogo };