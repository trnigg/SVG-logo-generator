const Shapes = require('./shapes.js');

describe('Shapes', () => {

    describe('When a new shape is initialised', () => {
        // Verify that new instance Shapes class can be called.
        it('should be an instance of Shapes class', () => {
            const shape = new Shapes();

            expect(shape).toBeInstanceOf(Shapes);
        });

        // Verify that new instance of Shapes class recieves properties.
        it('sets properties correctly via constructor', () => {
            const chosenText = 'ABC';
            const chosenFont = 'sans-serif';
            const chosenTextColour = 'pink';
            const chosenShape = 'circle';
            const chosenShapeColour = 'blue';
            const shape = new Shapes(chosenText, chosenFont, chosenTextColour, chosenShape, chosenShapeColour);
            
            expect(shape.text).toBe('ABC');
            expect(shape.font).toBe('sans-serif');
            expect(shape.textColour).toBe('pink');
            expect(shape.shape).toBe('circle');
            expect(shape.shapeColour).toBe('blue');
        });
    });

    // Verify that render methods can't be called directly on shape of Shapes.
    describe('When renderCore() method is called', () => {
        it('should throw new error related to renderShape() method', () => {
            const chosenText = 'ABC';
            const chosenFont = 'sans-serif';
            const chosenTextColour = 'pink';
            const chosenShape = 'circle';
            const chosenShapeColour = 'blue';
            const shape = new Shapes(chosenText, chosenFont, chosenTextColour, chosenShape, chosenShapeColour);
            
            const svg = () => shape.renderCore();
            const err = new Error('Child classes must call the renderShape() method');

            expect(svg).toThrowError(err);
        });
    });
        // Verify that getFonts() turns the right array of fonts for each set of fonts
        describe('When getFonts() method is called', () => {
            it('should return the expected array of serif fonts', () => {
                const chosenFont = 'serif';
                const shape = new Shapes('ABC', chosenFont, 'green', 'triangle', 'red');
                

                const expectedFonts = '"Times New Roman", Times, serif';
                const result = shape.getFonts();

                expect(result).toBe(expectedFonts);
            });   

            it('should return the expected array of sans-serif fonts', () => {
                const chosenFont = 'sans-serif';
                const shape = new Shapes('ABC', chosenFont, 'green', 'triangle', 'red');
                

                const expectedFonts = 'Arial, Helvetica, sans-serif';
                const result = shape.getFonts();

                expect(result).toBe(expectedFonts);
            });   

            it('should return the expected array of monospace fonts', () => {
                const chosenFont = 'monospace';
                const shape = new Shapes('ABC', chosenFont, 'green', 'triangle', 'red');
                

                const expectedFonts = '"Courier New", Courier, monospace';
                const result = shape.getFonts();

                expect(result).toBe(expectedFonts);
            });   

            it('should return the expected array of cursive fonts', () => {
                const chosenFont = 'cursive';
                const shape = new Shapes('ABC', chosenFont, 'green', 'triangle', 'red');
                

                const expectedFonts = '"Brush Script MT", cursive';
                const result = shape.getFonts();

                expect(result).toBe(expectedFonts);
            });   

            it('should return the expected array of fantasy fonts', () => {
                const chosenFont = 'fantasy';
                const shape = new Shapes('ABC', chosenFont, 'green', 'triangle', 'red');
                

                const expectedFonts = 'Copperplate, Papyrus, fantasy';
                const result = shape.getFonts();

                expect(result).toBe(expectedFonts);
            });   







        }); 


    





});