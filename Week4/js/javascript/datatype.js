let fullName = "Borin";
let fruitName = 'Apple';
let carName = `Testla`;

console.log(fruitName)
console.log(fullName);
console.log(carName);

let greeting = "Hello! I'm";

let studentName = "Borin";
let studentAge = "19";

let student = "Student Name:" + studentName + "," + "Student Age:" + studentAge;
console.log(student);

let student2 = `Student Name: ${studentName}, Student Age: ${studentAge}`;
console.log(student2)

//Number 
let price = 10.50;
let soldItem = 10;
console.log(price*soldItem);

//Boolean
let isPrimaryUser = true;
let isActiveUserr = false;

console.log(isPrimaryUser);
console.log(isActiveUserr);

// Null
const a = null;

//Undefined; 

let b;
console.log(b);
b = 19;
console.log(b);

// Array
// Index the lek 0,1,2,3,... that is call index
let items = [];
let data = [10,2,5];
let data2 = [10,2,['a','b','c']];
let data3 = [10,2,['a',['apple','banana', 'orange'],'c']];

console.log(items);
console.log(data);

console.log(data2);
console.log('first element of array:', data[0]);
console.log('last element of array', data[2]);
console.log('Last Array of the ARRAY NEST: ', data2[2]);
console.log('Last Array Pull: ', data2[2][2]);

console.log(data3)
console.log('3 Array:', data3[2]);
console.log('Inside Array 3:', data3[2][1]);
console.log('Pull from 3 Array:',data3[2][1][0]);

//Object
//Object focus on key, key is the name, code, lesson, roomNumber, that is call key
let classObj = {
    roomNumber: '001',
    name: 'FullStack Development',
    code: 'FD0001',
    lesson: ['HTML', 'CSS', 'Tailwind', 'Javaescript']

};

console.log(classObj);
console.log(classObj.name);
console.log(classObj['name']);

//Type of 
let c= true; 
console.log(typeof(c))