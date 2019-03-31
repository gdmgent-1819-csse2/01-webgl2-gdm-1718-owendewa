export default class Vector4{
    /**
     * Represents a 4D vector
     * @constructor
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @param {Number} w 
     */
    constructor(x, y, z, w){
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        this.z = Number(z) || 0;
        this.w = Number(w) || 0;
    }
    /**
     * Addition of two 4d Vectors
     * 
     * @param {Vector3} v second vector
     */
    addition4(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        this.w += v.w;
    }
    /**
     * Subtraction of two 4d Vectors
     * 
     * @param {Vector3} v second vector
     */
    subtraction4(v){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        this.w -= v.w;
    }
    /**
     * Scaling of two 4d Vectors
     * 
     * @param {Number} a second vector
     */
    scaler4(a){
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
        this.w *= a.w;
    }
     /**
     * Scaling of two 4d Vectors indent
     * 
     * @param {Number} a second vector
     */
    scalerIn4(a){
        return (this.x *= a.x) + (this.y *= a.y) + (this.z *= a.z) + (this.w *= a.w);
    }
     /**
     * Norm
     * calculating Length of a 4d vector
    */
    norm4(){
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2 + this.w**2);
    }
    /**
     * Normelisation
     * changing the 4d vector to a unitvector
     */
    normalisatie4(){
        const norm = Math.sqrt(this.x**2 + this.y**2 + this.z**2 + this.w**2);
        return (this.x/norm) + (this.y/norm) + (this.z/norm) + (this.w/norm); 
    }
    /**
     * dot
     * calculating dot product of two 4d vectors
     */
    dot4(v){
        return (this.x * v.x) + (this.y * v.y) + (this.z * v.z) + (this.w * v.w);
    }
}