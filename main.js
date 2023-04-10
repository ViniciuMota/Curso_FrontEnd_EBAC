const form = document.getElementById('form')
const containerMessage_error = document.querySelector('.message-error')
const containerMessage_succses = document.querySelector('.message-succses')

let formEValido = false

function validaFormulario(campoA, campoB){

    return parseInt(campoB) > parseInt(campoA)
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = document.getElementById('campoA')
    const campoB = document.getElementById('campoB')
    const messageValida = "Formulario é valido"
    const messageInvalida = "Formulario é invalido"

    formEValido = validaFormulario(campoA.value, campoB.value)
    if(formEValido){
        containerMessage_succses.innerHTML = messageValida
        containerMessage_succses.style.display='block'
        containerMessage_error.style = 'none'
        //containerMessage.classList.add('success')
    }else{
        containerMessage_error.innerHTML = messageInvalida
        containerMessage_error.style.display='block'
        containerMessage_succses.style = 'none'
        //containerMessage.classList.add('error')
    }
})
console.log(form)