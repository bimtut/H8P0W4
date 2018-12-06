/*Logic Challenge - Tukar Besar Kecil
Problem
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

Code*/

/*
PSEUDO ALA ALA BIMA
bikin var baru buat nampung huruf yg diolah
jadiin stringnya array dulu pake split ""
lalu cek apakah hurufnya gede atau Kecil
kalo kecil jadiin gede dan masukin ke var baru tadi
kalo gede kecilin dan masukin var baru
kalo spasi ya masukin var baru
semua masukinnya berdasarkan urutan is
kalo udah semua return var baru

MASALAHNYA gw g tau caranya ngecek gede atau kecilnya. ngohohoh
*/
function tukarBesarKecil(kalimat) {
  var tampung = '';
  var a = kalimat.length;

   for (var i = 0; i < a; i++ ) {
     if (kalimat[i] === kalimat[i].toUpperCase()) {
       tampung += kalimat[i].toLowerCase()

      } else if (kalimat[i] === kalimat[i].toLowerCase()) {
        tampung += kalimat[i].toUpperCase()
      }
   }
   return tampung
}
//note : angka dan spasi g akan berubah walau digedein atau dikecilin
// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"