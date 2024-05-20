// let tempConverter = document.querySelector('temp-converter')
let screen = document.querySelector('#screen')
let userInput = document.querySelector('#user-input')
let tempType = document.querySelector('#temperature-type')
let selectedOption = tempType.options[tempType.selectedIndex].text
let convertBtn = document.querySelector('#convert-button')
let result = null

convertBtn.addEventListener('click', () => {
    if(selectedOption === 'To Celsius'){
        result = +userInput.value * 9/5 + 32  //the user's input will presumably be in fahrenheits
        screen.value = result
    }
    else{
        result = (+userInput.value - 32) * 5/9
        screen.value = result
    }
})