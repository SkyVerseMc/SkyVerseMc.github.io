function reject_cookies() {

    localStorage.setItem("cookies", "deny");
    new Audio('/assets/sounds/orb.ogg').play();

    document.getElementById('cookies-popup').remove();
}

function allow_cookies() {

    localStorage.setItem("cookies", "allow");
    new Audio('/assets/sounds/intoxication.ogg').play();

    setTimeout(function () {
        document.getElementById('cookie').style.display = "none";
        document.getElementById('death').style.display = "inline-block";
    }, 645);

    setTimeout(function () {
        document.getElementById('cookies-popup').remove();
    }, 2000);
}



function popup() {

    setTimeout(function () {

        if (localStorage.getItem("cookies") != undefined) return;

        if (document.getElementById('cookies-popup') == null) {

            let popup = document.createElement('div');
            popup.className = "popup";
            popup.id = 'cookies-popup';
            document.body.innerHTML = `
        
        <style>
        .popup {
            z-index: 9999 !important;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            margin-left: auto;
            margin-right: auto;
            width: 40%;
        }

        @media only screen and (max-width: 600px) {
            .popup {
                width: 100vw;
            }
        }
        @media only screen and (min-width: 600px) {
            .popup {
                width: 50vw;
            }
        }
        @media only screen and (min-width: 768px) {
            .popup {
                width: 40vw;
            }
        }
        
        .popup-body {
            background-image: url("/assets/images/popup.png");
            background-size: cover;
            padding: 20px;
        }
        .popup-body>.button {
            margin: 10px;
            width: 200px;
            height: 20px;
        }
        .popup-body>.button>.button-text {
    
            position: relative;
            top: -8px;
            font-size: 10px;
        }
    </style>` + document.body.innerHTML;
    
    popup.innerHTML = `
    <center>
        <div class="popup-body">
        <span class="mcfont">We use cookies to feed parrots. <img id="cookie" src="/assets/images/cookie.png" width="30px;" height="30px;" style="margin-bottom:-7px;"></span><img id="death" style="display: none;" src="/assets/images/death.gif" width="60px;" height="60px;">
        <br>
        <button class="button mcfont" id="button" onclick="reject_cookies();">
            <p class="button-text">Deny</p>
        </button>
        <button class="button mcfont" id="button" onclick="allow_cookies();">
            <p class="button-text">Allow</p>
        </button>
        </div>
    </center>
    `;

            document.body.appendChild(popup);
        }

    }, 5000);

}