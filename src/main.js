//buttons
const buttonEcriptar = document.querySelector('.encriptar')
const buttonDesencriptar = document.querySelector('.desencriptar')
const buttonCopiar = document.querySelector('.copiar')


const cifrado = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}

//mostrar mensaje encriptado
const showMessage = (message) => {
    //ocultar el texto principal
    const messageNotFound = document.querySelector(".messageNotFound");
    const description = document.querySelector(".description");
    messageNotFound.style.display = "none" 
    description.style.display = "none" 
    
    //mostrar el texto cifrado
    const messageBox = document.querySelector(".message")
    messageBox.innerHTML = `${message}`
    messageBox.style.display = 'block'
    
    //mostrar boton copiar
    const copyButton = document.querySelector(".copiar")
    copyButton.style.display='inline-block';
}

//encriptacion
const encriptar = (text) => {
    //pasar de string a array
    const arrayText = text.split('');

    //logica
    arrayText.forEach((character, i) => {
        switch (character) {
            case 'a':
                arrayText[i] = cifrado.a
                break;
            case 'e':
                arrayText[i] = cifrado.e
                break;
            case 'i':
                arrayText[i] = cifrado.i;
                break;
            case 'o':
                arrayText[i] = cifrado.o;
                break;
            case 'u':
                arrayText[i] = cifrado.u;
                break;
            default:
                break;
        }
    });

    //regresando a string
    const newText = arrayText.join('')
    showMessage(newText);
}

//obtener el texto del textarea
const getText = () => {
    let text = document.querySelector('textarea').value;
    encriptar(text)
}

//funcion para copiar al portapapeles
const copyToClipboard = () => {
    let message = document.querySelector(".message").innerText;
    console.log(message)
    navigator.clipboard.writeText(message).then(()=>{
        alert("Mensaje copiado al portapapeles");
    }).catch(err => {
        console.log('Error al copiar el mensaje')
    })
}

//eventos
buttonEcriptar.addEventListener('click', getText)
buttonCopiar.addEventListener( "click", copyToClipboard);
