const Shapes = require('./shapes.js')

class Circle extends Shapes {
    renderShape() {
        // X/Y axis center set to half of 300 x 200 respectively, thereby centering it in the canvas defined in renderCore() method.
        return `<circle cx="150" cy="100" r="75" fill="${this.shapeColour}"/>`;
    }
}

module.exports = Circle;