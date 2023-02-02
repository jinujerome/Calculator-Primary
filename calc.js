

// to display content of each key, pressed
function displayContent(content){
    calculatorScreen.value+=content

}

function allClear(){
    calculatorScreen.value=""
}

function evaluateExpr(){
    calculatorScreen.value=eval(calculatorScreen.value)
}

function removeLast(){
    calculatorScreen.value= calculatorScreen.value.slice(0,-1)
}