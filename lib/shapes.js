class Shapes {
    constructor(chosenText, chosenTextColour, chosenShape, chosenShapeColour) {
        this.text = chosenText;
        this.textColour = chosenTextColour;
        this.shape = chosenShape;
        this.shapeColour = chosenShapeColour;
    }
    renderCore() {
        // Generate an SVG based on Inquirer
        // Return the SVG as a string
        // Solution to center text vertically found here: 
        // https://stackoverflow.com/questions/5546346/how-to-place-and-center-text-in-an-svg-rectangle
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
        ${this.renderShape()}
        <text x="50%" y="50%" font-size="75" dominant-baseline="middle" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>`;
    }
    renderShape() {
        throw new Error ('Child classes must call the renderShape() method');
    }
}

module.exports = Shapes;