function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = 8
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 5 && hora < 12){
    //BOM DIA
    img.src = "manha.png"
    window.document.body.style.background = "#bac7cd"
}else if (hora >= 12 && hora < 18){
    //BOA TARDE
    img.src = "tarde.png"
    window.document.body.style.background = "#2d6db5"
}else{
    //BOA NOITE
    img.src = "noite.png"
    document.body.style.background = "#223f51"
}
}