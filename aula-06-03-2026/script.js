console.log('testando a impressão')

//variáveis

var animal = 'gato' 
//não pode começar com número; 
//linguagem dinâmica: não precisa especificar; 
//permite reatribuição
//não liga pra ponto e virgula
animal = 'Cachorro'
console.log(animal)

let nome = 'Cicrano' 
//só funciona para bloco, restrito; 
//permite reatribuição
console.log(nome)

const valor = 29 
//NÃO tem reatribuição
console.log(valor)

//verificar os tipos
console.log(typeof nome)

//algoritmo: entrada + processamento + saída
//entrada:
var nome2 = window.prompt('Digite o seu nome: ')//entrada

//saída:
console.log('Nome digitado: ' + nome2 + ' Aproveite.') //print bruto
//template literal
console.log(`Nome: ${nome2}. Aproveite!`) //USA CRASE!

//processamento:
//operadores aritméticos com precedência matemática: + - * /
//operadores de comparação: < > >= <= == !=
// === (estritamente igual) !== (estritamente desigual) 
console.log(5 == '5') // olha apenas os valores
console.log(5 === '5')

//Atividade
var valor1 = window.prompt('Digite um valor: ')
var valor2 = window.prompt('Digite um valor: ')
valor1 = Number(valor1) 
valor2 = Number(valor2)
//outras conversões
//valor1 = parseFloat(window.prompt('Digite um valor: '))
//valor1 = parseInt(window.prompt('Digite um valor: '))
var valor3 = valor1 + valor2
console.log(`A soma é ${valor3}.`) 

//estrutura condicionais
// if-else, switch-case
var idade = 10
if (idade >= 18){
    console.log('maior idade')
} else {
    console.log('menor de idade')
}