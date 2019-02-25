import Vector4 from '../../../Library/Math/Vector4.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Vector4 class. */
export default class TestVector4 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Vector4')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testNorm()
    }
    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Vector4.add()')
        const a = new Vector4(.5, 3, 1,2)
        const b = new Vector4(3, 7, 3,2)
        const expected = [3.5, 10, 4,4]

        a.addition4(b)
        const actual = [a.x, a.y, a.z, a.w];
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Vector4.sub()')
        const a = new Vector4(.5, 3, 5,3)
        const b = new Vector4(3, 7, 3,8)
        const expected = [-2.5, -4, 2,-5]

        a.subtraction4(b)
        const actual = [a.x, a.y, a.z, a.w];
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Vector4.mul()')
        const a = new Vector4(.5, .5, 1,2)
        const b = new Vector4(3, 7, 3,5)
        const expected = [1.5, 3.5, 3,10]

        a.scaler4(b)
        const actual = [a.x, a.y, a.z, a.w];
        this.assertIdentical(actual, expected)
    }
    testNorm() {
        console.info('test Vector4.norm()')
        const a = new Vector4(1,3,4,4)
        const expected = [6.48074069840786]
        const actual = [a.norm4()];
        this.assertIdentical(actual, expected)
    }

    
}