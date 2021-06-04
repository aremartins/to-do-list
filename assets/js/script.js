var botaoSalvar= document.querySelector('#btn-salvar');
var form = document.querySelector('#form-agendar');

botaoSalvar.addEventListener('click', function(event){
    event.preventDefault();

    var compromisso = obtemCompromisso(form);

    var novoCompromisso = montaTr(compromisso);   

    var tabela = document.querySelector('.tabela');
    tabela.appendChild(novoCompromisso);
})

function obtemCompromisso(form){
    var compromisso = {
        data: form.data.value,
        compromisso: form.compromisso.value,
        hora: form.hora.value,        
        endereco: form.endereco.value,
        detalhes: form.detalhes.value
    }

    return compromisso;

}

function montaTd(dado, classe){
    var novaTd = document.createElement('td');
    novaTd.textContent = dado;
    novaTd.classList.add(classe);

    return novaTd;
}

function montaTr(compromisso){
    var novoCompromisso = document.createElement('tr');
    novoCompromisso.classList.add('table-item');

    var dataTd = montaTd(compromisso.data, 'info-data');
    var comproTd = montaTd(compromisso.compromisso, 'info-compromisso');
    var horaTd = montaTd(compromisso.hora, 'info-hora')
    var enderecoTd = montaTd(compromisso.endereco, 'info-endereco')
    var detalhesTd = montaTd(compromisso.detalhes, 'info-detalhes')

    novoCompromisso.appendChild(dataTd);
    novoCompromisso.appendChild(comproTd);
    novoCompromisso.appendChild(horaTd);    
    novoCompromisso.appendChild(enderecoTd);
    novoCompromisso.appendChild(detalhesTd);

    return novoCompromisso;
}




