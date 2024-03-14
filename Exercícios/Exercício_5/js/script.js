document.getElementById("inserirProduto").addEventListener("click", function() {
    
    // Solicitar o nome do produto e seu preço através de prompts
    var nomeProduto = prompt("Digite o nome do produto:");
    var precoProduto = parseFloat(prompt("Digite o preço do produto:"));

    // Verificar se o usuário digitou algo
    if (nomeProduto !== null && nomeProduto !== "" && !isNaN(precoProduto) && precoProduto > 0) {
        document.getElementById("infoProduto").innerText = "Produto: " + nomeProduto + "\nPreço: R$ " + precoProduto.toFixed(2);
    } 

    else {
        document.getElementById("infoProduto").innerText = "Erro ao inserir informações do produto.";
    }
});