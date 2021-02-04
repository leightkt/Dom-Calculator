let userInput = []
const $screen = document.querySelector("#screen")
const $clear = document.querySelector("#clear")
const $equals = document.querySelector("#equals")
const $spans = document.querySelectorAll("span")

// document.addEventListener('DOMContentLoaded', function(){
//     $screen = document.querySelector("#screen")
//     $clear = document.querySelector("#clear")
//     $equals = document.querySelector("#equals")
//     $spans = document.querySelectorAll("span")
// })

startCalculator()

function startCalculator(){
    addClearAction($clear, $screen, userInput)
    addClickToSpans($spans, $screen, userInput)
    addEqualsAction($equals, $screen, userInput)
}

function addClickToSpans($spans, $screen, userInput){
    $spans.forEach(span => {
        if (span.id !== 'clear' && span.id !== 'equals'){
            span.addEventListener('click', (event)=>{
                displayClickValue(event.target, $screen)
                userInput.push(event.target.innerText)
                console.log(userInput)
            })
        }
    })
}

function displayClickValue(span, $screen){
    $screen.innerText = span.innerText
}

function addClearAction($clear, $screen, userInput){
    $clear.addEventListener('click', (event)=>{
        $screen.innerText = ""
        userInput = clearInput()
    })
}

function addEqualsAction($equals, $screen, userInput, operatorValues){
    $equals.addEventListener('click', (event)=>{
        console.log(userInput)
        if (eval(userInput.join(' '))){
            $screen.innerText = eval(userInput.join(' '))
        } else {
            $screen.innerText
        }
        userInput = clearInput()
    })
}

function clearInput(){
    while (userInput.length > 0){
        userInput.pop()
    }
    return userInput
}