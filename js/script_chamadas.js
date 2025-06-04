window.addEventListener('DOMContentLoaded', function() {
    let numeroinput = document.querySelector('#digite-numero');
    let botaoInfo = document.querySelector('#botao-info');
    let botaoBlock = document.querySelector('#botaoblock');
    let botaocontato = document.querySelector('#botaocontato');

    botaoInfo.addEventListener('click', function(event) {
        event.preventDefault();

        let numero = numeroinput.value.trim();
        let regex = /^\d{2}\d{8,9}$/;

        if (numero === '') {
            alert("Por favor, digite um número antes de continuar.");
            return;
        }

        if (!regex.test(numero)) {
            alert("Por favor, digite um número válido (DDD + número).");
            return;
        }

        localStorage.setItem('numero', numero);
        console.log('Número armazenado no localStorage:', numero);

        window.location.href = "/chamadas/verificador_chamadas_2.html";
    });

    botaoBlock.addEventListener('click', function() {
        alert('Número bloqueado com sucesso');
    });

    botaocontato.addEventListener('click', function() {
        alert('Número não está na lista de contatos');
    });
});

