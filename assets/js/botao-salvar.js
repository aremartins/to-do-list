const botaoSalvarLocal = document.querySelector('#btn-salvar');
const tr = document.querySelector('tr');
const td = document.querySelector('td');
const tarefa = document.querySelector('form');
const data = document.querySelector('#data');
const hora = tarefa.querySelector('#hora');
const compromisso = tarefa.querySelector('#compromisso')
const endereco = tarefa.querySelector('#endereco')
const detalhes = tarefa.querySelector('#detalhes')
botaoSalvarLocal.addEventListener('click', () => {
    if(typeof(Storage) !== "undefined") {
        console.log("suporta LocalStorage");
        const tarefa = montaForm();
        salvaLocalStorage(tarefa);
        console.log(tarefa)
    } else {
        console.log("Não suporta LocalStorage");
    }
});

function montaForm(){
    let tarefa = {
        "id" : atributoId(),
        "detalhesDoForm":{
            "data" : data.value,
            "horario" : hora.value,
            "compromisso" : compromisso.value,
            "detalhes" : detalhes.value
        }      

    }
    return tarefa
}

numeroId = 1;
if(localStorage.length > 0){
    numeroId = localStorage.length;
}

function atributoId() {
    if (localStorage.length == 0){
        return 0
    } else {
        if (localStorage.length == numeroId) {
            let novoId = numeroId;
            numeroId ++;
            return novoId
        }
    }
}

function salvaLocalStorage(objetoJson) {
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}