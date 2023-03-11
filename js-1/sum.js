/*Funcion que  que reciba un número positivo 
y retorne la suma de todos los números desde 1 hasta ese número
*/

function sum(num){
    let suma=0;
    for (let i=0; i<=num; i++) {
       suma += i;
    }
    return suma;
}

