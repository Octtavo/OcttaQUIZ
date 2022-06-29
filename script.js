function comecar(){
   window.location.href = '../fases/fase1.html'
}


//aleta para as erradas
function erradas(){
    alert('INFELZIMENTE VOCÊ ERROU, TENTE NOVAMENTE!')
}


const fases = [1, 2]
function avancar(){
    if(fases[0] == 1){
        window.location.href = 'fase2.html'
    }else{
        if(fases[1] > fases[0]){
            alert('')
        }

    }
}