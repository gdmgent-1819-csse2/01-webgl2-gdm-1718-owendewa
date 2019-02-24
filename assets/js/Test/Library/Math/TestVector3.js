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
    }
    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Vector3.add()')
        const a = new Vector3(.5, 3, 1)
        const b = new Vector3(3, 7, 3)
        const expected = [3.5, 10, 4]

        const m = new Vector3(a)
        m.addition3(b)
        const actual = m.elements
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
        const m = new Vector3(a)
        m.subtraction3(b)
        const actual = m.elements
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
        const m = new Vector3(a)
        m.scaler3(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }
    testNorm() {
        console.info('test Vector3.scalar()')
        const a = new Vector3(1,3,4)
        const expected = [5.1]
        const m = new Vector3(a)
        m.norm3(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method with an identity matrix.
   
    testMulIdentity() {
        console.info('test Matrix2.mul() by identity matrix')
        const a = [
            1, 2,
            3, 4,
        ]
        const i = [
            1, 0,
            0, 1,
        ]
        const expected = [
            1, 2,
            3, 4,
        ]
        const m = new Matrix2(a)
        m.mul(i)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    testRot() {
        console.info('test Matrix2.rot()')
        const α = 90
        const a = [
            3, 0,
            1, 0,
        ]
        const expected = [
            -1, 0,
            3, 0,
        ]
        const m = new Matrix2(a)
        m.rot(α)
        const actual = m.elements
        this.assertIdenticalRounded(actual, expected)
    }
      */
}