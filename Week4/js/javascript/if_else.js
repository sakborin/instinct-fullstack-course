// // Global Variable
// // Global Variable, gloobal khos pi local yg can hav vea use everywhere, man douhc local yg use ban ta khang knog function vea te not EVERYWHERE!
// let userAnswer = document.getElementById('answer').value; 
// console.log(userAnswer);

// Local Variable, Local Variable, jong use khang krou function ng ban te, use ban ta ma block ng te, that why it call local variable
function handleSubmitAnswer (){
    let userAnswer = document.getElementById('answer').value; 
    let alertResult = document.getElementById('alert');
    console.log(userAnswer); 

    if(userAnswer.valye === 30){
        alertResult.innerText = 'Your Answer Is Correct'
        alertResult.style.backgroundColor = 'Green';
    } else if(userAnswer.value === '30'){
        alertResult.innerText = 'Your Answer Is Correct'
        alertResult.style.backgroundColor = 'Green';
        alertResult.style.color = 'White';
        alertResult.style.padding = '10px';
        alertResult.style.borderRadius = '10px';
    }else{
        alertResult.innerText = 'Your Answer is Incorrect'
        alertResult.style.backgroundColor = 'Red';
        alertResult.style.color = 'White';
        alertResult.style.padding = '10px';
        alertResult.style.borderRadius = '10px';
    }
    
}
