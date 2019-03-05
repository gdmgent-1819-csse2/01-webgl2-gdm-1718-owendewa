import Matrix4 from '../../../Library/Math/Matrix4.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix4 class. */
export default class TestMatrix4 extends TestMatrix {
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
        console.info('test Matrix4.add()')
        const a = [
            1,1,1,1,
            1,1,1,1,
            1,1,1,1,
            1,1,1,1,
        ]
        const b = [
            1,1,1,1,
            1,1,1,1,
            1,1,1,1,
            1,1,1,1,
        ]
        const expected = [
            2,2,2,2,
            2,2,2,2,
            2,2,2,2,
            2,2,2,2,
        ]
        const m = new Matrix4(a)
        m.addidtionM4(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Matrix4.sub()')
        const a = [
            1,1,1,1,
            1,1,1,1,
            1,1,1,1,
            1,1,1,1,
        ]
        const b = [
            1,1,1,1,
            1,1,1,1,
            1,1,1,1,
            1,1,1,1,
        ]
        const expected = [
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
        ]
        const m = new Matrix4(a)
        m.subtractionM4(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Matrix4.mul()')
        const a = [
            1,1,1,1,
            1,1,1,1,
            1,1,1,1,
            1,1,1,1,
        ]
        const b = [
            2,2,2,2,
            2,2,2,2,
            2,2,2,2,
            2,2,2,2,
        ]
        const expected = [
            8,8,8,8,
            8,8,8,8,
            8,8,8,8,
            8,8,8,8,
        ]
        const m = new Matrix4(a)
        m.multiplyM4(b)
        const actual = m.items
        this.assertIdentical(actual, expected)
    }

    testRot() {
        console.info('test Matrix4.rot()')
        const α = 90
        const a = [
            3, 0, 0, 0,
            1, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
        ]
        const expected = [
            0, -3, 0, 0,
            0, -1, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
        ]
        const m = new Matrix4(a)
        m.RotateM4(α)
        const actual = m.items
        this.assertIdenticalRounded(actual, expected)
    }
      
}