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

        const m = new Vector2(a)
        m.addition(b)
        const actual = m.elements
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
        const m = new Vector2(a)
        m.subtraction(b)
        const actual = m.elements
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
        const m = new Vector2(a)
        m.scaler(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }
    testNorm() {
        console.info('test Vector2.scalar()')
        const a = new Vector2(1.5,3.5)
        const expected = [3.80]
        const m = new Vector2(a)
        m.norm(b)
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