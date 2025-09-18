// console.log("Hello, World!");

// let idade = 16;
// let nome = "Vitor";
// let cidade = "Pomerode";
// let ehEstudante = true;
// let altura = 1.86;

// console.log("Nome: " + nome);
// console.log("Idade: " + idade);
// console.log("Cidade: " + cidade);
// console.log("É estudante? " + ehEstudante);
// console.log("Altura: " + altura + "m");










// console.log("Hello, World!");
// 
// 
// let idade = 16;
// let nome = "Vitor";
// console.log(typeof nome);
// 
// let cidade = "Pomerode";
// let ehEstudante = true;
// let altura = 1.86;
// 
// 
// nome = 25;
// console.log(typeof nome);
// 
// 
// 
// console.log("Nome: " + nome);
// console.log("Idade: " + idade);
// console.log("Cidade: " + cidade);
// console.log("É estudante? " + ehEstudante);
// console.log("Altura: " + altura + "m");










//let texto = "Olá, Mundo!";
//let numero = 42;
//let booleano = true;
//let nulo = null;
//let indefinido;
//
//console.log(typeof texto);        // string
//console.log(typeof numero);       // number
//console.log(typeof booleano);   // boolean
//console.log(typeof nulo);         // object (this is a known quirk in //JavaScript)
//console.log(typeof indefinido);   // undefined











//let nome = "Vitor";
//let idade = 16;
//let altura = 1.86;
//let ehEstudante = true;
//let endereco = "Pomerode, SC";
//
//console.log(`Nome: ${nome}`);
//console.log(`Idade: ${idade}`);
//console.log(`Altura: ${altura}m`);
//console.log(`É estudante? ${ehEstudante}`);
//console.log(`Endereço: ${endereco}`);










//let nota1 = 8.5;
//
//if (nota1 >= 7) {
//    console.log("Aprovado");
//} else {
//    console.log("Reprovado");
//}










//let a = 5;
//let b = "5";
//
//if (a !== b) {
//    console.log("Iguais");
//} else {
//    console.log("Diferentes");
//}











//let idade = 16;
//
//if (idade < 10) {
//    console.log("Não pode transar");
//} else if (idade < 16) {
//    console.log("Pode transar com autorização dos pais");
//} else if (idade < 18) {
//    console.log("Pode transar, mas não pode beber");
//} else {
//    console.log("Pode transar e beber");
//}











//for (let i = 1; i <= 10; i++) {
//    console.log(`transei ${i} vezes`);
//}

//let numero = 7;
//
//for (let i = 1; i <= 10; i++) {
//    let resultado = numero * i;
//    console.log(`${numero} x ${i} = ${resultado}`);
//}










//let soma = 0;
//
//for (let i = 1; i <= 10; i++) {
//    soma += i;
//}
//
//console.log(`A soma de tudo ficou em ${soma}`);














//function media(n1, n2) {
//    return n1 + n2;
//}
//
//let resul = media(5, 10);
//
//console.log(resul);
//
//
//
//function nomeCompleto(nome, sobrenome) {
//    return `${nome} ${sobrenome}`;
//}
//
//let nomes
//
//nomes = nomeCompleto("Vitor", "Pasold");
//
//console.log(`Meu nome é ${nomes}`);








// Funções da calculadora
function calcular(operacao) {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultadoDiv = document.getElementById('resultado');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.innerHTML = "Por favor, insira dois números válidos!";
        resultadoDiv.style.color = "#dc3545";
        return;
    }

    let resultado;
    switch(operacao) {
        case 'somar':
            resultado = num1 + num2;
            break;
        case 'subtrair':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                resultadoDiv.innerHTML = "Erro: Divisão por zero!";
                resultadoDiv.style.color = "#dc3545";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida";
    }

    resultadoDiv.innerHTML = `Resultado: ${typeof resultado === 'number' ? resultado.toFixed(2) : resultado}`;
    resultadoDiv.style.color = "#28a745";
}

function limpar() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').innerHTML = '';
}






        //funcoes antigas
        //so tirar as barras e volta a funcionar


//function tabuada(a, b) {
//    let resultado1;
//    let resultado2;
//
//    for (let i = 1; i <= 10; i++) {
//        resultado1 = a * i;
//        console.log(`${a} x ${i} = ${resultado1}`);
//    }
//
//    console.log("--------------");
//    
//    for (let j = 1; j <= 10; j++) {
//        resultado2 = b * j;
//        console.log(`${b} x ${j} = ${resultado2}`);
//    }
//}
//
//
//function soma(a, b) {
//    a = Number(a);
//    b = Number(b);
//    return a + b;
//}


console.log(resultadoGeral);



//let num1 = prompt("Digite o primeiro número:");
//let num2 = prompt("Digite o segundo número:");
//
//for (let i = 1; i <= 10; i++) {
//    let resultado = num1 * i;
//    console.log(`${num1} x ${i} = ${resultado}`);
//}
//
//console.log("--------------");
// 
//for (let i = 1; i <= 10; i++) {
//    let resultado = num2 * i;
//    console.log(`${num2} x ${i} = ${resultado}`);
//}
