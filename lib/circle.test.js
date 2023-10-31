const Shapes = require('./shapes.js');
const Circle = require('./circle.js');

describe('Circle', () => {

    describe('When a new circle is initialized', () => {
        // Verify that new instance Circle class can be called.
        it('should be an instance of Circle class', () => {
            const circle = new Circle();
    
            expect(circle).toBeInstanceOf(Circle);
      });

        // Verify it is also an instance of Shapes class
        it('should be an instance/child of Shapes class', () => {
            const circle = new Circle();
    
            expect(circle).toBeInstanceOf(Shapes);
      });

        // Verify that new instance of Circle class recieves expected properties.
        it('sets properties correctly via constructor', () => {
            const chosenText = 'ABC';
            const chosenFont = 'sans-serif';
            const chosenTextColour = 'pink';
            const chosenShape = 'circle';
            const chosenShapeColour = 'blue';
            const circle = new Circle(chosenText, chosenFont, chosenTextColour, chosenShape, chosenShapeColour);
            
            expect(circle.text).toBe('ABC');
            expect(circle.font).toBe('sans-serif');
            expect(circle.textColour).toBe('pink');
            expect(circle.shape).toBe('circle');
            expect(circle.shapeColour).toBe('blue');
        });
    });

    // Verify that renderShape() returns the expected svg for that shape
    describe('When renderShape() method is called', () => {
        it('should generate the expected SVG for a circle', () => {
          const chosenText = 'ZFG';
          const chosenFont = 'monospace';
          const chosenTextColour = 'pink';
          const chosenShape = 'circle';
          const chosenShapeColour = 'red';
          const circle = new Circle(chosenText, chosenFont, chosenTextColour, chosenShape, chosenShapeColour);
    
          const expectedSVG = `<circle cx="150" cy="100" r="75" fill="red"/>`;
          const generatedSVG = circle.renderShape();
    
          expect(generatedSVG).toBe(expectedSVG);
        });
      });
       
     // Verify that getFonts() returns the right array of fonts for each set of fonts
     describe('When getFonts() method is called', () => {
        it('should return the expected array of serif fonts', () => {
            const chosenFont = 'serif';
            const circle = new Circle('ABC', chosenFont, 'green', 'triangle', 'red');

            const expectedFonts = '"Times New Roman", Times, serif';
            const result = circle.getFonts();

            expect(result).toBe(expectedFonts);
        });   

        it('should return the expected array of sans-serif fonts', () => {
            const chosenFont = 'sans-serif';
            const circle = new Circle('ABC', chosenFont, 'green', 'triangle', 'red');
            
            const expectedFonts = 'Arial, Helvetica, sans-serif';
            const result = circle.getFonts();

            expect(result).toBe(expectedFonts);
        });   

        it('should return the expected array of monospace fonts', () => {
            const chosenFont = 'monospace';
            const circle = new Circle('ABC', chosenFont, 'green', 'triangle', 'red');

            const expectedFonts = '"Courier New", Courier, monospace';
            const result = circle.getFonts();

            expect(result).toBe(expectedFonts);
        });   

        it('should return the expected array of cursive fonts', () => {
            const chosenFont = 'cursive';
            const circle = new Circle('ABC', chosenFont, 'green', 'triangle', 'red');

            const expectedFonts = '"Brush Script MT", cursive';
            const result = circle.getFonts();

            expect(result).toBe(expectedFonts);
        });   

        it('should return the expected array of fantasy fonts', () => {
            const chosenFont = 'fantasy';
            const circle = new Circle('ABC', chosenFont, 'green', 'triangle', 'red');

            const expectedFonts = 'Copperplate, Papyrus, fantasy';
            const result = circle.getFonts();

            expect(result).toBe(expectedFonts);
        });   
    }); 

    //  Verify that when the  renderCore() method is called, the compilation of svg is as expected
    describe('When renderCore() method is called', () => {
        it('should generate the expected SVG for logo', () => {
            const chosenText = 'ABC';
            const chosenFont = 'cursive';
            const chosenTextColour = 'purple';
            const chosenShape = 'circle';
            const chosenShapeColour = 'gray';
            const circle = new Circle(chosenText, chosenFont, chosenTextColour, chosenShape, chosenShapeColour);
        
            const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            <circle cx="150" cy="100" r="75" fill="gray"/>
                <text x="50%" y="50%" font-size="60" font-family='"Brush Script MT", cursive' dominant-baseline="middle" text-anchor="middle" fill="purple">ABC</text>
                </svg>`;
            const generatedSVG = circle.renderCore();
            // Post-process to remove the leading whitespaces on lines using Regex - white spaces ruin comparison of svg code and are moot.
            // https://stackoverflow.com/questions/5799801/regular-expression-to-remove-space-in-the-beginning-of-each-line
            const expectedFormattedSVG = expectedSVG.replace(/^ +/gm, '');
            const generatedFormattedSVG = generatedSVG.replace(/^ +/gm, '');

            expect(generatedFormattedSVG).toBe(expectedFormattedSVG);
        });
    });
});
