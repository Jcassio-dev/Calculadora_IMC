import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber, CalculateIMC, VerificaClassificacaoIMC} from './utils.js'

const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const btnCalcula = document.querySelector('#btnCalcula')


btnCalcula.addEventListener('click', ConsultInputsData)
window.addEventListener('keydown', e => {
    if(e.key == 'Enter'){
        ConsultInputsData()
    }
})
inputWeight.addEventListener('keydown', VerificaTecla)
inputHeight.addEventListener('keydown', VerificaTecla)



function DisplayResultMessage(result){
    Modal.open()
    Modal.textIMC.innerText = `Seu IMC é de: ${result}`
    Modal.textAviso.innerText = VerificaClassificacaoIMC(result)
}

function VerificaTecla(e){
        notANumber(e.key)  ? AlertError.open() : AlertError.close()
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


