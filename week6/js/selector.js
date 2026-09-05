// // First Element Only
// document.querySelector('h1').innerText = 'Hi';

// All element that inside the query
console.log(document.querySelector('h1'));

document.querySelectorAll('h1').forEach(element =>{
    element.innerText = 'Hi';
});

// document.querySelectorAll('h1')[0].innerText = 'Hi';
// document.querySelectorAll('h1')[2].innerText = 'Hi';


// 2. class selector
document.querySelector('.first-div').innerHTML = '<p>hello</p>';

// 3. ID Selector 
document.querySelector('#first-selection').innerHTML = '<div><p>Hello</p></div>'

