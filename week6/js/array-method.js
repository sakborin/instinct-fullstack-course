const array = [10,20,50,70,90];
document.getElementById

// Transform original array to new array value 
console.log(array.map((ele) => ele*2));

document.write(array.toString().replaceAll('','<br>'));
document.write('<br>')

function handleFilterScore(){
    const newArray = [...array];
    console.log(array);
    // document.write(array.filter((ele) => ele >=50));
    console.log(newArray.filter((ele) => ele>= 50));

}