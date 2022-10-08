// * Language: typescript
// * Data Type
// & Number , String , Boolean
function addInputs(
  n1: number | string,
  n2: number | string,
  result: 'as-number' | 'as-text',
  // optional paramater
  optional?: string
) {
  if (result === 'as-number') {
    return +n1 + +n2;
  } else {
    return n1.toString() + n2.toString();
  }
}

const abc = 5;
const xyz = 2.8;

const another_result = addInputs(abc, xyz, 'as-number');
// alert(result);
