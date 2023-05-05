const btnFormRegister = document.querySelector('#btnFormRegister');

btnFormRegister.addEventListener('click', ()=>{
    const formBox = document.querySelector('#cadastro');
    const formBoxLogin = document.querySelector('#login');
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
