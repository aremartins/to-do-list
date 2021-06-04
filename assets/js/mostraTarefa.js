const todasTarefas = document.querySelector('.js-todas-tarefas');

new function (){
    mostraTarefa();
}

function mostraTarefa() {
    if(localStorage.length == 0) {
        return
    }
    let tarefas = [];
    for(let i = 0; i < localStorage.length; i ++){
        tarefas.push(JSON.parse(localStorage.getItem(i)))
    }
    tarefas.forEach(tarefa=> {
        todasTarefas.innerHTML += montaTrDoForm(tarefa);
        const codigoHtml = todasTarefas.querySelector(`[data-id="${tarefa.id}"]`);
        
    })   

}

function montaTrDoForm(tarefa) {
    let cartao = `<tbody class="tabela data-id="${tarefa.id}">
    <tr class="table-item">
    <td class="info-data">${tarefa.detalhesDoForm.data}</td>
    <td class="info-compromisso">${tarefa.detalhesDoForm.compromisso}</td>
    <td class="info-horario">${tarefa.detalhesDoForm.horario}</td>    
    <td class="info-detalhes">${tarefa.detalhesDoForm.detalhes}</td>
    </tr>`
    console.log(tarefa)
    return cartao;
}
