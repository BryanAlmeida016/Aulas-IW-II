 //botão 1
 document.getElementById("botao1").addEventListener("click", function() {
    exibirMensagem("Botão 1 foi selecionado.");
});

//botão 2
document.getElementById("botao2").addEventListener("click", function() {
    exibirMensagem("Botão 2 foi selecionado.");
});

//botão 3
document.getElementById("botao3").addEventListener("click", function() {
    exibirMensagem("Botão 3 foi selecionado.");
});

//exibir a mensagem na div
function exibirMensagem(mensagem) {
    document.getElementById("mensagem").innerText = mensagem;
}