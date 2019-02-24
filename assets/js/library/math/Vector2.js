export default class Vector2{
    /**
     * Represents a 2d Vector
     * @constructor
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(x,y){
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
    }
    /**
     * Addition of two 2d Vectors
     * 
     * @param {Vector2} v second vector
     */
    addition(v){
        this.x += v.x;
        this.y += v.y;
    }
    /**
     * Subtraction of two 2d Vectors
     * 
     * @param {Vector2} v second vector
     */
    subtraction(v){
        this.x -= v.x;
        this.y -= v.y;
    }
    /**
     * Scaling of two 2d Vectors
     * 
     * @param {Number} a second vector
     */
    scaler(a){
        this.x *= a.x;
        this.y *= a.y;
    }
    /**
     * Norm
     * calculating Length of a 2d vector
     */
    norm(){
        return Math.sqrt(this.x**2 + this.y**2);
    }
   
    /**
     * Dot
     * 
     * @param {Number} v 
     */
    dot(v){
        return this.x * v.x + this.y * v.y;
    }
}