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
        const v3 = new Vector2(4,6);
        const v4 = new Vector2(3,7);

        console.log('-----Testing 2D Vectors-----');
        console.log('-----Addition-----');
        console.log('Vector1 ' , v1 , 'and Vector2' ,v2);
        v1.addition(v2);
        console.log('Vector1 and Vector2 become', v1);
        console.log('-----Subtraction-----');
        console.log('Vector1 ' , v1 , 'and Vector2' ,v3);
        v1.subtraction(v3);
        console.log('Vector1 and Vector2 become', v1);
        console.log('-----Scaling-----');
        console.log('Vector1 ' , v1 , 'and Vector2' ,v4);
        v1.scaler(v4);
        console.log('Vector1 and Vector2 become', v1);
        console.log('-----Norm-----');
        console.log('Vector1 ' , v1);
        console.log('The length of Vector1 is' , v1.norm());
        
        const matrix2 = new Matrix2([2,2,3,2]);
        const matrix2_1 = new Matrix2([2,2,3,2]);
        const matrix2_2 = new Matrix2([7,4,0,3]);
        
        const matrix2_3 = new Matrix2([2,0,4,9]);
        const matrix2_3_1 = new Matrix2([2,0,4,9]);
        const matrix2_4 = new Matrix2([1,5,6,2]);

        const matrix2_5 = new Matrix2([2,0,4,9]);
        const matrix2_5_1 = new Matrix2([2,0,4,9]);
        const matrix2_6 = new Matrix2([1,5,6,2]);


        console.log('-----Testing 2D Matrices-----');
        console.log('-----Addition-----');
        console.log('Matrix1 ' , matrix2 , 'and Matrix2' ,matrix2_2);
        matrix2_1.addidtionM2(matrix2_2.items);
        console.log('Matrix1 and Matrix2 become',matrix2_1);
        console.log('-----Subtraction-----');
        console.log('Matrix1 ' , matrix2_3 , 'and Matrix2' ,matrix2_4);
        matrix2_3_1.subtractionM2(matrix2_4.items);
        console.log('Matrix1 and Matrix2 become',matrix2_3_1);
        console.log('-----Multiply-----');
        console.log('Matrix1 ' , matrix2_5 , 'and Matrix2' ,matrix2_6);
        matrix2_5_1.multiplyM2(matrix2_6.items);
        console.log('Matrix1 and Matrix2 become',matrix2_5_1);
    }   
}