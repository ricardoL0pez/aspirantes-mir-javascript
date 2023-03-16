//Suma los elementos de un array

/*function sum (arr) {
    let totalSuma = arr.reduce (function (acm,ele) {
        return acm+ele;
    });
    return totalSuma;
}*/

function sum (arr) {
    let totalSuma = 0;
    arr.forEach(element =>  totalSuma += element);
       return totalSuma;
}




// escribe la función sum acá


console.log(sum([10, 8, 12, 10])) // 40




