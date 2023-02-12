// EcmaScript - 2015 - ES6 Modules

// default import
import resetControls from "./controls.js"
// named import

import {countDown, resetTimer} from "./timer.js"

// DOM
// Document Object Model

// Refatoração: mudar um código para deixá-lo mais entendível
// Deixar o código mais performático
// SEM ALTERAR sua funcionalidades

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

// Event-driven
// programação imperativa - "seguir um passo a passo"
// callback



buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    countDown()

})

buttonPause.addEventListener('click', function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeOut)

})

buttonStop.addEventListener('click', function(){
    resetControls()
    resetTimer()
    
})

buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function(){
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
})

buttonSet.addEventListener('click', function(){
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
        resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})