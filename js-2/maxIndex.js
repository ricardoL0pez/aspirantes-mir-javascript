//reciba un arr de números y retorna el índice donde se encuentra el mayor. 
//Si el arreglo está vacío debe retornar -1.

// function maxIndex(arr) {
//     if (!arr.length) {
//         return -1;
//     } 
//     let maxInd = 0;
//     arr.forEach (function (ele,ind) {
//         if (ele > arr[maxInd]) {
//              maxInd = ind;
//     }
//     });
//     return maxInd;
//     }

   
function maxIndex(arr) {
    if (arr.length) {
        return arr.indexOf (Math.max (...arr));
    } 
    return -1;
    }

      


console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1