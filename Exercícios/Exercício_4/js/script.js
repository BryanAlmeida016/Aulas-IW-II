document.getElementById("botao1").addEventListener("click", function() {
    exibirMensagem("Botão 1 foi selecionado.", "blue");
});

document.getElementById("botao2").addEventListener("click", function() {
    exibirMensagem("Botão 2 foi selecionado.", "green");
});

document.getElementById("botao3").addEventListener("click", function() {
    exibirMensagem("Botão 3 foi selecionado.", "red");
});

function exibirMensagem(mensagem, cor) {
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerText = mensagem;
    mensagemDiv.style.color = cor;
}