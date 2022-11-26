//Estrututura de repetição while
var x = 0
while(x <= 10){
    console.log(`Passo ${x}`)
    x++;
}

// Podemos usar o while para percorrer arrays 

var arry = ['nome 1', 'nome 2', 'nome3', 'nome4', 'nome 5']
var c = 0

while(c<=4){
    console.log(arry[c])
    c++
}

// Podemos acessar cada letra de umapalavra
var nome = 'guilbert'
var c = 0

while(c < 9){
    console.log(nome[c])
    c++
}