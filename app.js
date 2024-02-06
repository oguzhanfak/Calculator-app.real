const calculatorEl = document.querySelector("#calculator")
const resultEl = document.querySelector(".result")
const clearAllEl = document.querySelector("#clearAll")
const deleteACharEl = document.querySelector("#deleteAChar")


runEventListeners();

// variable definition
let firstNumber='';
let selectedOperator='';
let afterNumber='';
let iswaitingANewValue=false

function runEventListeners(){
    calculatorEl.addEventListener("click",write)
    clearAllEl.addEventListener("click",clearAll)
    deleteACharEl.addEventListener("click", deleteAChar)
}
function deleteAChar(){
    if(iswaitingANewValue){
        afterNumber=Calculator.deleteLastCharacter(afterNumber)
    }
    else{
        firstNumber=Calculator.deleteLastCharacter(firstNumber)
    }
   resultEl.innerHTML= Calculator.deleteLastCharacter(resultEl.innerHTML)
}

function clearAll(){
    firstNumber=''
    selectedOperator=''
    afterNumber=''
    iswaitingANewValue=false
    clearResultPanel()
}

function write(e){
    const element = e.target

    if(element.classList.contains("number")){
        //    resultEl.innerHTML += element.value
        if(iswaitingANewValue){
            afterNumber+=element.value
        }
        else{
            firstNumber+=element.value
        }
        updateResultPanel(element.value)
    }
    else if(element.classList.contains("operator")){
        // if(!Calculator.isHaveOperator(resultEl.innerHTML))
if(!Calculator.isHaveOperator(resultEl.textContent)){
    selectedOperator = element.value
    iswaitingANewValue=true
    updateResultPanel(element.value)

}
// else{
//     console.log("already has operator")
// }
    }
    else if(element.classList.contains("equals")){
    let result = calculate(firstNumber,selectedOperator,afterNumber).toString()
    firstNumber=result
    
    iswaitingANewValue=false
    clearOperatorAndAfterNumber()
    clearResultPanel()
    updateResultPanel(result)
    }
    // console.log(firstNumber, selectedOperator, afterNumber)
}

function calculate(firstNumber, operator, secondNumber){
    let result
    let dotResult=Calculator.isHaveDot(firstNumber) || Calculator.isHaveDot(secondNumber)

   switch(operator){
    case '+' :
     result =dotResult ? parseFloat(firstNumber) + parseFloat(secondNumber) : parseInt(firstNumber) + parseInt(secondNumber)
    break

    case '-' :
        result =dotResult ? parseFloat(firstNumber) - parseFloat(secondNumber) : parseInt(firstNumber) - parseInt(secondNumber)
    break

    case '*' :
        result =dotResult ? parseFloat(firstNumber) * parseFloat(secondNumber) : parseInt(firstNumber) * parseInt(secondNumber)
    break

    case '/' :
        result =dotResult ? parseFloat(firstNumber) / parseFloat(secondNumber) : parseInt(firstNumber) / parseInt(secondNumber)
    break
   }
   return result
}

function updateResultPanel(value){
    if(value.length>=6){
       value= parseFloat(value).toFixed(2)
    }
    resultEl.innerHTML += value
    }

    function clearResultPanel(){
        resultEl.innerHTML=""
    }

    function clearOperatorAndAfterNumber(){
        selectedOperator=""
        afterNumber=""
    }