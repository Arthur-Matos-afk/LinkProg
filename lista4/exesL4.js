function exe1(){
// Criando o vetor
let vetor = [];

//vetor
for (let i = 0; i < 6; i++) {
    let num = parseInt(prompt("Digite ${i+1}º número inteiro:"));
    vetor.push(num);
}

//calculo
let pares = [];
let impares = [];

for (let num of vetor) {
    if (num % 2 === 0) {
        pares.push(num);
    } else {
        impares.push(num);
    }
}

//resultados
console.log("Números pares:", pares);
console.log("Quantidade de números pares:", pares.length);

console.log("Números ímpares:", impares);
console.log("Quantidade de números ímpares:", impares.length);
}

function exe2(){
    let numeros = [12, 7, 9, 4, 18, 5, 6];
       let multiplosDe2 = [];
          let multiplosDe3 = [];
             let multiplosDe2e3 = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        multiplosDe2.push(numeros[i]);
    }
    if (numeros[i] % 3 === 0) {
        multiplosDe3.push(numeros[i]);
    }
    if (numeros[i] % 2 === 0 && numeros[i] % 3 === 0) {
        multiplosDe2e3.push(numeros[i]);
    }
}

// Mostrar os resultados
Alert("Números múltiplos de 2:", multiplosDe2);
    Alert("Números múltiplos de 3:", multiplosDe3);
        Alert("Números múltiplos de 2 e de 3:", multiplosDe2e3);
}
function exe3(){
    let cliente 
    do {
        cliente = number(prompt("imforme o codigo do cliente"))
        let codigo = promp("informe o codigo do produto para compra")
        let qtde = number(prompt("informe a qtde do profuto para compra"))
        //procura pra ver se o produto existe
        let posicao = codigos.indexOf(codigo)
        if (posicao == -1){ //produto nao existe
            alert('codigo ${codigo} inexistente')
        }
        else { //produto existe 
        // tem em estoque suficiente
        if (estoque[posicao] >= qtde){
            //atualiza o estoque
            estoque[posicao] = estoque[posicao] = qtde
            alert('pedido atentido. obrigado e volte sempre')
            }
        }
    }
}
function exe4(){
    let vetor = []
    for(let i=0;i<15;i++){
        vetor.push(number(prompt('informe o ${i+1} numero')))
        i++
    }
    for(let i=0;i<15;i++){
        if (vetor[i] == 30){
            posicoes.push(i)
        }
    }
    alert('numero 30 encontrado nas posicoes ${posicoes}')
}
function exe5(){
    let logica = [], linguagem = []
    for(let i=0;i<15;i++){
        logica.push(number(prompt('informe o ${i+1}o. que faz a diciplina logica')))
    }
    for(let i=0;i<10;i++){
        linguagem.push(number(prompt('informe o ${i+1} o. aluno que faz a disciplina linguagem')))
    }
    let interseccao = []
    for(let i=0;i<15;i++){
        let posicao = linguagem.indexOf(logica[i])
        if(posicao != -1){
            interseccao.push(logica[i])
        }
    }
    alert('alunos que fazem logica e linguagem ${interseccao}')
}
function exe6(){
    let vendas = [], percentuais = [], nomes = []
    for(let i=0; i<5; i++)
    nomes.push(prompt('informe o nome ${i+1}o vendedor'))
    vendas.push(number(prompt('informe total vendido pelo ${i+1}o vendedor')))
    percentuais.push(number(prompt('informe o percentual de vendas do ${i+1}o vendedor'))) 
}
function exe7(){
    let vetor = []
    for(let i=0;i<10;i++){
        vetor.push(Number(prompt("Informe o número ${i}o.")))
    }
    // conta os negativos e soma os positivos
    let conta = 0
    let soma = 0
    for(let i=0;i<10;i++){
        if (vetor[i] < 0){
            conta++
        }
        else {
            soma += vetor[i]
        }
    }
    alert("Contagem de negativos ${conta} e soma dos positivos ${soma}")
}
function exe8(){
    let nomes = [], medias = []
    for(let i=0;i<7;i++){
        nomes.push(prompt("Informe nome do aluno ${i+1}"))
        medias.push(Number(prompt("Informe média do aluno ${i+1}")))
    }
    // calcular a maior média
    let maior = medias[0]
    for(let i=1;i<7;i++){
        if (medias[i] > maior){
            maior = medias[i]
        }
    }
    // nome do aluno com a maior média
    let pos = medias.indexOf(maior)
    alert("Nome do aluno com maior média ${maior} é ${nomes[pos]}")
    // calcular a nota necessária no exame final
    for(let i=0;i<6;i++){ // percorre o vetor
        if (medias[i] < 7){ // ficou para exame final
            // nota necessária sabendo que média deve ser mínimo 5
            alert("${nomes[i]} precisa tirar ${10-medias[i]}")
        }
    }
}
function exe9(){
    let codigos = [], nomes = [], precos=[];
    for(let i=0;i<7;i++){
        nomes.push(prompt("Informe nome do produto ${i+1}))//coleta e armazena os nomes")
        codigos.push(Number(prompt("Informe o codigo do produto ${i+1}"))) // armazena os codigos 
        precos.push(Number(prompt("Informe os preços do produto  ${i+1}")))//armazena os preços 
    for(let i=0;i<10;i++){
        if (codigos [i] %2==0 &&  precos[i] >100){
            novo = precos[i] + precos [i] *20/100
        }
        else if (codigos [i] %2==0){
            novo = precos[i] + precos [i] *15/100
        }
        else if (precos[i] >100){
            novo = precos[i] + precos [i] *10/100
        }
        else {
            novo = precos [i]
        }
    }
    alert ("${nomes [i]} - ${codigos [i]} - ${precos [i]} - ${novo}")
    }
}
function exe10(){
    let vetor1 = [], vetor2 = []
    let vetorr1 = [], vetorr2 = []
    for(let i=0;i<10;i++){
        vetor1.push(prompt('informe o ${i+1}o. elemento do vetor1'))
    }
    for(let i=0;i<5;i++){
        vetor2.push(prompt('informe o ${i+1}o. elemento do vetor2'))
    }
    let somaVet2 = 0 
    for(let i=0;i<10;i++){
    somaVet2 += vetor2[i]
    }
    for(let i=0;i<10;i++){
        if (vetor1[i] % 2 == 0){
            vetorr1.push(vetor1[i] + somaVet2)
        }
    }
    alert('vetor resultante 1 ${vetorr1}')

    for(let i=0;i<10;i++){
        if (Vetor1[i] % 2 == 1){
            let qtdeDivisores = 0
            for(let j=0;j<5;j++){
                if (vetor1[i] % vetor[j] == 0) {
                    qtdeDivisores++
                }
            }
            vetorr2.push(qtdeDivisores)
        }
    }
    alert('vetor resultante 2 ${vetorr2}')
}