 /*Si el número es 1 retorna "El color es negro".
Si el número es 2 retorna "El color es blanco".S
i el número es 3 retorna "El color es azul".
De lo contrario retorna "El color es verde".*/

function calcularColor(num) {
    var color;

    if (num === 1) {
      color = "black";
    } else if (num === 2) {
      color = "blanco";
    } else  if (num === 3) {
      color = "rojo";
    } else  {
      color= "verde";
    } return "El color es " + color;
  }

 