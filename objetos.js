// Definimos um objeto com o uso das chaves
// As propriedades são definidas por dois pontos :

var obj = {
    nome: 'guilbert',
    idade: 20,
    profissão: 'Programador'
}

console.log(obj)
console.log(typeof obj)

//Podemos pegar cada um dos objetos dessa maneira

console.log(obj.idade)
console.log(obj.nome)
console.log(obj.profissão)

// Podemos usar como uma variável da propriedade

console.log(`O meu nome é ${obj.nome}`)

//Podemos tambem mudar o valor de uma propriedade

obj.nome = 'Guilllll'
console.log(obj.nome)
console.log(`O meu nome é ${obj.nome}`)

// Podemos tambem adicionar propriedades

obj.nacionalidade = 'Brasileiro'

console.log(obj)