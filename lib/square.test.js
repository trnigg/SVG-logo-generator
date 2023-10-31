const Shapes = require('./shapes.js');
const Square = require('./square.js');

describe('Square', () => {

    describe('When a new square is initialized', () => {
        // Verify that new instance Square class can be called.
        it('should be an instance of Square class', () => {
            const square = new Square();
    
            expect(square).toBeInstanceOf(Square);
      });

        // Verify it is also an instance of Shapes class
        it('should be an instance/child of Shapes class', () => {
            const square = new Square();
    
            expect(square).toBeInstanceOf(Shapes);
      });

        // Verify that new instance of Square class recieves expected properties.
        it('sets properties correctly via constructor', () => {
            const chosenText = 'ABC';
            const chosenFont = 'sans-serif';
            const chosenTextColour = 'pink';
            const chosenShape = 'circle';
            const chosenShapeColour = 'blue';
            const square = new Square(chosenText, chosenFont, chosenTextColour, chosenShape, chosenShapeColour);
            
            expect(square.text).toBe('ABC');
            expect(square.font).toBe('sans-serif');
            expect(square.textColour).toBe('pink');
            expect(square.shape).toBe('circle');
            expect(square.shapeColour).toBe('blue');
        });
    });

    // Verify that renderShape() returns the expected svg for that shape
    describe('When renderShape() method is called', () => {
        it('should generate the expected SVG for a square', () => {
          const chosenText = 'ABC';
          const chosenFont = 'serif';
          const chosenTextColour = 'blue';
          const chosenShape = 'square';
          const chosenShapeColour = 'green';
          const square = new Square(chosenText, chosenFont, chosenTextColour, chosenShape, chosenShapeColour);
    
          const expectedSVG = `<rect x="75" y="25" width="150" height="150" fill="green"/>`;
          const generatedSVG = square.renderShape();
    
          expect(generatedSVG).toBe(expectedSVG);
        });
      });
       
     // Verify that getFonts() returns the right array of fonts for each set of fonts
     describe('When getFonts() method is called', () => {
        it('should return the expected array of serif fonts', () => {
            const chosenFont = 'serif';
            const square = new Square('ABC', chosenFont, 'green', 'triangle', 'red');

            const expectedFonts = '"Times New Roman", Times, serif';
            const result = square.getFonts();

            expect(result).toBe(expectedFonts);
        });   

        it('should return the expected array of sans-serif fonts', () => {
            const chosenFont = 'sans-serif';
            const square = new Square('ABC', chosenFont, 'green', 'triangle', 'red');
            
            const expectedFonts = 'Arial, Helvetica, sans-serif';
            const result = square.getFonts();

            expect(result).toBe(expectedFonts);
        });   

        it('should return the expected array of monospace fonts', () => {
            const chosenFont = 'monospace';
            const square = new Square('ABC', chosenFont, 'green', 'triangle', 'red');

            const expectedFonts = '"Courier New", Courier, monospace';
            const result = square.getFonts();

            expect(result).toBe(expectedFonts);
        });   

        it('should return the expected array of cursive fonts', () => {
            const chosenFont = 'cursive';
            const square = new Square('ABC', chosenFont, 'green', 'triangle', 'red');

            const expectedFonts = '"Brush Script MT", cursive';
            const result = square.getFonts();

            expect(result).toBe(expectedFonts);
        });   

        it('should return the expected array of fantasy fonts', () => {
            const chosenFont = 'fantasy';
            const square = new Square('ABC', chosenFont, 'green', 'triangle', 'red');

            const expectedFonts = 'Copperplate, Papyrus, fantasy';
            const result = square.getFonts();

            expect(result).toBe(expectedFonts);
        });   
    }); 

    //  Verify that when the  renderCore() method is called, the compilation of svg is as expected
    describe('When renderCore() method is called', () => {
        it('should generate the expected SVG for logo', () => {
            const chosenText = 'ABC';
            const chosenFont = 'fantasy';
            const chosenTextColour = 'blue';
            const chosenShape = 'square';
            const chosenShapeColour = 'green';
            const square = new Square(chosenText, chosenFont, chosenTextColour, chosenShape, chosenShapeColour);
        
            const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <rect x="75" y="25" width="150" height="150" fill="green"/>
                <text x="50%" y="50%" font-size="60" font-family="Copperplate, Papyrus, fantasy" dominant-baseline="middle" text-anchor="middle" fill="blue">ABC</text>
                </svg>`;
            const generatedSVG = square.renderCore();
            // Post-process to remove the leading whitespaces on lines using Regex - white spaces ruin comparison of svg code and are moot.
            // https://stackoverflow.com/questions/5799801/regular-expression-to-remove-space-in-the-beginning-of-each-line
            const expectedFormattedSVG = expectedSVG.replace(/^ +/gm, '');
            const generatedFormattedSVG = generatedSVG.replace(/^ +/gm, '');

        
            expect(generatedFormattedSVG).toBe(expectedFormattedSVG);
        });
    });
});
