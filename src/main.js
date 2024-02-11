//buttons
const buttonEcriptar = document.querySelector('.encriptar')
const buttonDesencriptar = document.querySelector('.desencriptar')


const cifrado = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}

//mostrar


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
    console.log(newText)
}

//obtener el texto del textarea
const getText = () => {
    let text = document.querySelector('textarea').value;
    console.log(text)
    encriptar(text)
}

//eventos
buttonEcriptar.addEventListener('click', getText)
