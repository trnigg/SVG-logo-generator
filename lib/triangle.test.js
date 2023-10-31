const Shapes = require('./shapes.js');
const Triangle = require('./triangle.js');

describe('Triangle', () => {

    describe('When a new triangle is initialized', () => {
        // Verify that new instance Triangle class can be called.
        it('should be an instance of Triangle class', () => {
            const triangle = new Triangle();
    
            expect(triangle).toBeInstanceOf(Triangle);
      });

        // Verify it is also an instance of Shapes class
        it('should be an instance/child of Shapes class', () => {
            const triangle = new Triangle();
    
            expect(triangle).toBeInstanceOf(Shapes);
      });

        // Verify that new instance of Triangle class recieves expected properties.
        it('sets properties correctly via constructor', () => {
            const chosenText = 'ABC';
            const chosenFont = 'sans-serif';
            const chosenTextColour = 'pink';
            const chosenShape = 'triangle';
            const chosenShapeColour = 'blue';
            const triangle = new Triangle(chosenText, chosenFont, chosenTextColour, chosenShape, chosenShapeColour);
            
            expect(triangle.text).toBe('ABC');
            expect(triangle.font).toBe('sans-serif');
            expect(triangle.textColour).toBe('pink');
            expect(triangle.shape).toBe('triangle');
            expect(triangle.shapeColour).toBe('blue');
        });
    });

    // Verify that renderShape() returns the expected svg for that shape
    describe('When renderShape() method is called', () => {
        it('should generate the expected SVG for a triangle', () => {
          const chosenText = 'LMP';
          const chosenFont = 'sans-serif';
          const chosenTextColour = 'pink';
          const chosenShape = 'triangle';
          const chosenShapeColour = 'white';
          const triangle = new Triangle(chosenText, chosenFont, chosenTextColour, chosenShape, chosenShapeColour);
    
          const expectedSVG = `<polygon points="150, 25 275, 175 25, 175" fill="white"/>`;
          const generatedSVG = triangle.renderShape();
    
          expect(generatedSVG).toBe(expectedSVG);
        });
      });
       
     // Verify that getFonts() returns the right array of fonts for each set of fonts
     describe('When getFonts() method is called', () => {
        it('should return the expected array of serif fonts', () => {
            const chosenFont = 'serif';
            const triangle = new Triangle('ABC', chosenFont, 'green', 'triangle', 'red');

            const expectedFonts = '"Times New Roman", Times, serif';
            const result = triangle.getFonts();

            expect(result).toBe(expectedFonts);
        });   

        it('should return the expected array of sans-serif fonts', () => {
            const chosenFont = 'sans-serif';
            const triangle = new Triangle('ABC', chosenFont, 'green', 'triangle', 'red');
            
            const expectedFonts = 'Arial, Helvetica, sans-serif';
            const result = triangle.getFonts();

            expect(result).toBe(expectedFonts);
        });   

        it('should return the expected array of monospace fonts', () => {
            const chosenFont = 'monospace';
            const triangle = new Triangle('ABC', chosenFont, 'green', 'triangle', 'red');

            const expectedFonts = '"Courier New", Courier, monospace';
            const result = triangle.getFonts();

            expect(result).toBe(expectedFonts);
        });   

        it('should return the expected array of cursive fonts', () => {
            const chosenFont = 'cursive';
            const triangle = new Triangle('ABC', chosenFont, 'green', 'triangle', 'red');

            const expectedFonts = '"Brush Script MT", cursive';
            const result = triangle.getFonts();

            expect(result).toBe(expectedFonts);
        });   

        it('should return the expected array of fantasy fonts', () => {
            const chosenFont = 'fantasy';
            const triangle = new Triangle('ABC', chosenFont, 'green', 'triangle', 'red');

            const expectedFonts = 'Copperplate, Papyrus, fantasy';
            const result = triangle.getFonts();

            expect(result).toBe(expectedFonts);
        });   
    }); 

    //  Verify that when the  renderCore() method is called, the compilation of svg is as expected
    describe('When renderCore() method is called', () => {
        it('should generate the expected SVG for logo', () => {
            const chosenText = 'ABC';
            const chosenFont = 'sans-serif';
            const chosenTextColour = 'purple';
            const chosenShape = 'triangle';
            const chosenShapeColour = 'black';
            const triangle = new Triangle(chosenText, chosenFont, chosenTextColour, chosenShape, chosenShapeColour);
        
            const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            <polygon points="150, 25 275, 175 25, 175" fill="black"/>
                <text x="50%" y="50%" font-size="60" font-family='Arial, Helvetica, sans-serif' dominant-baseline="middle" text-anchor="middle" fill="purple">ABC</text>
                </svg>`;
            const generatedSVG = triangle.renderCore();
            // Post-process to remove the leading whitespaces on lines using Regex - white spaces ruin comparison of svg code and are moot.
            // https://stackoverflow.com/questions/5799801/regular-expression-to-remove-space-in-the-beginning-of-each-line
            const expectedFormattedSVG = expectedSVG.replace(/^ +/gm, '');
            const generatedFormattedSVG = generatedSVG.replace(/^ +/gm, '');

            expect(generatedFormattedSVG).toBe(expectedFormattedSVG);
        });
    });
});
