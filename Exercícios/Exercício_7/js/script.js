document.getElementById("calcularReajuste").addEventListener("click", function() {
    
    var nomeFuncionario = prompt("Digite o nome do funcionário:");
    var salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário:"));
    var porcentagemReajuste = parseFloat(prompt("Digite a porcentagem de reajuste do salário:"));

    // Verificar se o usuário digitou informações válidas
    if (nomeFuncionario !== null && nomeFuncionario !== "" && !isNaN(salarioAtual) && salarioAtual > 0 &&
        !isNaN(porcentagemReajuste) && porcentagemReajuste >= 0) {
        
        var salarioReajustado = salarioAtual*(1 + (porcentagemReajuste / 100));

        document.getElementById("infoReajuste").innerHTML = "<strong>Informações do Reajuste Salarial:</strong><br>" +
                                                            "<strong>Nome do Funcionário:</strong> " + nomeFuncionario + "<br>" +
                                                            "<strong>Salário Atual:</strong> R$ " + salarioAtual.toFixed(2) + "<br>" +
                                                            "<strong>Porcentagem de Reajuste:</strong> " + porcentagemReajuste.toFixed(2) + "%<br>" +
                                                            "<strong>Salário Pós-Reajuste:</strong> R$ " + salarioReajustado.toFixed(2);
    } 
    else {
        document.getElementById("infoReajuste").innerText = "Erro ao inserir informações.";
    }
});