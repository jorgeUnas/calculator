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
     newOp == false;
    //resultValue = '';
}


//operands and operator
let newOp = false;
let num1 = '';
let num2 = '';
let resultValue = '';
let operator = '';

function operate(symbol){
    if (operator == ''){   // I need operatior defined to start
        operator = symbol;
        operation()
    }else{
    operation()
    operator = symbol;
    }
    //console.log(operator);
}

function operation(){
    let result = document.querySelector('#result');
   switch (operator) {
       case '+':
           
           if(num2 == ''){
              num2 = num1;
              resultValue = `${num2} +`;
              newOp = false;
               
               console.log('num1:'+ num1);
               console.log('num1:'+ typeof num1);
               console.log('num2:'+ num2);
               console.log('num2:'+ typeof num2);
               console.log(operator);
               result.value = num2;
           }else{
               
               num2 = sum(num1, num2);
               result.value = num2;
               num1 = num2;
               newOp = false;
                console.log('num1:'+ num1);
               console.log('num1:'+ typeof num1);
               console.log('num2:'+ num2);
               console.log('num2:'+ typeof num2);
               console.log(operator);
           }
             break;
       case '-':
           if(num2 == ''){
               num2 = num1;
               result.value = num2;
               newOp = false;
               console.log('num1:'+ num1);
               console.log('num1:'+ typeof num1);
               console.log('num2:'+ num2);
               console.log('num2:'+ typeof num2);
               console.log(operator);
           }else{
               num2 = substr(num1, num2);
                result.value = num2;
                newOp = false;
                console.log('num1:'+ num1);
               console.log('num1:'+ typeof num1);
               console.log('num2:'+ num2);
               console.log('num2:'+ typeof num2);
               console.log(operator);
           }
           break;
        case '*':
           if(num2 == ''){
               num2 = num1;
               newOp = false;
               console.log('num1:'+ num1);
               console.log('num2:'+ num2);
               console.log(operator);
               result.value = `${num2}`;
           }else{
        
               num2 = multiply(num1, num2);
               newOp = false;
               console.log('num1:'+ num1);
               console.log('num2:'+ num2);
               console.log(operator);
                result.value = `${num2}`;
           }
           break;
        case '/':
           if(num2 == ''){
               num2 = num1;
               newOp = false;
               result.value = num2;
           }else{
               num2 = divide(num1, num2);
               newOp = false;
                result.value = num2;
                
               
               
           }
           break;
        
   }

} 


// Display function
 function input(n){
     let result = document.querySelector('#result');
     if(newOp == false ){
          result.value = n;
          
     }else{
         
         result.value += n;
         
     }
     num1 = result.value;
     //num1 = parseFloat(n);
     newOp = true;
     
     console.log(num1);
     console.log(typeof num1);
    
 }
 
 
 
 function equals(){
     operation();
     newOp == false
     if(operator == '+' || operator == '-'){
         num1 = 0;
     } else if(operator == '*' || operator == '/'){
         num1 = 1;
     }
     
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