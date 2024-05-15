console.log(`program has started...`)
// const triangle = require('../lib/shapes.js');
// const {Circle, Square, Triangle} = require('./shapes.js')
const Triangle = require('./shape_triangle.js')



describe('Dummy text', () => {
    test('should render SVG for a Triangle element', () => {
triangle = new Triangle()
const expectedSvg = `    <polygon points="300,50 200,400 100,50" fill="bisque" />
`
triangle.setColor("blue");
const actualSvg = triangle.render()
expect(actualSvg).toEqual(expectedSvg);

    });
})




console.log(`program has ended...`)