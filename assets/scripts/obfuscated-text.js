/* Skid from minecraft.tools */

function animate_text(delay) {

    setInterval(function process() {

        try {

            let string = document.getElementById('obf');
            if (document.getElementById == null) {
                return;
            }
            let text = string.innerText;

            let words = text.split(' ');
            string.innerText = "";

            for (let i = 0; i < words.length; i++) {
                string.innerText += obfuscate(words[i]) + " ";
            }

        } catch {}

    }, delay);
};

function obfuscate(text) {

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz()[]{},;.:/?!$%*+-";
    let new_text = "";

    for (let i = 0; i < text.length; i++) {
        let new_char = text[i];
        let pos = 0;

        for (let k = 0; k < alphabet.length; k++) {

            if (alphabet[k] == new_char) {
                pos = (k + i + 1) % alphabet.length;
                break;
            }
        }

        new_text += alphabet[pos];
    }

    return new_text;
}
