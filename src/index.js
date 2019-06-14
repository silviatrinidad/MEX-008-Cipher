//AQUI VAMOS A DEFINIR EL BOTON "btn-enigm" QUE
//DEFINIMOS EN HTML.
const btnReto = document.getElementById('btn-reto');

// el id se agrega a la clase "oculto", osea no mostrar
const ocultar= (id) => {
  document.getElementById(id).classList.add('oculto');
}

const mostrar= (id) => {
  document.getElementById(id).classList.remove('oculto');  
}
// aqui se la va a quitar

const abrirReto = () =>{
  ocultar('inicio');
  ocultar('section');
  mostrar('banner-enigma');
  mostrar('instructions');
}

btnReto.addEventListener('click',abrirReto);

//dandole funcion al boton INICIO
const btnInicio =document.getElementById('btn-inicio');

const abrirCifradoVerne =() => {
  ocultar('inicio');
  ocultar('banner-enigma');
  ocultar('instructions');
  mostrar('cifrado-verne');  
}

btnInicio.addEventListener('click', abrirCifradoVerne);
