import Vector2 from '../../../Library/Math/Vector2.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Vector2 class. */
export default class TestVector2 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Vector2')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testNorm()
    }
    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Vector2.add()')
        const a = new Vector2(.5, 3)
        const b = new Vector2(3, 7)
        const expected = [3.5, 10]

        
        a.addition(b)
        const actual = [a.x, a.y];
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Vector2.sub()')
        const a = new Vector2(.5, 3)
        const b = new Vector2(3, 7)
        const expected = [-2.5, -4]
       
        a.subtraction(b)
        const actual = [a.x, a.y];
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Vector2.mul()')
        const a = new Vector2(.5, .5)
        const b = new Vector2(3, 7)
        const expected = [1.5, 3.5]

        a.scaler(b)
        const actual = [a.x, a.y];
        this.assertIdentical(actual, expected)
    }
    testNorm() {
        console.info('test Vector2.norm()')
        const a = new Vector2(1.5,3.5)
        const expected = [3.8078865529319543]
        const actual = [a.norm()];
        this.assertIdentical(actual, expected)
    }

}