const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="img/aprovado.png" alt="emoji celebrando">'
const imgReprovado = '<img src="img/reprovado.png" alt="emoji celebrando">'
let linhas ='';

const atividade = []
const notas = []

const notaMedia = parseFloat(prompt('Digite a média', 'Entre 0 a 10'))
const spanAprovado = '<span class=" resultado aprovado ">Aprovado</span>'
const spanReprrovado = '<span class=" resultado reprovado ">Reprovado</span>'
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    adicionaLinha();
    atualizaTabela()
    calculaMedia()
    atualizaMediaFinal()
})

function adicionaLinha (){
    const nomeAtividade = document.getElementById('nome-da-atividade')
    const NotaAtividade = document.getElementById('numero-da-atividade')
    
    if(atividade.includes(nomeAtividade.value)){
        alert(`A atividade ${nomeAtividade.value} já foi inserida`)
    }
    else{
    atividade.push(nomeAtividade.value)
    notas.push(parseFloat(NotaAtividade.value) )

    let linha = '<tr>'
    linha += `<td> ${nomeAtividade.value} </td>`
    linha += `<td> ${NotaAtividade.value} </td>`
    linha += `<td> ${NotaAtividade.value >= notaMedia ?? 7 ? imgAprovado : imgReprovado} </td>`
    linha += '</tr>'

    linhas += linha;  
    }



    nomeAtividade.value = ''
    NotaAtividade.value = ''
}

function atualizaTabela (){
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = linhas
}

function calculaMedia (){
    let somaMedia = 0
    for(let i = 0; i <notas.length; i++){
        somaMedia += notas[i]
    }
    return  somaMedia / notas.length
}

function atualizaMediaFinal (){
    let mediaFinal = calculaMedia()
    const notaFinal = document.getElementById('nota-final').innerHTML = mediaFinal
    const resultadoFinal = document.getElementById('resultado-final')
    resultadoFinal.innerHTML = mediaFinal >= notaMedia ?? 7 ? spanAprovado : spanReprrovado
    
}