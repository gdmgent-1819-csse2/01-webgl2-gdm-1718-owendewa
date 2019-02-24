import Vector2 from './library/math/Vector2.js';
import Vector3 from './library/math/Vector3.js';
import Vector4 from './library/math/Vector4.js';

import Matrix2 from './library/math/Matrix2.js';
import Matrix3 from './library/math/Matrix3.js';
import Matrix4 from './library/math/Matrix4.js';

export default class Application{
    constructor(){
        const v1 = new Vector2(2,3);
        const v2 = new Vector2(2.5,3.5);
        const v3 = new Vector2(8,5);
        const v4 = new Vector2(3,8);

        const vector3 = new Vector3(2, 1, 5);
        const vector3_2 = new Vector3(3, 4, 2);
        
        const vector4 = new Vector4(2, 1, 5, 3 );
        const vector4_2 = new Vector4(3, 4, 2, 1 );
        
        const matrix2 = Math.matrix([[0,1],[2,3],[4,5]]);
        
        console.log(matrix2);
        console.log(vector3);
        console.log(vector3_2);
        vector3.addition3(vector3_2)
        console.log('Som vector3 en vector3_2: X: ' + vector3.x + ' Y: ' + vector3.y + ' Z: ' + vector3.z);
    }   
}