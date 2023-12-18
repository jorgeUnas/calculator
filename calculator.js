// Basic math operations

function sum(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
}
function substr(num1, num2){
    return parseFloat(num1) - parseFloat(num2);
}
function multiply(num1, num2){
    return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2){
    return parseFloat(num1) / parseFloat(num2);
}

// ac button
function allClear(){
    const result = document.querySelector('#result');
     result.value = 0;
     num1 = '';
     num2 = '';
}
/* input the numbers 
function input(n){
    display(n)
}
*/

//operands and operator
let num1 = '';
let num2 = '';
let resultValue = '';
let operator = '';



function operate(operator){
    
   switch (operator) {
       case '+':
           const result = document.querySelector('#result');
           if(num2 == ''){
               num2 = num1;
               
               num1 = '';
               result.value = num2;
               
           }else{
           const result = document.querySelector('#result');
           num2 = sum(num1, num2);
           result.value = num2;
           num1 = '';
           
           //num1 = '';
           }
                 
                 
            
           
       case '-':
           return substr(num1, num2);
        case '*':
           return multiply(num1, num2);
        case '/':
           return divide(num1, num2);
   }
} 

// Display function
 function input(n){
     const result = document.querySelector('#result');
     if(result.value == 0){
          result.value = n;
     }else{
         result.value += n;
     }
    
     num1 += parseFloat(n);
    //console.log(inputValue);
 }


// ronded by idiots, mindset, la iliada, the power laws