// script.js
function calcularIMC() {
    // Obter os valores de peso e altura do formulário
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcular o IMC
    var imc = peso / (altura * altura);

    // Exibir o resultado na página
    var resultadoIMC = document.getElementById('resultadoIMC');
    resultadoIMC.textContent = 'Seu IMC é: ' + imc.toFixed(2);

    // Classificar o IMC
    if (imc < 18.5) {
        resultadoIMC.textContent += ' - Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultadoIMC.textContent += ' - Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        resultadoIMC.textContent += ' - Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        resultadoIMC.textContent += ' - Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        resultadoIMC.textContent += ' - Obesidade grau 2';
    } else {
        resultadoIMC.textContent += ' - Obesidade grau 3';
    }
}
