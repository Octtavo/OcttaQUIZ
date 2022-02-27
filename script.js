                                                   //Configuração da página inicial

/*alert("Olá, aqui vai um pequeno aviso aos novos jogadores, antes de tudo a companhia OcttaQUIZ pede que leiam as descrições, basta clicar no i (de informação) que está logo abaixo")*/
            
function comecar() {
    window.location.href = './fase1/primeirafase.html'
}
function fases() {
    window.location.href = './paineldefases/fases.html'
}
function info() {
    window.location.href = './creditos/creditos.html'
}
                                                   //Configuração da página inicial



                                                    //CONFIGURAÇÃO DO PAINEL DE FASES
                                            
function botao1() {
    window.location.href = '../fase1/primeirafase.html'
}
function botao2() {
    window.location.href = '../fase2/segundafase.html'
}
function botao3() {
    window.location.href = '../fase3/terceirafase.html'
}
function botao4() {
    window.location.href = '../fase4/quartafase.html'
}
function botao5() {
    window.location.href = '../fase5/quintafase.html'
}
function botao6() {
    window.location.href = '../fase6/sextafase.html'
}
function botao7() {
    window.location.href = '../fase7/setimafase.html'
}
function botao8() {
    window.location.href = '../fase8/oitavafase.html'
}
function botao9() {
    window.location.href = '../fase9/nonafase.html'
}
function botao10() {
    window.location.href = '../fase10/decimafase.html'
}
                                                      //CONFIGURAÇÃO DO PAINEL DE FASES

 

                                                      //CONFIGURAÇÃO DOS BTN DE RETORNAR -G
   
function retornar() {
    window.location.href = '../index.html'
}
                                                      //CONFIGURAÇÃO DOS BTN DE RETORNAR -G


                                                      //CONFIGURANDO AS RESPOSTAS CORRETAS -G
                                                
function avancarFase(correta) {
    var certa = document.getElementById("correta")
   if( correta == certa){
       window.location.href = '../fase2/segundafase.html';
   } else {
       alert("Infelizmente você errou a reposta, tente novamente")
       window.location.href = '../index.html';
   }
}              
                                                     //CONFIGURANDO AS RESPOSTAS CORRETAS -G



                                                    

                                                                                               
                                                         



                                                      



                                    