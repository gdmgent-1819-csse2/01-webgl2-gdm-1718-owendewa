export default class Matrix3{

    constructor(){
        this.items = items || [
            a[0]+ b[0], a[1]+ b[1],
            a[2]+ b[2], a[3]+ b[3],
            a[4]+ b[4], a[5]+ b[5],

        ]
    }   
    addidtion(b){
        const a = this.items
        this.items = [
            a[0]+ b[0], a[1]+ b[1],
            a[2]+ b[2], a[3]+ b[3],
            a[4]+ b[4], a[5]+ b[5],
        ]
    }
    subtraction(b){
        const a = this.items
        this.items = [
            a[0] - b[0], a[1] - b[1],
            a[2] - b[2], a[3] - b[3],
            a[4] - b[4], a[5] - b[5],

        ]
    }
    multiply(b){
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