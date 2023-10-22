function contarVogais() {
    var inputString = document.getElementById('inputString').value;
    var count = 0;

    if (inputString) {
        inputString = inputString.toLowerCase();

        for (var i = 0; i < inputString.length; i++) {
            var char = inputString.charAt(i);
            if ('aeiouáéíóúàèìòùãẽĩõũâêîôû'.includes(char)) {
                count++;
            }
        }

        document.getElementById('resultado').textContent = 'Número de vogais na frase: ' + count;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira uma frase.';
    }
}
