var operandOne = '';
var operandTwo = '';
var operator='';
var cal_result = '';
// var checkOpOne = false;
// var checkOpTwo = false;
var isOperaterSet = false;
function button(num){
    debugger
    var text = document.getElementById(num).innerHTML;
    console.log(document.getElementById('head').innerText);
    
    if(!isOperaterSet){
        operandOne += text;  
        document.getElementById('head').innerText = operandOne; 
    }
    else if(isOperaterSet){
        operandTwo += text;
        document.getElementById('head').innerText = operandTwo;

    }

}
function calOperator(exp){
    debugger
    if(cal_result != ''){
        operandOne = cal_result;
        operandTwo = '';
    }
    operator = exp;
    isOperaterSet = true;
}
function clean(){
    debugger
    document.getElementById('head').innerText = '0';
    operandOne = '';
 operandTwo = '';
 operator='';
 isOperaterSet = false;
 cal_result = '';
//  checkOpOne = false;
//  checkOpTwo = false; 
}
function result(){
    debugger
    switch(operator){
        case '+':
            cal_result = parseInt(operandOne)+parseInt(operandTwo);
            document.getElementById('head').innerText = cal_result;
        break;
        case '-':
            cal_result = parseInt(operandOne)-parseInt(operandTwo);
            document.getElementById('head').innerText = parseInt(cal_result);
        break;
        case 'x':
            cal_result = parseInt(operandOne)*parseInt(operandTwo);
            document.getElementById('head').innerText = parseInt(cal_result);
        break;
        case '/':
            cal_result = parseInt(operandOne)/parseInt(operandTwo);
            document.getElementById('head').innerText = parseInt(cal_result);
        break;
    }
 operandOne = 0;
 operandTwo = 0;
 operator='';
 isOperaterSet = false;
//  checkOpOne = false;
//  checkOpTwo = false;
}