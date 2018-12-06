/*Logic Challenge - Mencari Median
Problem
Diberikan sebuah function cariMedian(arr) yang menerima sebuah array angka. Function akan me-return median dari deret angka tersebut. Median adalah nilai tengah dari sebuah deret bilangan. Contoh, median atau dari [1, 2, 3, 4, 5] adalah 3 yang merupakan nilai yang ada di posisi tengah dari deret tersebut. Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah. Contoh, median dari [1, 2, 3, 4] adalah 2.5, karena (2 + 3 / 2).
*/

//Code
function cariMedian(arr) {
  var a = arr.length;
  if (a%2 == 1) {
    var iga = Math.round(a/2) - 1
    var medga = arr[iga]
    return medga  

  } else {
    var ige = a/2 - 1;
    var medge = (arr[ige] + arr[ige + 1])/ 2
    return medge
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3 //length= 5, max index=4. med di pos 3 atau i=2
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7 //length= 6. med di pos 3,4. i di 2,3
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5