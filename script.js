const textArea = document.querySelector(".text-area");
const textArea2 = document.querySelector(".text-area-2");
const informacion_2 = document.querySelector(".informacion2");
const informacion_3 = document.querySelector(".informacion3");
const boton_Copiar = document.querySelector(".boton-copiar");
const boton_desencriptar = document.querySelector(".boton-desencriptar")

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    textArea2.value = textoEncriptado;
    textArea.value = "";
    textArea2.style.backgroundImage = "none";
    informacion_2.style.display = "none";
    informacion_3.style.display = "none";
    boton_Copiar.style.display = "";
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    textArea2.value = textoEncriptado;
    textArea.value = "";
    textArea2.style.backgroundImage = "none";
    informacion_2.style.display = "none";
    informacion_3.style.display = "none";
    boton_Copiar.style.display = "";
}

function botonCopiar(){
    var copia = textArea2.value;
    navigator.clipboard.writeText(copia);

    var texto_copiado = document.querySelector(".textoCopiado");
    texto_copiado.textContent = "Texto copiado";
    texto_copiado.style.display = "block";
    setTimeout(() => {
        texto_copiado.style.display = "none";
        informacion_2.style.display = "";
        informacion_3.style.display = "";
        boton_Copiar.style.display = "none";
        textArea2.style.backgroundImage = "";
        textArea2.value = "";
        mostrar();
    }, 950);

}

function encriptar(texto){
    let llavesEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 

    texto = texto.toLowerCase();

    for(let i = 0; i<llavesEncriptacion.length; i++){
        if(texto.includes(llavesEncriptacion[i][0])){
            texto = texto.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }
    return texto;
}

function desencriptar(texto2){
    let llavesEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 

    texto2 = texto2.toLowerCase();

    for(let i = 0; i<llavesEncriptacion.length; i++){
        if(texto2.includes(llavesEncriptacion[i][1])){
            texto2 = texto2.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        }
    }
    return texto2;
}
