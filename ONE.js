// Obtenemos los elementos del DOM
const textInput = document.getElementById('text');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const resultHeading = document.getElementById('resultHeading');

// Agregamos eventos a los botones de encriptar y desencriptar
encryptButton.addEventListener('click', () => {
    const encryptedText = encrypt(textInput.value);
    resultHeading.textContent = encryptedText;
});

decryptButton.addEventListener('click', () => {
    const decryptedText = decrypt(textInput.value);
    resultHeading.textContent = decryptedText;
});

// Objeto con las reglas de encriptación y desencriptación
const rules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Función para encriptar el texto
function encrypt(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (rules.hasOwnProperty(char)) {
            encryptedText += rules[char];
        } else {
            encryptedText += char;
        }
    }
    return encryptedText;
}

// Función para desencriptar el texto
function decrypt(encryptedText) {
    let decryptedText = '';
    let i = 0;
    while (i < encryptedText.length) {
        let found = false;
        for (const rule in rules) {
            if (encryptedText.startsWith(rules[rule], i)) {
                decryptedText += rule;
                i += rules[rule].length;
                found = true;
                break;
            }
        }
        if (!found) {
            decryptedText += encryptedText[i];
            i++;
        }
    }
    return decryptedText;
}
