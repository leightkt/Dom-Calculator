let userInput = ""
const $screen = document.querySelector("#screen")
const $clear = document.querySelector("#clear")
const $equals = document.querySelector("#equals")
const $allspans = document.querySelectorAll("span")
const $digitbuttons = Array.from($allspans).filter(button => button.id !== 'clear' && button.id !== 'equals')

addCalculatorButtonEvents()

function addCalculatorButtonEvents(){
    clearAction()
    spanAction()
    equalsAction()
}

function spanAction(){
    $digitbuttons.forEach(span => {
        span.addEventListener('click', (event)=>{
            updateScreenValue(event.target)
            updateUserInputValue(event.target)
        })
    })
}

function updateScreenValue(span){
    if (isNotaNumber(span.innerText) || isNotaNumber($screen.innerText)){
        $screen.innerText = span.innerText
    } else {
        $screen.innerText += span.innerText
    }
}

function updateUserInputValue(span){
    if (isNotaNumber(span.innerText)){
        userInput += ` ${span.innerText} `
    } else {
        userInput += span.innerText
    }
}

function clearAction(){
    $clear.addEventListener('click', (event)=>{
        clearScreen()
        clearInput()
    })
}

function equalsAction(){
    $equals.addEventListener('click', (event)=>{
        splitInput()
        if (checkOrder()){
            checkCalculation()
        } else {
            $screen.innerText = 'Error'
            clearInput()
        }
    })
}

function checkCalculation(){
    if (calculate() === Infinity){
        $screen.innerText = 'Error'
        clearInput()
    } else {
        $screen.innerText = calculate()
        userInput = calculate()
    }
}

function substituteDivAndMultOperators(){
    userInput = userInput.replace('x', '*')
    userInput = userInput.replace('÷', '/')
}

function clearInput(){
    userInput = ""
}

function clearScreen(){
    $screen.innerText = ""
}

function splitInput(){
    substituteDivAndMultOperators()
    userInput = userInput.split(' ')
}

function isNotaNumber(input){
    return isNaN(parseInt(input))
}

function checkOrder(){
    let value = true
    userInput.forEach((input, index)=>{
        if(index % 2 === 0){
            if (isNotaNumber(input)){
                value = false
            }
        }
    })
    return value
}

function calculate(){
    let total = parseInt(userInput[0])
    let operator = null
    for(i = 1; i < userInput.length; i++){
        if(i % 2 !== 0){
            operator = userInput[i]
        } else {
            total = findOperator(total, parseInt(userInput[i]), operator)
        }
    }
    return total
}

function findOperator(total, input, operator){  
    switch(operator){
        case '+':
            return total += input
        case '-':
            return total -= input
        case '*':
            return total *= input
        case '/':
            return total /= input
    }
}