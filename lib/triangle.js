const Shapes = require('./shapes.js')

class Triangle extends Shapes {
    renderShape() {
        // Coords are (150, 25)(275, 175)(25, 175), leaving 25px around shape in the canvas of 300x200 defined in renderCore() method.
        return `<polygon points="150, 25 275, 175 25, 175" fill="${this.shapeColour}"/>`;
    }
}

module.exports = Triangle;