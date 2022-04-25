// ana carolina de souza azevedo


//1 - Muitas estruturas algorítmicas tem sua lógica inspirada em coisas do seu cotidiano, como por exemplo o ato de tomar água e depois ter que ir ao banheiro. Baseado nos seus conhecimentos de estruturas algorítmicas 
//e na sua vivência pessoal, descreva uma situação cotidiana que se assemelha a essas respectivas estruturas abaixo:

//a - Array
// livros na minha estante que eu quero reler: a menina que roubava livros, como eu era antes de voce,"O diario de anne frank,  O ladrao de Raios e O lar da srta. Peregrine para crianças peculiares


//b - Função
// Nome dos meus pets


//c - Laço de repetição (for)
// guardando lapis no estojo


//d - Laço de repetição (while)
// colocando raçao no pote do gato

//e - Condicionais (if e else)
// verificar se tem uma duzia de bananas







//2 - Agora, com base nas suas respostas a cima, repita essa mesma situação que você descreveu, porém transformando-as em código JavaScript.

//a - Array
const livros = [["a menina que roubava livros"],["como eu era antes de voce"], ["O diario de anne frank"],["O ladrao de Raios"],["O lar da srta. Peregrine para crianças peculiares"]]



//b - Função
function gatos(){
    console.log("Pudim, Amendoim e Quindim")
}
gatos()



//c - Laço de repetição (for)
function estojo(){
   
    for(let l = 0; l <= 12; l++){
        console.log('estojo com ' + l + 'lapis')
    }
}



//d - Laço de repetição (while)
function balanca(){
let pote  = 0
while(pote < 300 ){
    pote += 30;
    console.log('colocando raçao na tigeja ' + pote )
}

}



//e - Condicionais (if e else)
function bananas(b){

    if(b === 12){

         return true

         

        } else{

        return false;

}

}