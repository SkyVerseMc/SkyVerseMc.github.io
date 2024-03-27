/* ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️ */

const sequence = '38384040373937396665';

function onKonamiCode(cb) {

    var input = '';

    document.addEventListener('keydown', function (e) {

        input += ("" + e.keyCode);

        if (input.endsWith(sequence)) {
            return cb();
        }
    });
}

onKonamiCode(function () { window.location.href = "https://github.com/SkyVerseMc" })