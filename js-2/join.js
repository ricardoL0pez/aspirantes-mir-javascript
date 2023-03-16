/*Crear una función join que reciba un arreglo
y retorne un string con todos los elementos separados por espacio 
sin usar el método join de los arreglos.
*/


function join (arr) {
    let str = "";
    arr.forEach ( ele => {
        str += ele +  " "; 
});
return str.trimEnd();
}



console.log (join (["Hola","mundo","!"]));

