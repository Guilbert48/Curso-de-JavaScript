// Condições em javascript
//notação para if

if(true){
    console.log("Testando o if")
}

var idade = 15

if(idade<18){
    console.log(`Você tem ${idade} anos e ainda não pode tirar sua carteira`)
} else{
    console.log(`Você tem ${idade} anos e já pode tirar sua carteira`)
}

//Else if
var nome = 'Utaka'
if(nome == 'Utaka'){
    console.log(`Seu nome é ${nome}`)
} else if(nome == 'guil'){
    console.log(`Como a condição anterior falhou, seu nome é ${nome}`)
} else{
    console.log('nenhuma das condições foi atendida')
}
//podemos adicionar quantos else if quisermos