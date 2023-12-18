// Basic math operations

function sum(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
}
function substr(num1, num2){
    return parseFloat(num2) - parseFloat(num1);
}
function multiply(num1, num2){
    return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2){
    return parseFloat(num2) / parseFloat(num1);
}

// ac button
function allClear(){
    const result = document.querySelector('#result');
     result.value = 0;
     num1 = '';
     num2 = '';
    //resultValue = '';
}


//operands and operator
let num1 = '';
let num2 = '';
let resultValue = '';
let operator = '';

function operate(symbol){
    operator = symbol;
    operation()
    console.log(operator);
}

function operation(){
    let result = document.querySelector('#result');
   switch (operator) {
       case '+':
           
           if(num2 == ''){
               num2 = parseFloat(num1);
               num1 = 0;
               
               console.log('num1:'+ num1);
               console.log('num2:'+ num2);
               result.value = `${num2}+`;
           }else{
               num2 = sum(parseFloat(num1), num2);
               num1 = 0;
                console.log('num1:'+ num1);
                console.log('num2:'+ num2);
                result.value = `${num2}+`;
           }
             break;
       case '-':
           if(num2 == ''){
               num2 = num1;
               num1 = 0;
               result.value = `${num2}-`;
               console.log('num1:'+ num1);
                console.log('num2:'+ num2);
           }else{
               equals();
               num2 = substr(num1, num2);
               num1 = 0;
                result.value = `${num2}-`;
                console.log('num1:'+ num1);
                console.log('num2:'+ num2);
           }
           break;
        case '*':
           if(num2 == ''){
               num2 = num1;
               num1 = 0;
               result.value = `${num2}*`;
           }else{
               num2 = multiply(num1, num2);
               num1 = 0;
                result.value = `${num2}*`;
           }
           break;
        case '/':
           if(num2 == ''){
               num2 = num1;
               num1 = 0;
               result.value = `${num2}/`;
           }else{
               num2 = divide(num1, num2);
               num1 = 0;
                result.value = `${num2}/`;
           }
           break;
   }

} 


// Display function
 function input(n){
     let result = document.querySelector('#result');
     if(result.value == 0){
         
          result.value = n;
     }else{
         
         result.value += n;
         
     }
     num1 += n;
     //num1 = parseFloat(n);
     console.log(num1);
    
 }
 
 
 
 function equals(){
     operation();
     /*const result = document.querySelector('#result');
     resultValue = sum(num1, num2);
     result.value = resultValue;
     num2 = resultValue;
     num1 = 0;
     
     */
    /*let resultante = document.querySelector('#resultante');
    resultante.textContent = resultValue;
    */
 }


// ronded by idiots, mindset, la iliada, the power laws