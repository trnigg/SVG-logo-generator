const Shapes = require('./shapes.js')

class Square extends Shapes {
    renderShape() {
        // X/Y axis start and size set to equal 300 x 200, thereby centering it in the canvas defined in renderCore() method.
        return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColour}"/>`;
    }
}

module.exports = Square;