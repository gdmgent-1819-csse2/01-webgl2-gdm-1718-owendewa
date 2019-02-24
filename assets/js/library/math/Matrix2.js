export default class Matrix2{
    constructor(items){
        this.items = items || [
            a[0], a[1],
            a[2], a[3],
        ]
    }   
    addidtionM2(b){
        const a = this.items
        this.items = [
            a[0] + b[0], a[1] + b[1],
            a[2] + b[2], a[3] + b[3],
        ]
    }
    subtractionM2(b){
        const a = this.items
        this.items = [
            a[0] - b[0], a[1] - b[1],
            a[2] - b[2], a[3] - b[3],
        ]
    }
    multiplyM2(b){
        const a = this.items
        const c = []
        this.items = [
            c[0] = a[0] * b[0] + a[2] * b[3],
            c[1] = a[0] * b[1] + a[1] * b[3],
            c[2] = a[2] * b[0] + a[3] * b[1],
            c[3] = a[2] * b[1] + a[3] - b[3],
            this.items = c,
        ]
    }
}