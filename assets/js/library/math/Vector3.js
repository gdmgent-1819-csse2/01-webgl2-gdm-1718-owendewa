export default class Vector3{
    /**
     * Represents 3D vector
     * @constructor
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     */
    constructor(x, y, z){
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        this.z = Number(z) || 0;
    }
    /**
     * Addition of two 3d Vectors
     * 
     * @param {Vector3} v second vector
     */
    addition3(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }
    /**
     * Subtraction of two 3d Vectors
     * 
     * @param {Vector3} v second vector
     */
    subtraction3(v){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }
    /**
     * Scaling of two 3d Vectors
     * 
     * @param {Number} a second vector
     */
    scaler3(a){
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
    }

    /**
     * Scaling of two 3d Vectors indent
     * 
     * @param {Number} a second vector
     */
    scalerIn3(a){
        return (this.x *= a.x) + (this.y *= a.y) + (this.z *= a.z);
    }

    /**
     * Norm
     * calculating Length of a 3d vector
    */
    norm3(){
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2);
    }

    /**
     * Normelisation
     * changing the vector to a unitvector
     */
    normalisatie3(){
        const norm = Math.sqrt(this.x**2 + this.y**2 + this.z**2);
        return (this.x/norm + this.y/norm + this.z/norm);
    }
    /**
     * dot
     * calculating dot product of two vectors
     */
    dot3(v){
        return (this.x * v.x) + (this.y * v.y) + (this.z * v.z);
    }
}