function showImg(){
    let imagem = document.getElementsByTagName("img")[0];
    imagem.style.display="initial";
    let lista = document.getElementsByClassName("listaSobreMim")[0]
    lista.style.display="block";
}

function hideButton(){
    let botao = document.getElementById("botao");
    botao.style.display="none";
}

function executaDois(){
    showImg();
    hideButton();
}