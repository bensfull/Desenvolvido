const form = document.getElementById('form-deposito');
const nomeBenefi = document.getElementById('beneficiario')

function validaNome(Nomecompleto){
    const nomeComoArray = Nomecompleto.split(' ');
    return nomeComoArray.length >= 2;
    
}

form.addEventListener('submit', (evt)=>{
    let formValide = false
    evt.preventDefault()
    const beneficiario = document.getElementById('beneficiario');
    const NdaConta = document.getElementById('conta');
    const valorDp= document.getElementById('Vdeposito');
    const adicionar = document.getElementById('demo');
    const messagemSucesso = `Montante de: ${valorDp.value} depositado para o cliente ${beneficiario.value} - conta ${NdaConta.value}`
    const messagemDeFalha = document.getElementById('error')
        formValide = validaNome(beneficiario.value)
    if (formValide) {
        adicionar.style.display = 'block'
        adicionar.innerHTML = messagemSucesso
        beneficiario.value = ''
        NdaConta.value = ''
        valorDp.value = ''
    } else {
        messagemDeFalha.style.display = 'block'
        
    }
})

nomeBenefi.addEventListener('keyup', (e) => {
    console.log(e.target.value)
    formaValide = validaNome(e.target.value)
    
    if (!formaValide) {
        nomeBenefi.classList.add('erro')
        const erro = document.getElementById('error').style.display= 'block'
        // nomeBenefi.style.outline = '6px solid red'
    } else {
        nomeBenefi.classList.remove('erro')
        nomeBenefi.style = ''
        const erro = document.getElementById('error').style.display= 'none'
    }
})




