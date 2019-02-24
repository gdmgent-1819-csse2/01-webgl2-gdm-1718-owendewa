import Matrix3 from '../../../Library/Math/Matrix3.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix3 class. */
export default class TestMatrix3 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Matrix2')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testMulIdentity()
        this.testRot()
    }
    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Matrix2.add()')
        const a = [
            1, 2, 1,
            3, 4, 3,
            1, 2, 1,
        ]
        const b = [
            1, 2, 1,
            3, 4, 3,
            1, 2, 1,
        ]
        const expected = [
            2,4,2,
            6,8,6,
            2,4,2,
        ]
        const m = new Matrix3(a)
        m.additionM3(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Matrix2.sub()')
        const a = [
            1, 2, 1,
            3, 4, 3,
            1, 2, 1,
        ]
        const b = [
            1, 2, 1,
            3, 4, 3,
            1, 2, 1,
        ]
        const expected = [
            0,0,0,
            0,0,0,
            0,0,0,
        ]
        const m = new Matrix3(a)
        m.subtractionM3(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Matrix2.mul()')
        const a = [
            1,1,1,
            1,1,1,
            1,1,1,
        ]
        const b = [
            2,2,2,
            2,2,2,
            2,2,2,
        ]
        const expected = [
            6,6,6,
            6,6,6,
            6,6,6,
        ]
        const m = new Matrix3(a)
        m.multiplyM3(b)
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