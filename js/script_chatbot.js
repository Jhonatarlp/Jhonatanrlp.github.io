window.addEventListener('DOMContentLoaded', function() {
    const desabilitar = document.querySelectorAll('#desabilitado');

    desabilitar.forEach(elemento => {
        if (elemento.tagName.toLowerCase() === 'a') {
            elemento.addEventListener('click', e => e.preventDefault());
            elemento.style.pointerEvents = 'none';
            elemento.style.opacity = '0.5';
            elemento.style.cursor = 'default';
        }

        if (elemento.tagName.toLowerCase() === 'div') {
            const inputs = elemento.querySelectorAll('input');
            inputs.forEach(input => input.disabled = true);

            const botoes = elemento.querySelectorAll('button');
            botoes.forEach(botao => botao.disabled = true);
        }
    });
});
