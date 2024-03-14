// Função para calcular Bhaskara
function calcularBhaskara(a, b, c) {
    var delta = b * b - 4 * a * c;
    var x1, x2;

    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return {x1: x1, x2: x2};
    } else if (delta === 0) {
        x1 = -b / (2 * a);
        return {x1: x1};
    } else {
        return {mensagem: "Não existem raízes reais"};
    }
}

document.getElementById("calcularBhaskara").addEventListener("click", function() {
    // Solicitar os valores de a, b e c
    var a = parseFloat(prompt("Digite o valor de a:"));
    var b = parseFloat(prompt("Digite o valor de b:"));
    var c = parseFloat(prompt("Digite o valor de c:"));

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== 0) {
        // Calcular Bhaskara
        var resultado = calcularBhaskara(a, b, c);

        // Exibir os resultados na div
        if (resultado.mensagem) {
            document.getElementById("infoBhaskara").innerText = resultado.mensagem;
        } 
        else if (resultado.x2 === undefined) {
            document.getElementById("infoBhaskara").innerHTML = "<strong>Resultado:</strong><br>" +
                                                                   "x = " + resultado.x1.toFixed(2);
        } 
        else {
            document.getElementById("infoBhaskara").innerHTML = "<strong>Resultados:</strong><br>" +
                                                                   "x1 = " + resultado.x1.toFixed(2) + "<br>" +
                                                                   "x2 = " + resultado.x2.toFixed(2);
        }
    } 
    else {
        document.getElementById("infoBhaskara").innerText = "Erro ao inserir informações.";
    }
});