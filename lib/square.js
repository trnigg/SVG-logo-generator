const Shapes = require('./shapes.js')

class Square extends Shapes {
    renderShape() {
        // X/Y axis start and size set to equal 300, thereby centering it in the canvas of 300 defined in renderCore() method.
        return `<rect x="50" y="50" width="200" height="200" fill=${this.shapeColour}/>`;
    }
}

module.exports = Square;