/* To make my arrows spin :D */

function clicked(arrows) {

    if (arrows.className.includes(' clicked')) {
    
        arrows.className += " unclicked";
        document.getElementById("social").style.display = "none";
    
        setTimeout(function(){
            arrows.className = arrows.className.replaceAll(' clicked unclicked', ' rotate');
        }, 400);
    
    } else {
    
        arrows.className = arrows.className.replaceAll(' rotate', ' clicked');
        setTimeout(function(){
            document.getElementById("social").style.display = "block";
        }, 400);
    }
}