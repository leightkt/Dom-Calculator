document.addEventListener('DOMContentLoaded', function(){
    const $screen = document.querySelector("#screen")
    const $clear = document.querySelector("#clear")
    const $equals = document.querySelector("#equals")
    const $spans = document.querySelectorAll("span")
    const $operators = document.querySelectorAll(".operator")
    const userInput = ""

    addClickToSpans($spans, $screen, userInput)
    addClearAction($clear, $screen)
    addEqualsAction($equals, $screen, userInput)
})

function addClickToSpans(spans, screen, userInput){
    spans.forEach(span => {
        if (span.id !== 'clear' && span.id !== 'equals'){
            span.addEventListener('click', (event)=>{
                displayClickValue(event.target, screen)
                userInput += event.target.innerText
            })
        }
    })
}

function displayClickValue(span, screen){
    screen.innerText = span.innerText
}

function addClearAction(clear, screen){
    clear.addEventListener('click', (event)=>{
        screen.innerText = ""
        userInput = ""
    })
}

function addEqualsAction(equals, screen, userInput){
    const operators = ["+", "-", "x", "÷"]
    userInput.split()
    equals.addEventListener('click', (event)=>{
        operators.find(operator => {
            if (userInput[1] === operator){
                screen.innerText = `${userInput[0]}${operator}${userInput[2]}`
            }
        })
    })
}

// if (Number.isInteger(parseInt(span.innerText))){