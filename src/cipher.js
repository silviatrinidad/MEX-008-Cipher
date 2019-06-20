window.cipher = {
  // DECODIFICAR primero
decode: (offset, str) => {
  let codigoDecod= 0;
  let textoDecod= '';

  for (let i=0; i<str.length; i++) {
    const pastCode= str.charCodeAt(i);

    if (pastCode >= 65 && pastCode <=90) {
      codigoDecod= (pastCode -90 - offset) % 26 + 90;
    } else if (pastCode >= 97 && pastCode <= 122) {
      codigoDecod= (pastCode - 122 - offset) %26 + 122;
    } else {
      codigoDecod= pastCode;
    }
    textoDecod += String.fromCharCode(codigoDecod);
  }
  
  return textoDecod;

},
//codificar
encode: (offset, str) => {
  let codigoModif= 0; // CODIGO MODIFICADO empieza en cero
  let textoModif= ''; // TEXTO MODIFICADO vacio. Tendrá nuevo contenido

// iiniciamos el ciclo for PARA QUE COMIENCE A REVISAR.
  for ( let i=0; i<str.length; i++) {
    const newCode= str.charCodeAt(i);

    if (newCode >= 65 && newCode <= 90) {//formula para mayusculas
      codigoModif= (newCode -65 + offset) % 26 + 65; //aplicando la formula
      //let textoFinal= String.fromCharCode(codigoModif); // devolvemos resultado convertido
      //textoModif += textoFinal;
    } else if (newCode >= 97 && newCode <= 122) { //condicion para minusculas
        codigoModif= (newCode -97 + offset) % 26 + 97;
      } else {
        codigoModif = newCode;
      } 
       textoModif += String.fromCharCode(codigoModif);
    }   
      
      return textoModif;
  
  }
};