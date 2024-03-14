document.getElementById("botao").addEventListener("click", function() {
    var nome = prompt("Digite seu nome:");

    if (nome !== null && nome !== "") {
        var mensagem = "Olá, " + nome + "! É um prazer conhecê-lo...";

        document.getElementById("mensagem").innerText = mensagem;
    } 
    else {
        document.getElementById("mensagem").innerText = "Olá! É um prazer conhecê-lo...";
    }
});