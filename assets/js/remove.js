var tabela = document.querySelector('.tabela');
tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut');

    setTimeout(function(){
        event.target.parentNode.remove()
    },500);

    // //é o mesmo que:
    // var alvo = event.target - onde foi dado o duplo click, o alvo
    // var paiDoAlvo = alvoEvento.parentNode - seleciona o elemento pai de quem foi clicado
    // paiDoAlvo.remove() - remove o elemento pai
});