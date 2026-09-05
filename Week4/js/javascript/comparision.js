const username = 'test';
const password = 12345;

console.log(username === 'test');
console.log(password === '12345');
console.log(password == '12345');

//checkk not equal value (!= and !==)

const subjectStatus = true; 
const isPassed = true;
const isPassed2 = 'true';
console.log(subjectStatus !== isPassed);
console.log(subjectStatus != isPassed2);

let uppercase = 'A';
let lowercase = 'a';
console.log(uppercase !== lowercase);

let sellPrice = '10';
let discountPrice = 10;
console.log(sellPrice !== discountPrice);
console.log(sellPrice != discountPrice);

// Greater then 
let AB = 10;
let AC = 20; 
console.log(AB > AC);
console.log(AB < AC);
console.log(AC >= AB);

// Logical & Condition Statement
// And (&&)

let loginInfo = {username: "abc", password: 123, isActive: false}; 

if(loginInfo.username === "abc" && loginInfo.password === 123){
    console.log('Login Successfully');
}else{
    console.log('Invalid username or password')
}

if(loginInfo.username === 'abc' && (loginInfo.password= 123) || (loginInfo.password === '123')){
    console.log('Login Successful')
}else{
    console.log('Invalid Username or Password')
}

// Check user status if not active 

if(loginInfo.username === 'abc' && (loginInfo.password= 123) || (loginInfo.password === '123')){
    if(!loginInfo.isActive){
        console.log('Your User is Inactive');
    }else{
    console.log('Login Successfully');
    }
}else{
    console.log('Invalid Username or passwaord');
}


