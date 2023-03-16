//Obtener el numero mayor sin utilizar Math.max o devolver undefine si el arr esta vacio
/*
function max(arr) {
let maxNumber = arr[0];
arr.forEach ( (ele) => {
if (maxNumber < ele) {
    maxNumber = ele
}
});
return maxNumber;
}
*/

// function max(arr) {
// let maxNumber = arr[0];
// arr.forEach (function (ele) {
//     if (!arr.length) {
//         return undefined;
//     }else if (maxNumber < ele) {
//         maxNumber = ele
// }
// });
// return maxNumber;
// }

function max(arr) {
    if (!arr.isEmpty) {
        arr.sort ( (a,b) => b-a);
        return arr[0];
    }
    return undefined;
    }




console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined