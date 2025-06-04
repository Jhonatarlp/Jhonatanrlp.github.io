window.addEventListener('DOMContentLoaded', function() {
const botao = document.querySelector('.btn');


botao.addEventListener('mouseover', () => {
    botao.style.backgroundColor = '#1d5c7f'; 
    botao.style.color = 'white'; 
});


botao.addEventListener('mouseout', () => {
    botao.style.backgroundColor = '#368abf'; 
    botao.style.color = 'black'; 
});
});