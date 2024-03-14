document.getElementById("botao").addEventListener("click", function() {

    var nome = prompt("Digite seu nome:");

    if (nome !== null && nome !== "") {
        alert("Olá, " + nome + "! É um prazer conhecê-lo...");
    } else {
        alert("Olá! É um prazer conhecê-lo...");
    }
});