function contarVogais() {
    var inputString = document.getElementById('inputString').value;
    var count = 0;

    if (inputString) {
        // Converter a string para minúsculas para garantir que todas as vogais sejam contadas
        inputString = inputString.toLowerCase();

        for (var i = 0; i < inputString.length; i++) {
            var char = inputString.charAt(i);
            if ('aeiou'.includes(char)) {
                count++;
            }
        }

        document.getElementById('resultado').textContent = 'Número de vogais na frase: ' + count;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira uma frase.';
    }
}
