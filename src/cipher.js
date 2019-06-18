window.cipher = {
  encode: (offset, str) => {
    let codigoModif= 0; // CODIGO MODIFICADO empieza en cero
    let textoModif= ''; // TEXTO MODIFICADO vacio. Tendrá nuevo contenido

    //
// iniciamos el ciclo for PARA QUE COMIENCE A REVISAR
    for ( let i=0; i<=str.length; i++) {
      const newCode= str.charCodeAt(i);

      if (newCode >= 65 && newCode <= 90) {
        codigoModif= (newCode -65 + offset) % 26 + 65; //aplicando la formula
        let textoFinal= String.fromCharCode(codigoModif); // devolvemos resultado convertido
        textoModif+=textoFinal;
      }


    }

    return textoModif;

  },

}
