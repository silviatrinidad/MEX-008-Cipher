
const btnReto = document.getElementById('btn-reto');       //llamando al boton btn-reto

const ocultar= (id) => {      // el id se agrega a la clase "oculto", osea no mostrar
  document.getElementById(id).classList.add('oculto');
}

const mostrar= (id) => {
  document.getElementById(id).classList.remove('oculto');  
}
// aaqui se la va a quitar

const abrirReto = () =>{
  ocultar('inicio');
  ocultar('presentacion');
  mostrar('banner-enigma');
  mostrar('instructions');
}

btnReto.addEventListener('click',abrirReto);

//dandole funcion al boton CIFRADO VERNE
const btnInicio =document.getElementById('btn-inicio');

const abrirDecifradoVerne =() => {
  ocultar('inicio');
  ocultar('presentacion');
  ocultar('banner-enigma');
  ocultar('instructions');
  ocultar('cifrado-verne');
  mostrar('decifrado-verne');
}

btnInicio.addEventListener('click', abrirDecifradoVerne);


//dandole funcion al boton DECIFRADO
const btnCifrado =document.getElementById('btn-cifrado');

const abrirCifradoVerne =() => {
  ocultar('inicio');
  ocultar('banner-enigma');
  ocultar('instructions');
  ocultar('decifrado-verne');
  mostrar('cifrado-verne');  
}

btnCifrado.addEventListener('click', abrirCifradoVerne);


/* Decifrado Verne | llamando eventos */
const inputDecifrado= document.getElementById('content-decifrado');
const offsetd= document.getElementById('offset');
const btnDecifrar= document.getElementById('btn-decifrar');
const resultDecifrar= document.getElementById('result-decifrar');
//llamando evento
btnDecifrar.addEventListener('click', () => {
  resultDecifrar.value = cipher.decode(parseInt(offset.value), inputDecifrado.value)
});

/*cifrado verne*/

/*llamando eventos*/

//llamando el contenido del input
const inputContent= document.getElementById('content-cifrado');
// llamando el numero del offset
const offset= document.getElementById('offset');
//llamando al boton de cifrar
const btnCifrar= document.getElementById('btn-cifrar');
//llamando la caja de salida 
const inputResult= document.getElementById('result-cifrado');

//llamando al evento
btnCifrar.addEventListener('click', () => { 
   // console.log(cipher.encode(offset.value, inputContent.value))
    inputResult.value = cipher.encode(parseInt(offset.value), inputContent.value)
})