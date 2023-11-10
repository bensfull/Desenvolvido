// oque precisamos fazer 
const personagens = document.querySelectorAll('.personagem');
// passo 2
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () =>{
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior:'smooth'})
        }
        // passo 3
    const personagemselecionado = document.querySelector('.Selecionado');
    personagemselecionado.classList.remove('Selecionado');
        personagem.classList.add('Selecionado');
        
        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, 
        // trocar a imagem, o nome e a descrição do personagem grande 
        // Passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
        // Passou 2 - alterar a imagem do personagem grande 
        const idpersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `projeto/card-${idpersonagem}.png`;
        //  Passo 3 - alterar o nome do personagem grande
        const nomepersonagem = document.getElementById('nome-personagem');
        nomepersonagem.innerText = personagem.getAttribute('data-name');
        // passo 4 - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    } )
})