export function notANumber(value){
    return isNaN(value) || value == ''
}

export function CalculateIMC(weight, height){
    return (weight/ ((height / 100)**2)).toFixed(2)
}

export function VerificaClassificacaoIMC(data){
    if(data < 18.5){
        return 'Magreza'
    }
    else if(data >= 18.5 && data < 25 ){
        return 'Saudável'
    }
    else if(data >= 25 && data < 30 ){
        return 'Sobrepeso'
    }
    else if(data >= 30 && data < 35 ){
        return 'Obesidade Grau I'
    }
    else if(data >= 35 && data < 40 ){
        return 'Obesidade Grau II (Severa)'
    }
    else{
        return 'Obesidade Grau III (Mórbida)'
    }
}