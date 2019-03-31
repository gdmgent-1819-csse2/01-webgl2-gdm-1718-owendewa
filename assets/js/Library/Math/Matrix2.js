export default class Matrix2{
    /**
     * Represents 2D matrix
     * @constructor
     * @param {*} items the items for this matrix
     */
    constructor(items){
        this.items = items || [
            a[0], a[1],
            a[2], a[3],
        ]
    }  
    /**
     * Addition of two 2D matrixes (a and b)
     * @param {Matrix2} b The second matrix
     */ 
    additionM2(b){
        const a = this.items
        this.items = [
            a[0] + b[0], a[1] + b[1],
            a[2] + b[2], a[3] + b[3],
        ]
    }
     /**
     * Subraction of two 2D matrixes (a and b)
     * @param {Matrix2} b The second matrix
     */ 
    subtractionM2(b){
        const a = this.items
        this.items = [
            a[0] - b[0], a[1] - b[1],
            a[2] - b[2], a[3] - b[3],
        ]
    }
     /**
     * Multiplying of two 2D matrixes (a and b)
     * @param {Matrix2} b The second matrix
     */ 
    multiplyM2(b){
        const a = this.items
        const c = []
        this.items = [
            c[0] = a[0] * b[0] + a[1] * b[2],
            c[1] = a[0] * b[1] + a[1] * b[3],
            c[2] = a[2] * b[0] + a[3] * b[2],
            c[3] = a[2] * b[1] + a[3] * b[3],
            this.items = c,
        ]
    }
    /**
     * Rotating 2D matrix
     * @param {Number} d 
     */
    RotateM2(d){
        d *= Math.PI / 180;
        const cos = Math.cos(d);
        const sin = Math.sin(d);
        const result = [
            cos, -sin,
            sin, cos,
        ]
        this.multiplyM2(result);
    }
}