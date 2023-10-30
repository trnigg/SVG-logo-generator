const Shapes = require('./shapes.js')

class Triangle extends Shapes {
    renderShape() {
        // X/Y axis start and size set to equal 300, thereby centering it in the canvas of 300 defined in renderCore() method.
        return `<polygon points="150, 50 250, 250 50, 250" fill="${this.shapeColour}"/>`;
    }
}

module.exports = Triangle;