//AQUI VAMOS A DEFINIR EL BOTON "btn-enigm"  QUE
//DEFINIMOS EN HTML.
const btnReto = document.getElementById('btn-reto');

// el id se agrega a la clase "oculto", osea no mostrar
const ocultar= (id) => {
  document.getElementById(id).classList.add('oculto');
}

const mostrar= (id) => {
  document.getElementById(id).classList.remove('oculto');  
}
// aaqui se la va a quitar

const abrirReto = () =>{
  ocultar('inicio');
  ocultar('section');
  mostrar('banner-enigma');
  mostrar('instructions');
}

btnReto.addEventListener('click',abrirReto);

//dandole funcion al boton CIFRADO VERNE
const btnInicio =document.getElementById('btn-inicio');

const abrirCifradoVerne =() => {
  ocultar('inicio');
  ocultar('banner-enigma');
  ocultar('instructions');
  mostrar('cifrado-verne');  
}

btnInicio.addEventListener('click', abrirCifradoVerne);

//dandole funcion al boton DECIFRADO
const btnDecifrado =document.getElementById('btn-decifrado');

const abrirDecifradoVerne =() => {
  ocultar('inicio');
  ocultar('banner-enigma');
  ocultar('instructions');
  ocultar('cifrado-verne');
  mostrar('decifrado-verne');
}

btnDecifrado.addEventListener('click', abrirDecifradoVerne);



/*---------------------------------------------
---------------------------------------------
---------------------------------------------*/

/*cifrado verne*/

/*llamando eventos*/

//llamando el contenido del input
const inputContent= document.getElementById('content');
// llamando el numero del offset
const offset= document.getElementById('offset');
//llamando al boton de cifrar
const btnCifrar= document.getElementById('btn-cifrar');
//llamando la caja de salida 
const inputResult= document.getElementById('result');

//llamando al evento
btnCifrar.addEventListener('click', () => { 
   // console.log(cipher.encode(offset.value, inputContent.value))
    inputResult.value = cipher.encode(parseInt(offset.value), inputContent.value)
})
