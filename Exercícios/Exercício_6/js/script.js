document.getElementById("inserirInformacoes").addEventListener("click", function() {
    var nomeProduto = prompt("Digite o nome do produto:");
    var precoProduto = parseFloat(prompt("Digite o preço do produto:"));
    var valorDinheiro = parseFloat(prompt("Digite o valor em dinheiro para pagamento:"));

    if (nomeProduto !== null && nomeProduto !== "" && !isNaN(precoProduto) && precoProduto > 0 &&
        !isNaN(valorDinheiro) && valorDinheiro >= precoProduto) {

        var troco = valorDinheiro - precoProduto;

        document.getElementById("infoProduto").innerHTML = "<strong>Informações do Produto:</strong><br>" +
                                                            "<strong>Nome do Produto:</strong> " + nomeProduto + "<br>" +
                                                            "<strong>Preço do Produto:</strong> R$ " + precoProduto.toFixed(2) + "<br>" +
                                                            "<strong>Valor em Dinheiro:</strong> R$ " + valorDinheiro.toFixed(2) + "<br>" +
                                                            "<strong>Troco:</strong> R$ " + troco.toFixed(2);
    } 
    else {
        document.getElementById("infoProduto").innerText = "Erro ao inserir informações.";
    }
});