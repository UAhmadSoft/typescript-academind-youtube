// * Language: typescript
// * Data Type
// & Number , String , Boolean
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
// alert(result);
// enum property of user roles as "user" , "admin" , "author"
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
// & Object
var person = {
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
            name: 'Maximilian'
        },
    ],
    userRole: Role.ADMIN
};
// console.log(person);
