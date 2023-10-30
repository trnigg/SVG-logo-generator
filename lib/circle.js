const Shapes = require('./shapes.js')

class Circle extends Shapes {
    renderShape() {
        // X/Y axis start and size set to equal 300, thereby centering it in the canvas of 300 defined in renderCore() method.
        return `<circle cx="150" cy="100" r="75" fill="${this.shapeColour}"/>`;
    }
}

module.exports = Circle;