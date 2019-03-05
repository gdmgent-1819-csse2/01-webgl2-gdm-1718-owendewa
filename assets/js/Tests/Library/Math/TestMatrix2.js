import Matrix2 from '../../../Library/Math/Matrix2.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix2 class. */
export default class TestMatrix2 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Matrix2')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testRot()
    }
    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Matrix2.add()')
        const a = [
            1, 2,
            3, 4,
        ]
        const b = [
            2, 3,
            1, 4,
        ]
        const expected = [
            3, 5,
            4, 8,
        ]
        const m = new Matrix2(a)
        m.additionM2(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Matrix2.sub()')
        const a = [
            1, 2,
            3, 4,
        ]
        const b = [
            1, 4,
            7, 6,
        ]
        const expected = [
            0, -2,
            -4, -2,
        ]
        const m = new Matrix2(a)
        m.subtractionM2(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Matrix2.mul()')
        const a = [
            1, 1,
            4, 3,
        ]
        const b = [
            1, 6,
            2, 2,
        ]
        const expected = [
            3, 8,
            10, 30,
        ]
        const m = new Matrix2(a)
        m.multiplyM2(b)
        const actual = m.items
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
            0, -3,
            0, -1,
        ]
        const m = new Matrix2(a)
        m.RotateM2(α)
        const actual = m.items
        this.assertIdenticalRounded(actual, expected)
    }
}