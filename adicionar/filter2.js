const caixaCursos = document.querySelector('.caixa1')
const cursos = ['HTML', 'sql','Typescript','python','React', 'Css','Javascript']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const removeCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarAntesNovoCurso = document.getElementById('btnAdicionarAntesNovoCurso')
const btnAdicionarDepoisNovoCurso = document.getElementById('btnAdicionarDepoisNovoCurso')
const nomeDoCurso = document.getElementById('nomeCurso')


let indice = 0
const tirarColecao = () => {
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')]
    cursoSelecionado.map((ele) => {
        ele.classList.remove('selecionado')
    })
}
const criarNovoCurso = (curso) =>{
    const novoElemento = document.createElement('div')
    caixaCursos.appendChild(novoElemento)
    novoElemento.setAttribute('id', 'c'+indice)
    novoElemento.setAttribute('class', 'c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click', (evt) =>{
        tirarColecao()
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento
}
cursos.map((el,chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})    

let cursoSelecionado = () =>{
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')]        
    return cursoSelecionado[0]
}
    
btnCursoSelecionado.addEventListener('click', () => {
        if(cursoSelecionado()!=undefined){
        alert(`Curso selecionado é ${cursoSelecionado().innerHTML}`)
        }else{
            alert('selecione um curso')
        }
        
    })

    removeCurso.addEventListener('click', () => {
        const cS = cursoSelecionado()
        if (cS != undefined) {
            cS.remove()
        } else {
            alert('selecione um curso')
        }
    })

btnAdicionarAntesNovoCurso.addEventListener('click', ()=>{
    const cS = cursoSelecionado()
        if(cS != undefined){
            if (nomeDoCurso.value != '') {
            const novoCurso = criarNovoCurso(nomeDoCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado())
        } else {
            alert('Digite o nome do curso')
        }
    }else{
        alert('selecione um curso')
    }
})




btnAdicionarDepoisNovoCurso.addEventListener('click', ()=> {
    const cS = cursoSelecionado()
        if(cS != undefined){
            if (nomeDoCurso.value != '') {
                const novoCurso = criarNovoCurso(nomeDoCurso.value)
                caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
            } else {
                alert('Digite o nome do curso')
            }
        }else{
            alert('selecione um curso')
        }
})