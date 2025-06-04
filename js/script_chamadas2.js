window.addEventListener('DOMContentLoaded', function () {
    let numeroinput = document.querySelector('#digite-numero');
    let numero = localStorage.getItem('numero');

    if (numero) {
        numeroinput.placeholder = numero;
        numeroinput.disabled = true;
    }

    let telefone = document.querySelector('#telefoneimagem');
    telefone.style.opacity = 0.3;

    if (numero) {
        let info = pegarInfoDoNumero(numero);

        document.querySelector('.detalhes').innerHTML = `
            <h2>Detalhes do Número</h2>
            <ul>
                <li><p><strong>Estado:</strong> ${info.estado}</p></li>
                <li><p><strong>Tipo:</strong> ${info.tipo}</p></li>
                <li><p><strong>Contato Empresarial:</strong> ${info.empresa}</p></li>
                <li><p><strong>Ligações:</strong> ${info.ligacoes}</p></li>
            </ul>
        `;
    }
    let contatos = document.querySelector("#contatosss")
    contatos.addEventListener('click', function() {
        alert('Número salvo com sucesso')
        console.log('oi')
    });
});

function pegarInfoDoNumero(numero) {
    let ddd = numero.slice(0, 2);
    let restante = numero.slice(2);

    let dddParaEstado = {
        '11': 'SP', '12': 'SP', '13': 'SP', '14': 'SP', '15': 'SP', '16': 'SP', '17': 'SP', '18': 'SP', '19': 'SP',
        '21': 'RJ', '22': 'RJ', '24': 'RJ',
        '27': 'ES', '28': 'ES',
        '31': 'MG', '32': 'MG', '33': 'MG', '34': 'MG', '35': 'MG', '37': 'MG', '38': 'MG',
        '41': 'PR', '42': 'PR', '43': 'PR', '44': 'PR', '45': 'PR', '46': 'PR',
        '47': 'SC', '48': 'SC', '49': 'SC',
        '51': 'RS', '53': 'RS', '54': 'RS', '55': 'RS',
        '61': 'DF',
        '62': 'GO', '64': 'GO',
        '63': 'TO',
        '65': 'MT', '66': 'MT',
        '67': 'MS',
        '68': 'AC',
        '69': 'RO',
        '71': 'BA', '73': 'BA', '74': 'BA', '75': 'BA', '77': 'BA',
        '79': 'SE',
        '81': 'PE', '87': 'PE',
        '82': 'AL',
        '83': 'PB',
        '84': 'RN',
        '85': 'CE', '88': 'CE',
        '86': 'PI', '89': 'PI',
        '91': 'PA', '93': 'PA', '94': 'PA',
        '92': 'AM', '97': 'AM',
        '95': 'RR',
        '96': 'AP',
        '98': 'MA', '99': 'MA'
    };


    let estado = dddParaEstado[ddd] || 'Desconhecido';

    let tipo = (restante.length >= 8 && (restante.startsWith('9') || restante.length === 9))
        ? 'Celular'
        : 'Fixo';

    let empresa = Math.random() < 0.5 ? 'Sim' : 'Não';

    let ligacoes = Math.floor(Math.random() * 20) + 1;

    return {
        estado,
        tipo,
        empresa,
        ligacoes
    };
}
