var resultado = document.getElementById('resultado')

function soma(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    const res = n1+n2
    resultado.innerHTML = res
}

function subtracao(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    const res = n1-n2
    resultado.innerHTML = res
}

function multiplicacao(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    const res = n1*n2
    resultado.innerHTML = res
}

function divisao(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    const res = n1/n2
    resultado.innerHTML = res
}

function limpar(){
    resultado.innerHTML = 0
}