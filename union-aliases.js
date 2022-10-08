// * Language: typescript
// * Data Type
// & Number , String , Boolean
function addInputs(n1, n2, result, 
// optional paramater
optional) {
    if (result === 'as-number') {
        return +n1 + +n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
var abc = 5;
var xyz = 2.8;
var another_result = addInputs(abc, xyz, 'as-number');
// alert(result);
