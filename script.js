//1º Questão
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    const minValorInput = document.getElementById("min_value").value;
    const maxValorInput = document.getElementById("max_value").value;
    const msg1 = document.getElementById("msg1")

    msg1.innerHTML = "";
    let mensagem1 = "";

    if(!validaValor(minValorInput) || !validaValor(maxValorInput)){
        mensagem1 = "Valores Faltando! Por favor, preencha os campos!"
    }
    else if(minValorInput < maxValorInput){
        let calcValues = (maxValorInput - minValorInput)
        mensagem1 = `A quantidade de números que está entre o intervalo de ${minValorInput} a ${maxValorInput} é de ${calcValues}.`
    }
    else{
        mensagem1 = "O valor mínimo deve ser menor que o valor máximo!"
    }
    msg1.innerHTML = mensagem1
})


//2º Questão
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    const fatorial_value = document.getElementById("fatorial_value").value
    const msg2 = document.getElementById("msg2")

    msg2.innerHTML = "";
    let mensagem2 = "";


    if(!validaValor(fatorial_value)){
        mensagem2 = "Campo não preenchido!"
    }
    else if(fatorial_value > 0){
        let calcFatorial = 1
        for(i=fatorial_value; i > 1; i--){
            calcFatorial *= i;
        }
        mensagem2 = `${fatorial_value}! = ${calcFatorial}`
    }
    else{
        mensagem2 = `${fatorial_value}! = ${calcFatorial}`
    }

    msg2.innerHTML = mensagem2
})

//3º Questão
const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => {
    const minValue = parseInt(document.getElementById("minValue").value)
    const maxValue = parseInt(document.getElementById("maxValue").value)
    const qtdNumeros = parseInt(document.getElementById("qtdNumeros").value)
    const msg3 = document.getElementById("msg3")

    msg3.innerHTML = "";
    let mensagem3 = "";

    if(!validaValor(minValue) || !validaValor(maxValue) || !validaValor(qtdNumeros)){
        mensagem3 = "Valores Faltando! Por favor, preencha os campos!"
    }
    else if(minValue < maxValue){
        let arrayNum = [];

        for(i=0; i < qtdNumeros; i++){
            const numEscolhido = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
            arrayNum.push(numEscolhido);
        }

        mensagem3 = `Array com os ${qtdNumeros} números => (${arrayNum})`;
    }
    else{
        mensagem3 = "O valor mínimo deve ser menor que o valor máximo!"
    }
    msg3.innerHTML = mensagem3
})


//funcoes
function validaValor(value){
    if(!value){
        return false
    }
    return true
}