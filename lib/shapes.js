class Shapes {
    constructor(chosenText, chosenTextColour, chosenShape, chosenShapeColour) {
        this.text = chosenText;
        this.textColour = chosenTextColour;
        this.shape = chosenShape;
        this.shapeColour = chosenShapeColour;
    }

    renderCore() {
        // Implement rendering logic for the base Shapes class
        // Generate an SVG based on chosenText, chosenTextColour, chosenShape, and chosenShapeColour
        // Return the SVG as a string
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
        ${this.renderShape()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>`;
    }

    renderShape() {
        throw new Error ('Child classes must call the renderShape() method');
    }

}

module.exports = Shapes;