import Vector3 from '../../../Library/Math/Vector3.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Vector3 class. */
export default class TestVector3 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Vector3')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testNorm()
        this.testDot()
    }
    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Vector3.add()')
        const a = new Vector3(.5, 3, 1)
        const b = new Vector3(3, 7, 3)
        const expected = [3.5, 10, 4]

        a.addition3(b)
        const actual = [a.x, a.y, a.z];
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Vector3.sub()')
        const a = new Vector3(.5, 3, 5)
        const b = new Vector3(3, 7, 3)
        const expected = [-2.5, -4, 2]

        a.subtraction3(b)
        const actual = [a.x, a.y, a.z];
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Vector3.mul()')
        const a = new Vector3(.5, .5, 1)
        const b = new Vector3(3, 7, 3)
        const expected = [1.5, 3.5, 3]
        
        a.scaler3(b)
        const actual = [a.x, a.y, a.z];
        this.assertIdentical(actual, expected)
    }
    testNorm() {
        console.info('test Vector3.norm()')
        const a = new Vector3(1,3,4)
        const expected = [5.0990195135927845]
        const actual = [a.norm3()];
        this.assertIdentical(actual, expected)
    }
    testDot(){
        console.info('test Vector3.dot()')
        const a = new Vector3(2, 3, 1)
        const b = new Vector3(3, 7, 1)

        const expected = [28]
        const actual = [a.dot3(b)];
        this.assertIdentical(actual, expected)
    }
}