function validarEmail(){

    var email = document.querySelector('#email')
    var error = document.querySelector('#error-email')

    if(!email.checkValidity()){
        error.innerHTML = "Email inválido"
    }
    else{
        error.innerHTML = ""
    }

}

function validarNome(){

    var errorN = document.querySelector('#error-name')
    var name = document.querySelector('#name').value

    if(name.length < 3){
        errorN.innerHTML = "O nome precisa ter mais de 3 caracteres"
    }
    else{
        errorN.innerHTML = ""
    }
}

function validarSenha(){

    var password = document.querySelector('#password').value
    var errorP = document.querySelector('#error-password')

    if(password.length < 6){
        errorP.innerHTML = "A senha precisa ter mais de 6 caracteres"
    }
    else{
        errorP.innerHTML = ""
    }
}




















