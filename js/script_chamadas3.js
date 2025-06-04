window.addEventListener('DOMContentLoaded', function() {
    // Parte 1 - Mostrar número formatado na página
    let numero = localStorage.getItem('numero');
    let numeroh3 = document.querySelector('.confirmacao h3');

    if (numeroh3 && numero) {
        const ddd = numero.slice(0, 2);
        const restante = numero.slice(2);

        let numeroFormatado = '';

        if (restante.length === 9) {
            numeroFormatado = `(${ddd}) ${restante.slice(0, 5)}-${restante.slice(5)}`;
        } else if (restante.length === 8) {
            numeroFormatado = `(${ddd}) ${restante.slice(0, 4)}-${restante.slice(4)}`;
        } else {
            numeroFormatado = numero;
        }

        numeroh3.innerText = numeroFormatado;
    }

    // Parte 2 - Captura o número no input
    let inputNumero = document.querySelector('#digite-numero');
    let botao = document.querySelector('#botao-info');

    if (botao) {
        botao.addEventListener('click', function(event) {
            event.preventDefault();
            salvarNumero();
        });
    }

    if (inputNumero) {
        inputNumero.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                salvarNumero();
            }
        });
    }

    function salvarNumero() {
        let numero = inputNumero.value.trim();

        let regex = /^\d{2}\d{8,9}$/;

        if (numero === '') {
            alert("Por favor, digite um número antes de continuar.");
            return;
        }

        if (!regex.test(numero)) {
            alert("Digite no formato correto: DDD + número (Ex: 11999999999 ou 1133334444).");
            return;
        }

        localStorage.setItem('numero', numero);
        console.log('Número armazenado no localStorage:', numero);

        window.location.href = "../chamadas/verificador_chamadas_2.html";
    }
});
