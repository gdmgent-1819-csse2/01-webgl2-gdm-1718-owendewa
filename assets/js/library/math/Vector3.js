export default class Vector3{
    constructor(x, y, z){
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        this.z = Number(z) || 0;
    }

    addition3(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }

    subtraction3(v){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }

    scaler(a){
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
    }

    scalerIn3(a){
        return (this.x *= a.x) + (this.y *= a.y) + (this.z *= a.z);
    }

    norm4(){
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2);
    }

    normalisatie3(){
        const norm = Math.sqrt(this.x**2 + this.y**2 + this.z**2);
        return (this.x/norm + this.y/norm + this.z/norm);
    }
}