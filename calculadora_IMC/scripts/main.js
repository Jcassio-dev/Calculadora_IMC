import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber, CalculateIMC, VerificaClassificacaoIMC} from './utils.js'

const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const btnCalcula = document.querySelector('#btnCalcula')

inputWeight.addEventListener('keyup', () => {
    const inputValue = inputWeight.value
    notANumber(inputValue) ? AlertError.open() : AlertError.close()
})

inputHeight.addEventListener('keyup', () => {
    const inputValue = inputHeight.value
    notANumber(inputValue) ? AlertError.open() : AlertError.close()
})

btnCalcula.addEventListener('click', ConsultInputsData)
window.addEventListener('keydown', e => {
    if(e.key == 'Enter'){
        ConsultInputsData()
    }
})



function DisplayResultMessage(result){
    Modal.open()
    Modal.textIMC.innerText = `Seu IMC é de: ${result}`
    Modal.textAviso.innerText = VerificaClassificacaoIMC(result)
}


function ConsultInputsData(){
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightORHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightORHeightIsNotANumber){
        AlertError.open()

        return;
    }

    inputHeight.value = ''
    inputWeight.value = ''

    AlertError.close()
    let result = CalculateIMC(weight, height)
    DisplayResultMessage(result)
}


