function comecar(){
   window.location.href = '../fases/fase1.html'
}



const respostas = {
    'fase1': document.getElementById('correta')
}

function avancar(){
    if( respostas.fase1 == 'correta'){
        alert('')
    }
}