var imgs = document.getElementById("sstart");

function setOpacity(value){
    imgs.style.opacity = value/10;
    imgs.style.filter = 'alpha(opacity=' + value*10 + ')';
}