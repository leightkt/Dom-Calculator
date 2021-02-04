let userInput = ""
const $screen = document.querySelector("#screen")
const $clear = document.querySelector("#clear")
const $equals = document.querySelector("#equals")
const $spans = document.querySelectorAll("span")

calculatorAction()

function calculatorAction(){
if (addClearAction()){
    userInput = addClearAction()
}

if (addClickToSpans()){
    userInput = addClickToSpans()
}

if (addEqualsAction()){
    userInput = addEqualsAction()
}
}

function addClickToSpans(){
    $spans.forEach(span => {
        if (span.id !== 'clear' && span.id !== 'equals'){
            span.addEventListener('click', (event)=>{
                userInput = updateValue(event.target, $screen)
                console.log(userInput)
                return userInput
            })
        }
    })
}

function updateValue(span, $screen){
    if (isNaN(parseInt(span.innerText))){
        $screen.innerText = span.innerText
        userInput += span.innerText
    } else {
        if (isNaN(parseInt($screen.innerText))){
            $screen.innerText = span.innerText
        } else {
            $screen.innerText += span.innerText
        }
        userInput += span.innerText
    }
    return userInput
}

function addClearAction(){
    $clear.addEventListener('click', (event)=>{
        $screen.innerText = ""
        userInput = clearInput()
        return userInput
    })
}

function addEqualsAction(){
    $equals.addEventListener('click', (event)=>{
        userInput = substituteDivAndMultOperators()
        console.log(userInput)
        try {
            eval(userInput)
        } catch (e) {
            if (e instanceof SyntaxError){
                $screen.innerText = `Error`
            } 
        }
        if (eval(userInput) !== Infinity){
            $screen.innerText = eval(userInput)
            
        } else {
            $screen.innerText = `Error`
        }
        userInput = clearInput()
        return userInput
    })
}

function substituteDivAndMultOperators(){
    userInput = userInput.replace('x', '*')
    userInput = userInput.replace('÷', '/')
    return userInput
}

function clearInput(){
    userInput = ""
    return userInput
}