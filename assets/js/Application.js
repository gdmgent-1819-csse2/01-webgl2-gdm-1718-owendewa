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
        
        const matrix2 = new Matrix2([2,2,3,2]);
        const matrix2_2 = new Matrix2([2,2,3,2]);

        const matrix3 = new Matrix3([2,2,3,2,2,2,3,2,2]);
        const matrix3_2 = new Matrix3([2,2,3,2,2,2,3,2,2]);

        const matrix4 = new Matrix4([2,2,3,2,2,2,3,2,2,2,3,2,2,2,3,2])
        const matrix4_2 = new Matrix4([2,2,3,2,2,2,3,2,2,2,3,2,2,2,3,2])

        
        console.log(matrix4);
        console.log(matrix4_2);
        matrix4.multiplyM4(matrix4_2.items);
        console.log(matrix4);

        console.log(matrix3);
        console.log(matrix3_2);
        matrix3.multiplyM3(matrix3_2.items);
        console.log(matrix3);
       
        console.log(vector3);
        console.log(vector3_2);
        vector3.addition3(vector3_2)
        console.log('Som vector3 en vector3_2: X: ' + vector3.x + ' Y: ' + vector3.y + ' Z: ' + vector3.z);

    }   
}