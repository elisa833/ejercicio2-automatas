const codigoMorse = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
    'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
    'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
    'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
    'Z': '--..', '0': '_ _ _ _ _', '1': '._ _ _ _', '2':'.._ _ _','3':'..._ _',
    '4':'...._', '5':'.....', '6':'_....','7':'_ _...','8':'_ _ _..','9':'_ _ _ _.'
}

const $texto = document.getElementById('texto');
const $resultado = document.getElementById('resultado');
const $palabra = document.getElementById('palabra');

let textoInput = [];
let resultado = [];

const validarCaracteres = /^[%/()*+-]+$/;

const validaciones = (texto) => {
    if (texto.length == '') {
        return [false,'No puedes dejar el campo vacio'];
    } else if (validarCaracteres.test(texto)) {
        return [false,'No puedes ingresar caracteres especiales'];
    } else {
        return [true];
    }
}

document.getElementById('morse').addEventListener('click',() => {
    textoInput = [];
    resultado = [];

    textoInput = $texto.value.split('');

    if (validaciones(textoInput.join(''))[0]) {
        textoInput.map((letra) => {
            for (const clave in codigoMorse) {
                if (letra.toLowerCase() == clave.toLowerCase()) {
                    resultado.push(codigoMorse[clave]);
                }
            }
        });
        $resultado.value = resultado.join().replaceAll(',',' ');
        $palabra.textContent = textoInput.join('');
        $texto.value = '';
    } else {
        Swal.fire({icon: "error", text: `${validaciones(textoInput.join(''))[1]}`});
    }
});

document.getElementById('letra').addEventListener('click',() => {
    textoInput = [];
    resultado = [];

    textoInput = $texto.value.split(' ');
    
    textoInput.map((morse) => {
        for (const clave in codigoMorse) {
            if (morse == codigoMorse[clave]) {
                resultado.push(clave);
            }
        }
    });
    
    $resultado.value = resultado.join('').trim();
    $palabra.textContent = textoInput.join().replaceAll(',',' ');
    $texto.value = '';
});