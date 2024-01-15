const form = document.getElementById('Entrada-info');

const inputnome = document.getElementById('nomedocontato')
const inputtel = document.getElementById('telefone-num')
let inputDDD = document.getElementById('codarea');
var DDDshow = ' testando ';

let linhas = ' ';
let quantcontato = ' ';

let contadorcontato = [];

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionacontato()
    atualizatabela()
    mostracontato()
    atualizarodape()
})

function adicionacontato (){

    if (inputDDD.value >= 11 && inputDDD.value <= 19) {
    DDDshow = 'São Paulo'}

    else if ( inputDDD.value  == 21 ){
    DDDshow = 'Rio de Janeiro'}

    else if (inputDDD.value >= 30 && inputDDD.value<= 39) {
    DDDshow = 'Minas Gerais'}

    else if (inputDDD.value  >= 27 && inputDDD.value <=28) {
    DDDshow = 'Espirito Santo'}

    else {
    DDDshow = 'Outra região'}

    let linha = '<tr>'
    linha += `<td>${inputnome.value}</td>`;
    linha += `<td>${inputDDD.value}</td>`;
    linha += `<td>${inputtel.value}</td>`;
    linha += `<td>${DDDshow} </td>`;
    linha += `</tr>`;

    linhas += linha;

    contadorcontato.push(inputDDD.value);

}

function atualizatabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function mostracontato () {
        
    let linharodape = '<tr>'
    linharodape += `<td>Quantidade de Contatos</td>`;
    linharodape += `<td></td>`;
    linharodape += `<td></td>`;
    linharodape += `<td> ${contadorcontato.length} Contato(os) </td>`;
    linharodape += `</tr>`;

    quantcontato = linharodape;
}

function atualizarodape(){
    const corporodape = document.querySelector('Tfoot');
    corporodape.innerHTML = quantcontato;
}