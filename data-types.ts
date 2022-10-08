// * Language: typescript
// * Data Type
// & Number , String , Boolean
function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
// alert(result);

// enum property of user roles as "user" , "admin" , "author"

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}

// & Object
const person: {
  name: string;
  age: number;
  // property of type array which is not required
  hobbies?: string[];
  // property of type tuple
  role?: [number, string];
  // property of array with mixed types
  // mixedArray?: (string | number | object)[];
  mixedArray?: any[];
  // enum property of user roles as "user" , "admin" , "author"
  userRole?: Role;
} = {
  name: 'Maximilian',
  age: 30,
  role: [2, 'author'],
  mixedArray: [
    'hello',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    {
      name: 'Maximilian',
    },
  ],
  userRole: Role.ADMIN,
};

// console.log(person);
