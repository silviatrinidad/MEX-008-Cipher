window.cipher = {
  encode: (offset, str) => {
    let codigoModif= 0; // CODIGO MODIFICADO empieza en cero
    let textoModif= ''; // TEXTO MODIFICADO vacio. Tendrá nuevo contenido

    //
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
        console.log(textoModif);
        return textoModif;
    }
};