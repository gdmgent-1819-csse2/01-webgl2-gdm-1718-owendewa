export default class Matrix3{
     /**
     * Represents 3D matrix
     * @constructor
     * @param {*} items the items for this matrix
     */
    constructor(items){
        this.items = items || [
            a[0], a[1], a[2],
            a[3], a[4], a[5], 
            a[6], a[7], a[8],
        ]
    }   
    /**
     * Addition of two 3D matrixes (a and b)
     * @param {Matrix3} b The second matrix
     */ 
    addidtionM3(b){
        const a = this.items
        this.items = [
            (a[0] + b[0]), (a[1] + b[1]), (a[2] + b[2]),
            (a[3] + b[3]), (a[4] + b[4]), (a[5] + b[5]),
            (a[6] + b[6]), (a[7] + b[7]), (a[8] + b[8]),
        ]
    }
    /**
     * Subraction of two 3D matrixes (a and b)
     * @param {Matrix3} b The second matrix
     */
    subtractionM3(b){
        const a = this.items
        this.items = [
            (a[0] - b[0]), (a[1] - b[1]), (a[2] - b[2]), 
            (a[3] - b[3]), (a[4] - b[4]), (a[5] - b[5]),
            (a[6] - b[6]), (a[7] - b[7]), (a[8] - b[8]),
        ]
    }
     /**
     * Multiplying of two 3D matrixes (a and b)
     * @param {Matrix3} b The second matrix
     */ 
    multiplyM3(b){
        const a = this.items
        const c = []
        this.items = [
            c[0] = a[0] * b[0] + a[1] * b[3] + a[2] * b[6],
            c[1] = a[0] * b[1] + a[1] * b[4] + a[2] * b[7],
            c[2] = a[0] * b[2] + a[1] * b[5] + a[2] * b[8],
           
            c[3] = a[3] * b[0] + a[4] * b[3] + a[5] * b[6],
            c[4] = a[3] * b[1] + a[4] * b[4] + a[5] * b[7],
            c[5] = a[3] * b[2] + a[4] * b[5] + a[5] * b[8],

            c[6] = a[6] * b[0] + a[7] * b[3] + a[8] * b[6],
            c[7] = a[6] * b[1] + a[7] * b[4] + a[8] * b[7],
            c[8] = a[6] * b[2] + a[7] * b[5] + a[8] * b[8],

        ]
    }
}