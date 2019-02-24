export default class Vector2{
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(x,y){
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
    }
    /**
     * Addition
     * 
     * @param {Vector2} v 
     */
    addition(v){
        this.x += v.x;
        this.y += v.y;
    }
    /**
     * Subtraction
     * 
     * @param {Vector2} v 
     */
    subtraction(v){
        this.x -= v.x;
        this.y -= v.y;
    }
    /**
     * Scaling
     * 
     * @param {Number} a 
     */
    scaler(a){
        this.x *= a.x;
        this.y *= a.y;
    }
    /**
     * Norm
     * calculating Length of vector
     * 
     * @param {Number} a 
     */
    norm(){
        return Math.sqrt(this.x**2 + this.y**2);
    }
    /**
     * 
     */
    dot(v){
        return this.x * v.x + this.y * v.y;
    }
}