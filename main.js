const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./midias/aprovado.png" alt = "emoji feliz" />';
const imgReprovado = '<img src="./midias/reprovado.png" alt = "emoji triste" />';
const atividades = [];
const notas =[];
const spanAprovado = '<apan class= "resultado aprovado">Aprovado</span>';
const spanReprovado = '<apan class= "resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("digite a nota mínima: "));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
    calculaMediaFinal();
});

function adicionaLinha(){
    const imputNomeAtividade = document.getElementById ('nome-atividade');
    const imputNotaAtividade = document.getElementById ('nota-atividade');

    if(atividades.includes(imputNomeAtividade.value)){
        alert(`A atividade: ${imputNomeAtividade.value} já foi adicionada`);
    } 
    else {
    atividades.push(imputNomeAtividade.value);
    notas.push(parseFloat(imputNotaAtividade.value));

    let linha ='<tr>';
    linha+=`<td> ${imputNomeAtividade.value}</td>`;
    linha+= `<td>${imputNotaAtividade.value}</td>`;
    linha+=`<td>${imputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha+= `</tr>`;

    linhas += linha;
    }

    imputNomeAtividade.value = '';
    imputNotaAtividade.value = '';
} 

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas; 
} 

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

    console.log(media); 
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i< notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}