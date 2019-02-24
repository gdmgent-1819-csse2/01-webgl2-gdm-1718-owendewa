export default class Vector4{
    constructor(x, y, z, w){
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        this.z = Number(z) || 0;
        this.w = Number(w) || 0;
    }

    addition4(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        this.w += v.w;
    }

    subtraction4(v){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        this.w -= v.w;
    }

    scaler(a){
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
        this.w *= a.w;
    }

    scalerIn4(a){
        return (this.x *= a.x) + (this.y *= a.y) + (this.z *= a.z) + (this.w *= a.w);
    }

    norm4(){
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2 + this.w**2);
    }

    normalisatie4(){
        const norm = Math.sqrt(this.x**2 + this.y**2 + this.z**2 + this.w**2);
        return (this.x/norm) + (this.y/norm) + (this.z/norm) + (this.w/norm); 
    }
}