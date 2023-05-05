const btnFormRegister = document.querySelector('#btnForm');

btnFormRegister.addEventListener('click', ()=>{
    const formBox = document.querySelector('#form-box-1');
    const formBoxLogin = document.querySelector('#form-box-2');
    const codigoAcesso = document.querySelector('#codigoAcesso').value
    if(codigoAcesso == 'codigo'){
        alert("Cadastro realizada com sucesso!")
        formBox.classList.remove('inactive')
        formBoxLogin.classList.add('inactive')
    }
    else{
        alert("Código Incorreto!")
        return;
    }
    
})
