// in ra hoặc kiểm tra giá trị của biến hoặc dùng để debugger
console.log('xin chao javascript');
// crtl + s 

// 1. Variables - khai báo biến trong javascript
// bản javascript version es5 (old)
var name_ = 5; // gia tri la 5
var xinchao;  // gia tri undefined (chua xac dinh)

// es6 bản javascript version es6 (new)
let value = 'xínchao'; // string --- chuỗi
let age = 50;   // number ---- số
let number1 = 1; // 1
let number2 = 2; // 2
let number3, number4 = 5; // number3 là undefined, number4 = 5
let result = number2 + number1; // 1 + 2 = 3 
number1 = 2; // number1 la 2

// const hằng số  
const address = 'hanoi';
// address = 'hanam'; // error

// Data types -- các kiểu dữ liệu trong javascript

// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// bigint for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// symbol for unique identifiers.
// And one non-primitive data type:
// object for more complex data structures.
//** */ number 
let number11 = 4; // number
let type = 'loai1'; // string
let isTrue = false; // boolean true or false đúng và sai
let isNull = null; // kiểu dữ liệu là null - tức là không có gì 
let isUndefined = undefined;  // undefined không xac dinh 
let isAssign; // undefined
let objectTv = {}; // chứa nhiều thứ bên trong 
let arrayTv = []; // array mảng
// kiem tra kiểu dữ liệu
console.log(typeof isTrue);
console.log(typeof objectTv);
console.log(typeof arrayTv);

// Arrays
let listArray = [1, 'name', true, undefined, null, [1, 2], {}];
//index   0   1      2     ....                     6
listArray[0]; // 1
listArray[2]; // true
listArray.length; // 7
console.log(listArray[7]); //
listArray[7] = 5; //
listArray[0] = -1;
// method push
listArray.push(null);

// example
let js = 'JavaScript'; // string
const charsInJavaScript = js.split('');// cat chuoi

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"] // array

// for loop -- vong lăp
// duyệt các phần tử trong mảng array
for (let index = 0; index <= charsInJavaScript.length; index++) {
    console.log(`phan tu thu ${index}` + `la: ` + charsInJavaScript[index]);
}


// for ... of
for (let el of charsInJavaScript) {
    console.log('phan tu thu el la:' + el);
}
// functio phương thức hay gọi là hàm
let so1 = 1;
let so2 = 2;
so1 + so2 - 1; // 3 
// hàm lầ dùng để logic một đoạn code và dùng nó để sủ dụng gọi lại hay dùng lại logic code đó hoặc dùng ở chỗ nào đó cần
function sum(a, b) {
    return a + b;
};

sum(so1, so2); // 3 

function simple(c, d) {
    console.log(c + d);
}

simple(so1, so2); // undefined

const arrow = (param1, param2) => {
    return param1 + param2;
};
arrow(so1, so2);

// callback -- goi lai mot method nao do
const caculator = (param) => {
    console.log('hello' + param);
};

const callAgain = (num, callBack) => {
    // cau lenh dieu kien
    if (typeof num == 'number') {
        callBack(num);
    }
};

callAgain('hello', caculator); // call lai ham caculator ben trong ham callAgain

callAgain(5, caculator); // hello 5
// callback goi lai mot ham ben trong mot ham khac goi la call back khi thoa man dieu kien nao do
// promise or async await 

// method map  -trả về một mảng mới gồm các phần tử có thể giống hoặc được sửa đổi so với các phần tử ban đầu

// old array
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
const newArrChars = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"].map((element, index, array) => {
    return element + 'test';
});
console.log('newArrChars', newArrChars);
// 
// filter === trả về một mảng nhưng nó lọc ra cac phần tử thoả mãn một điều kiẹn nào đó
const animals = ['dog', 'cat', 'birt', 'fish'];
const animalHas3Char = animals.filter((animal, index, array) => animal.length <= 3);
// index  = 0 ; el = dog ; dog.length = 3 <= 3 // true 
// index = 1; el = cat; cat.length = 3 <= 3   // true 
// index = 2; el = birt; birt.length = 4 > 3   // false
// ... 

console.log('animalHas3Char', animalHas3Char); // ['dog', 'cat']
// pop, push, shift, unShift, slice, method, sort, reduce,some...
// what is method pop in array ? can you give me example for this ?
// array là một mảng chưá nhiều phần tử khác nhau hoặc giống nhau được tổng hợp và xắp xếp theo index nằm bên trong []
// object  gôm key và value biểu hiện bởi cặp dấu {} chỉ một đặc điểm của đối tương sự vật nào đó.
const bigcat = {
    name: 'dog',
    age: 1,
    color: 'yellow',
};

bigcat.address = 'meoxinh';
// const cat = {
//     name: 'dog',
//     age: 1,
//     color: 'yellow',
//     address: 'meoxinh'
// };
bigcat.name = 'dig';
delete bigcat.address;

// for ... in 
for (let el in bigcat) {
    console.log('el ' + el + ' value: ' + bigcat[el])
}



